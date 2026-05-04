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
const Page = forwardRef<HTMLDivElement, { src: string; alt: string; pageNum: number; total: number }>(
  function Page({ src, alt, pageNum, total }, ref) {
    return (
      <div ref={ref} className="bg-white shadow-md overflow-hidden">
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
        <div className="absolute bottom-2 right-3 text-[10px] text-gray-400 font-medium pointer-events-none">
          {pageNum} / {total}
        </div>
      </div>
    );
  }
);

export default function Flipbook({ folder, pageCount, aspectRatio = 1.55, title, downloadHref }: FlipbookProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<any>(null);
  const [size, setSize] = useState<{ w: number; h: number } | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Compute responsive book size
  useEffect(() => {
    function updateSize() {
      const el = containerRef.current;
      if (!el) return;
      const containerWidth = el.clientWidth;
      // On mobile (≤640px) show single page; otherwise two-page spread
      const isMobile = window.innerWidth < 768;
      // Each page width:
      const pageW = isMobile ? containerWidth : containerWidth / 2;
      // Constrain max page width
      const maxPageW = isMobile ? 600 : 600;
      const finalPageW = Math.min(pageW, maxPageW);
      const finalPageH = Math.round(finalPageW / aspectRatio);
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
        <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
          {title && <h3 className="text-xl font-bold text-roi-navy">{title}</h3>}
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

      <div ref={containerRef} className="w-full flex flex-col items-center">
        {size && (
          <>
            <div className="w-full flex justify-center">
              <HTMLFlipBook
                ref={bookRef}
                width={size.w}
                height={size.h}
                size="stretch"
                minWidth={300}
                maxWidth={1000}
                minHeight={200}
                maxHeight={700}
                maxShadowOpacity={0.4}
                showCover={false}
                mobileScrollSupport={true}
                drawShadow={true}
                flippingTime={700}
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
                onFlip={(e: any) => setCurrentPage(e.data)}
              >
                {pages.map((p) => (
                  <Page
                    key={p.pageNum}
                    src={p.src}
                    alt={`Blueprint page ${p.pageNum} of ${pageCount}`}
                    pageNum={p.pageNum}
                    total={pageCount}
                  />
                ))}
              </HTMLFlipBook>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={() => bookRef.current?.pageFlip()?.flipPrev()}
                disabled={currentPage === 0}
                className="w-10 h-10 rounded-full border border-gray-300 bg-white text-roi-navy hover:bg-roi-navy hover:text-white hover:border-roi-navy transition-colors flex items-center justify-center cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-roi-navy disabled:hover:border-gray-300"
                aria-label="Previous page"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="text-sm font-medium text-roi-navy">
                Page <span className="font-bold">{currentPage + 1}</span> of <span className="text-gray-400">{pageCount}</span>
              </div>

              <button
                onClick={() => bookRef.current?.pageFlip()?.flipNext()}
                disabled={currentPage >= pageCount - 1}
                className="w-10 h-10 rounded-full border border-gray-300 bg-white text-roi-navy hover:bg-roi-navy hover:text-white hover:border-roi-navy transition-colors flex items-center justify-center cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-roi-navy disabled:hover:border-gray-300"
                aria-label="Next page"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <p className="mt-3 text-xs text-gray-400 text-center">
              Click page corners or use arrows to flip. Drag corners to peek.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
