#!/usr/bin/env python3
"""Generate the sitewide default OG image (1200x630) for ROI Self Storage."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

PROJECT = Path(__file__).resolve().parent.parent
OUT_DIR = PROJECT / "public" / "og"
OUT_DIR.mkdir(parents=True, exist_ok=True)
OUT_FILE = OUT_DIR / "default.jpg"

W, H = 1200, 630
ROI_NAVY = (26, 26, 46)
ROI_RED = (228, 12, 25)
WHITE = (255, 255, 255)
LIGHT_GREY = (220, 220, 230)

img = Image.new("RGB", (W, H), ROI_NAVY)
d = ImageDraw.Draw(img)

# Subtle grid pattern
for x in range(0, W, 60):
    d.line([(x, 0), (x, H)], fill=(38, 38, 60), width=1)
for y in range(0, H, 60):
    d.line([(0, y), (W, y)], fill=(38, 38, 60), width=1)

# Left red accent bar
d.rectangle([0, 0, 12, H], fill=ROI_RED)

# Logo
logo_path = PROJECT / "public" / "brand" / "logo-horizontal-white.png"
if logo_path.exists():
    logo = Image.open(logo_path).convert("RGBA")
    # scale to 420px wide
    ratio = 420 / logo.width
    logo = logo.resize((420, int(logo.height * ratio)), Image.LANCZOS)
    img.paste(logo, (70, 80), logo)

# Headline + tagline
def load_font(size, bold=False):
    candidates = [
        "C:/Windows/Fonts/segoeuib.ttf" if bold else "C:/Windows/Fonts/segoeui.ttf",
        "C:/Windows/Fonts/arialbd.ttf" if bold else "C:/Windows/Fonts/arial.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    ]
    for p in candidates:
        try:
            return ImageFont.truetype(p, size)
        except Exception:
            continue
    return ImageFont.load_default()

title_font = load_font(64, bold=True)
sub_font = load_font(32, bold=False)
cta_font = load_font(26, bold=True)

# Headline
d.text((70, 260), "Pre-Engineered Metal", font=title_font, fill=WHITE)
d.text((70, 332), "Self Storage Buildings", font=title_font, fill=ROI_RED)

# Tagline
d.text((70, 432), "Custom-engineered. Nationwide delivery.", font=sub_font, fill=LIGHT_GREY)
d.text((70, 472), "Standard, climate, boat & RV, flex, retrofit.", font=sub_font, fill=LIGHT_GREY)

# CTA pill bottom-left
cta_text = "roiselfstoragebuildings.com"
bbox = d.textbbox((0, 0), cta_text, font=cta_font)
text_w = bbox[2] - bbox[0]
pad_x, pad_y = 24, 14
pill_w = text_w + pad_x * 2
pill_h = (bbox[3] - bbox[1]) + pad_y * 2
pill_x = 70
pill_y = H - pill_h - 60
d.rounded_rectangle(
    [pill_x, pill_y, pill_x + pill_w, pill_y + pill_h],
    radius=pill_h // 2,
    fill=ROI_RED,
)
d.text((pill_x + pad_x, pill_y + pad_y - 2), cta_text, font=cta_font, fill=WHITE)

# Phone bottom-right
phone = "(865) 316-9009"
phone_bbox = d.textbbox((0, 0), phone, font=cta_font)
d.text((W - 70 - (phone_bbox[2] - phone_bbox[0]), H - 80), phone, font=cta_font, fill=WHITE)

img.save(OUT_FILE, "JPEG", quality=90, optimize=True)
print(f"Wrote {OUT_FILE} ({OUT_FILE.stat().st_size // 1024} KB)")
