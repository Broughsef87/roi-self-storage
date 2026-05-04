#!/usr/bin/env python3
"""
Convert a PDF blueprint into PNG pages for the flipbook component.

Usage:
  python scripts/pdf-to-flipbook.py <input.pdf> <output-folder-name>

Example:
  python scripts/pdf-to-flipbook.py "C:/Users/broug/Downloads/Proposals (9).pdf" 50x150-rv-storage

Outputs page-1.png, page-2.png, ... into public/blueprints/<output-folder-name>/
Also writes manifest.json with page count and dimensions for the React component.
"""
import sys
import json
from pathlib import Path
import fitz  # PyMuPDF


def convert(pdf_path: Path, out_name: str, dpi: int = 150) -> None:
    project_root = Path(__file__).resolve().parent.parent
    out_dir = project_root / "public" / "blueprints" / out_name
    out_dir.mkdir(parents=True, exist_ok=True)

    # Clean old pages
    for old in out_dir.glob("page-*.png"):
        old.unlink()

    doc = fitz.open(pdf_path)
    zoom = dpi / 72  # 72dpi is PDF native
    matrix = fitz.Matrix(zoom, zoom)

    pages_info = []
    for i, page in enumerate(doc, start=1):
        pix = page.get_pixmap(matrix=matrix, alpha=False)
        out_file = out_dir / f"page-{i}.png"
        pix.save(str(out_file))
        pages_info.append({
            "page": i,
            "src": f"/blueprints/{out_name}/page-{i}.png",
            "width": pix.width,
            "height": pix.height,
        })
        print(f"  -> page-{i}.png ({pix.width}x{pix.height})")

    manifest = {
        "name": out_name,
        "pageCount": len(pages_info),
        "pages": pages_info,
    }
    (out_dir / "manifest.json").write_text(json.dumps(manifest, indent=2))
    print(f"\nWrote {len(pages_info)} pages + manifest.json to {out_dir}")
    doc.close()


def main() -> int:
    if len(sys.argv) != 3:
        print(__doc__)
        return 1
    pdf_path = Path(sys.argv[1])
    out_name = sys.argv[2]
    if not pdf_path.exists():
        print(f"ERROR: PDF not found: {pdf_path}")
        return 1
    convert(pdf_path, out_name)
    return 0


if __name__ == "__main__":
    sys.exit(main())
