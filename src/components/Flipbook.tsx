"use client";

import { useEffect, useRef, useState, forwardRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

// react-pageflip uses DOM APIs — must be client-only
const HTMLFlipBook = dynamic(() => import("react-pageflip"), { ssr: false });

interface FlipbookProps {
  /** Folder name under public/blueprints, e.g. "50x150-rv-storage" */
  folder: string;
  /** Total page count (matches files page-1.png ... page-N.png) */
  pageCount: number;
  /** Source aspect ratio: width/height of the original PDF page */
  aspectRatio?: number;
  /** Optional title shown above the book */
  title?: string;
  /** Optional download URL for the original PDF */
  downloadHref?: string;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
const Page = forwardRef<HTMLDivElement, { src: string; alt: string; pageNum: number }>(
  function Page({ src, alt, pageNum }, ref) {
    return (
      <div ref={ref} className="bg-white overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={pageNum <= 2}
          />
        </div>
      </div>
    );
  }
);

export default function Flipbook({ folder, pageCount, aspectRatio = 1.55, title, downloadHref }: FlipbookProps) {
  const bookRef = useRef<any>(null);
  const [size, setSize] = useState<{ w: number; h: number; mobile: boolean } | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Compute responsive book size — fills the viewport
  useEffect(() => {
    function updateSize() {
      const viewportW = window.innerWidth;
      const viewportH = window.innerHeight;
      const isMobile = viewportW < 768;

      // Desktop: two-page spread fills 95% of viewport width.
      // Mobile: single page fills 95% of viewport width.
      // In both cases cap height at 85% of viewport so the book fits on screen.
      const targetSpreadW = Math.min(viewportW * 0.95, 2800);
      let pageW = isMobile ? targetSpreadW : targetSpreadW / 2;
      let pageH = Math.round(pageW / aspectRatio);

      const maxH = Math.round(viewportH * 0.85);
      if (pageH > maxH) {
        pageH = maxH;
        pageW = Math.round(pageH * aspectRatio);
      }

      setSize({ w: pageW, h: pageH, mobile: isMobile });
    }
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [aspectRatio]);

  const pages = Array.from({ length: pageCount }, (_, i) => ({
    pageNum: i + 1,
    src: `/blueprints/${folder}/page-${i + 1}.png`,
  }));

  if (!isMounted) {
    return (
      <div className="w-full">
        <div className="aspect-[3.1] w-full bg-gray-100 rounded-lg animate-pulse" />
      </div>
    );
  }

  return (
    <div className="w-full">
      {(title || downloadHref) && (
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3 max-w-7xl mx-auto px-4">
          {title && <h3 className="text-xl lg:text-2xl font-bold text-current">{title}</h3>}
          {downloadHref && (
            <a
              href={downloadHref}
              download
              className="inline-flex items-center gap-2 bg-roi-red hover:bg-roi-darkred text-white font-semibold text-sm px-5 py-2.5 rounded-md transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </a>
          )}
        </div>
      )}

      <div className="w-full flex justify-center">
        {size && (
          <HTMLFlipBook
            // Re-mount whenever dimensions or portrait/landscape flip
            key={`${size.w}x${size.h}-${size.mobile ? "p" : "l"}`}
            ref={bookRef}
            width={size.w}
            height={size.h}
            size="fixed"
            minWidth={200}
            maxWidth={3000}
            minHeight={150}
            maxHeight={2000}
            maxShadowOpacity={0.5}
            showCover={false}
            mobileScrollSupport={true}
            drawShadow={true}
            flippingTime={750}
            usePortrait={size.mobile}
            startZIndex={0}
            autoSize={false}
            clickEventForward={false}
            useMouseEvents={true}
            swipeDistance={30}
            showPageCorners={true}
            disableFlipByClick={false}
            style={{ background: "transparent" }}
            className=""
            startPage={0}
          >
            {pages.map((p) => (
              <Page
                key={p.pageNum}
                src={p.src}
                alt={`Blueprint page ${p.pageNum} of ${pageCount}`}
                pageNum={p.pageNum}
              />
            ))}
          </HTMLFlipBook>
        )}
      </div>
    </div>
  );
}
