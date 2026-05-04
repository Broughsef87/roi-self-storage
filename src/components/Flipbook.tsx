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
  const containerRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<any>(null);
  const [size, setSize] = useState<{ w: number; h: number } | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Compute responsive book size — bigger and more featured
  useEffect(() => {
    function updateSize() {
      const el = containerRef.current;
      if (!el) return;
      const containerWidth = el.clientWidth;
      const viewportH = window.innerHeight;
      const isMobile = window.innerWidth < 768;

      // Each page width: full width on mobile, half spread on desktop
      const pageW = isMobile ? containerWidth : containerWidth / 2;
      // Bumped up max page size — bigger, more presence
      const maxPageW = isMobile ? 700 : 900;
      const finalPageW = Math.min(pageW, maxPageW);
      let finalPageH = Math.round(finalPageW / aspectRatio);

      // Cap height to viewport so the book always fits comfortably on screen
      const maxH = Math.round(viewportH * 0.82);
      if (finalPageH > maxH) {
        finalPageH = maxH;
      }

      setSize({ w: finalPageW, h: finalPageH });
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
      <div ref={containerRef} className="w-full">
        <div className="aspect-[1.55] w-full bg-gray-100 rounded-lg animate-pulse" />
      </div>
    );
  }

  return (
    <div className="w-full">
      {(title || downloadHref) && (
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          {title && <h3 className="text-xl lg:text-2xl font-bold text-roi-navy">{title}</h3>}
          {downloadHref && (
            <a
              href={downloadHref}
              download
              className="inline-flex items-center gap-2 text-sm font-semibold text-roi-red hover:text-roi-darkred transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </a>
          )}
        </div>
      )}

      <div ref={containerRef} className="w-full flex justify-center">
        {size && (
          <div className="flipbook-shell">
            <HTMLFlipBook
              ref={bookRef}
              width={size.w}
              height={size.h}
              size="stretch"
              minWidth={300}
              maxWidth={1400}
              minHeight={200}
              maxHeight={1000}
              maxShadowOpacity={0.5}
              showCover={false}
              mobileScrollSupport={true}
              drawShadow={true}
              flippingTime={750}
              usePortrait={true}
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
          </div>
        )}
      </div>
    </div>
  );
}
