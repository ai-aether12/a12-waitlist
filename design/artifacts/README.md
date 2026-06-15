# Handoff: Aether12 Waitlist Page

## Overview

This is the waitlist / landing page for Aether12 — an AI assistant built specifically for people with ADHD. The page captures email signups, communicates the product's core value proposition through animated app mockups, and provides proof points about how the product works. It was designed with ADHD UX principles throughout: low activation cost, recognition copy, explicit "what this isn't" framing, and RSD-safe language.

The page is production-ready in terms of design direction. It has a working Loops.so email capture integration already scaffolded.

---

## About the Design Files

The HTML files in this bundle are **high-fidelity design references** built as interactive prototypes. They are not production code to copy directly. Your task is to **recreate these designs in the target codebase** (the existing `a12-waitlist` repository) using its established patterns.

The current production site is a static HTML/CSS/JS site hosted via GitHub Pages. The design files use Google Fonts (loaded via CDN), inline CSS, and vanilla JS for interactivity. The implementation should match this stack unless you choose to migrate — no framework is strictly required.

**Reference the HTML files visually and structurally** — measure spacing, colors, and typography directly from them. The README documents all tokens explicitly for convenience.

---

## Fidelity

**High-fidelity.** These are pixel-accurate mockups with final colors, typography, spacing, and interactions. Recreate them pixel-precisely. Do not substitute the design system's defaults — every value here is intentional.

---

## Variant Selection

The prototype contains four variants (A · Minimal, B · Centered, C · Editorial, D · Radical). **Variant A (Minimal) is the selected direction.** Implement Variant A only. The other variants exist for reference and do not need to be shipped.

---

## Sections (Variant A — top to bottom)

### 1. Navigation Bar
- Full-width, `max-width: 1100px` centered, `padding: 20px 48px`
- Left: Wordmark — `AETHER` in `DM Mono`, `13px`, `letter-spacing: 0.22em`, `text-transform: uppercase`, `color: #1a1512`
- Right: "First 100" pill — `DM Mono 10px`, `letter-spacing: 0.16em`, `uppercase`, `color: #3d9e72`, `background: rgba(61,158,114,0.08)`, `border: 1px solid rgba(61,158,114,0.22)`, `border-radius: 20px`, `padding: 5px 12px`
- Sticky on scroll (implement with `position: sticky; top: 0`), `background: rgba(242,237,230,0.92)`, `backdrop-filter: blur(12px)`, `border-bottom: 1px solid rgba(26,21,18,0.07)`
- Mobile (`≤767px`): `padding: 18px 20px`

### 2. Hero — Split Layout
- `display: grid`, `grid-template-columns: 1fr 348px`, `gap: 96px`, `align-items: center`
- `max-width: 1100px`, `margin: 0 auto`, `padding: 60px 48px 0`
- Mobile: single column, copy first (`order: 0`), carousel second (`order: 1`)

#### 2a. Left Copy Column
- **Headline:** `font-family: Fraunces`, `font-weight: 600`, `font-size: clamp(52px, 6vw, 80px)`, `letter-spacing: -0.03em`, `line-height: 0.97`, `color: #1a1512`, `margin-bottom: 28px`
  - Copy: **"Things pile up."**
- **Body:** `font-size: 17px`, `line-height: 1.68`, `color: rgba(26,21,18,0.60)`, `max-width: 430px`, `margin-bottom: 40px`, `text-wrap: pretty`
  - Copy: **"Aether moves them — quietly, carefully, and only with your approval."**
- **Email form:**
  - Container: `display: flex`, `gap: 8px`, `max-width: 430px`, `margin-bottom: 14px`
  - Input: `flex: 1`, `background: rgba(26,21,18,0.05)`, `border: 1px solid rgba(26,21,18,0.15)`, `border-radius: 8px`, `padding: 14px 16px`, `font-family: Lexend`, `font-size: 15px`, `color: #1a1512`, `outline: none`
  - Placeholder: `color: rgba(26,21,18,0.35)`, text: `your@email.com`
  - Button: `background: #1a1512`, `color: #f2ede6`, `font-family: Lexend`, `font-size: 14px`, `font-weight: 600`, `padding: 14px 22px`, `border-radius: 8px`, `border: none`, `cursor: pointer`, `white-space: nowrap`, `letter-spacing: 0.01em`
  - Button label: **"I'm In"** (idle) → **"Joining…"** (submitting)
  - Mobile (`≤420px`): wrap to stacked column, input `width: 100%`, button `width: 100%`
- **Trust line** (below form): `DM Mono 10px`, `color: rgba(26,21,18,0.38)`, `letter-spacing: 0.04em`
  - Copy: **"One email when we're ready for you. Nothing before that."**
- **Success state** (replaces form after submission):
  - Green checkmark circle: `width: 40px`, `height: 40px`, `border-radius: 50%`, `background: rgba(61,158,114,0.10)`, `border: 1px solid rgba(61,158,114,0.25)`
  - Headline: `Fraunces 20px 600`, `color: #1a1512` — **"You're in."**
  - Sub: `Lexend 14px`, `color: rgba(26,21,18,0.55)` — **"We'll be in touch when your spot opens."**
  - Second question (appears after success): `Lexend 15px` label + `textarea` + `DM Mono 11px` submit link
  - Question copy: **"What's the one thing you keep putting off — even though you know exactly what to do?"**
  - Submit link: **"Send it →"** — `DM Mono 11px`, `color: rgba(26,21,18,0.45)`

#### 2b. Right Carousel Column
- Displays 5 animated app screen mockups, user-navigated
- Container: `display: flex`, `flex-direction: column`, `align-items: center`, `gap: 18px`
- Panel: `position: relative`, `width: 308px`, `height: 530px`, `border-radius: 20px`
  - Shadow: `0 28px 72px rgba(26,21,18,0.12), 0 4px 16px rgba(26,21,18,0.06), 0 0 0 0.5px rgba(26,21,18,0.07)`
  - Outline: `13px solid #f2ede6` (reduces to `5px` at `≤360px`)
- Each phase fades in/out with `opacity` transition (`duration: 0.5s`, `ease-in-out`)
- **Navigation row** (below panel): `← dots →`
  - Prev/Next buttons: `width: 28px`, `height: 28px`, `border-radius: 50%`, `background: rgba(26,21,18,0.06)`, `border: 1px solid rgba(26,21,18,0.12)`, chevron `‹`/`›`
  - Dots: inactive `6px` `rgba(26,21,18,0.18)`, active `9px` `#3a7bbf` — smooth size + color transition `0.35s`
- **No auto-advance** — user-triggered only (ADHD animation constraint: no unsolicited motion)

**5 carousel phases:**

| Phase | Screen | Key content |
|---|---|---|
| 0 | While You Were Away | Invoice to Clearwater Digital sent; paper trail expandable |
| 1 | Log | Entry list with left-bar colour semantics |
| 2 | Insights A | "Marcus replies" pattern — Tuesdays |
| 3 | Insights B | Bar chart with staged action chip |
| 4 | Approve / Current | 25-min window; approve or defer |

Each phase is a full `256×480px` phone mockup (scale 0.82 of production) with Notch, status bar, header, scrollable content, tab bar. See the HTML source for exact per-phase content — it is too detailed to reproduce fully here; treat the HTML as the spec.

---

### 3. Proof Strip
- `display: grid`, `grid-template-columns: repeat(3, 1fr)`, `column-gap: 40px`
- `max-width: 1100px`, `margin: 112px auto 0`, `padding: 0 48px`
- `border-top: 1px solid rgba(26,21,18,0.09)`
- Mobile: single column, cols 2+3 `border-top: 1px solid rgba(26,21,18,0.09)` (swap from border-left)

**Col 1 — The gap it closes** (green accent `#3d9e72`)
- Knowing → Done diagram: two pill-shaped labels with dashed arrow between
- Eyebrow: `DM Mono 9.5px`, `letter-spacing: 0.18em`, uppercase, `color: rgba(26,21,18,0.38)`
- Body: `Lexend 15px`, `color: rgba(26,21,18,0.58)`, `line-height: 1.65`
- Copy: **"Activation energy — the gap between knowing what to do and being able to start."**
- Recognition line (below, with hairline separator): `DM Mono 10px`, `color: rgba(26,21,18,0.45)`
- Copy: **"If you've ever drafted a reply and never opened it again — that's what we're here for."**

**Col 2 — How it works** (blue accent `#3a7bbf`)
- 5 source pills: Calendar · Email · Tasks · Messaging · Drive — each `background: rgba(58,123,191,0.07)`, `border: 1px solid rgba(58,123,191,0.20)`, `border-radius: 20px`, `padding: 6px 11px`, `DM Mono 9px`, `color: #3a7bbf`
- Eyebrow: same pattern as col 1
- Body copy: **"Passive detection. Connects to your life data — calendar, tasks, inbox, messaging platforms, drive, etc."**

**Col 3 — What you get** (amber accent `#c4841a`)
- Diagram: "Your approval" → "Nothing without it" (amber → green arrow, same structure as col 1)
- Eyebrow + body: **"Full visibility. Everything Aether does — visible, traceable, and yours to undo."**

---

### 4. Wearable Section
- Full-width background: `#C4B5A3` (warm mid-stone)
- `margin-top: 80px`
- Inner: `max-width: 1100px`, `margin: 0 auto`, `padding: 88px 48px 80px`
- Mobile: `padding: 56px 20px`

**Left copy:**
- Eyebrow: `DM Mono 9px`, `letter-spacing: 0.22em`, uppercase, `color: rgba(26,21,18,0.45)` — **"On the roadmap"**
- Headline: `Fraunces`, `font-size: clamp(36px, 4vw, 54px)`, `weight: 700`, `letter-spacing: -0.025em`, `line-height: 1.05`, `color: #1a1512`
- Copy: **"Aether reads your body too."**
- Body: `Lexend 16px`, `line-height: 1.65`, `color: rgba(26,21,18,0.55)`, `max-width: 540px`
- Copy: **"Works without a wearable. Add one and Aether reads your recovery and stress signals too — holding high-friction tasks when your body isn't ready, and bringing them forward when you are."**

**Two phone panels** (side-by-side, `gap: 32px`):
- Panel 1 (amber — Holding state): `7:12am · Recovery low`
  - Status: held items list — "Send Invoice #118", "Draft Q3 report", "Book GP appointment"
  - Recovery score signal row: `34 · recovery score`, amber
- Panel 2 (green — Recovered state): `11:04am · Recovery good`
  - Status: "Draft ready to review · held items releasing"
  - Timeline bar connecting panels: `height: 4px`, gradient `amber (#c4841a) → green (#3d9e72)`, `border-radius: 2px`, `box-shadow: 0 1px 6px rgba(61,158,114,0.25)`
  - CTA chip: eye icon + "Preview invoice draft →", `background: #3d9e72`, `color: #fff`
- Mobile: panels stack vertically, arrow connector hidden

---

### 5. Footer
- Full-width `background: rgba(26,21,18,0.04)`, `border-top: 1px solid rgba(26,21,18,0.10)`
- Inner: `max-width: 1100px`, `margin: 0 auto`, `padding: 32px 48px`, `display: flex`, `justify-content: space-between`, `align-items: center`, `flex-wrap: wrap`, `gap: 16px`
- Left:
  - Wordmark: `Fraunces`, `font-weight: 700`, `font-size: 16px`, `letter-spacing: -0.015em`, `color: #1a1512` — **"Aether12"**
  - Sub: `DM Mono 9.5px`, `color: rgba(26,21,18,0.38)` — **"Built by someone who's been there."**
- Right:
  - Copyright: `DM Mono 9.5px`, `color: rgba(26,21,18,0.30)` — **"© 2026 Aether12. All rights reserved."**
  - Sub: `DM Mono 9.5px`, `color: rgba(26,21,18,0.30)` — **"Early access · aether12.com"**
- Mobile: flex column, centered

---

## Email Integration (Loops.so)

The form submits to Loops.so. The existing `index.html` in the repo has a working Loops integration — port its `fetch` logic directly. Key points:

- Endpoint: `https://app.loops.so/api/newsletter-form/<YOUR_FORM_ID>`
- Method: `POST`, `Content-Type: application/x-www-form-urlencoded`
- Body: `email=<encoded_email>`
- On 200: show success state
- On error: show error message — **"Something went wrong — please try again."**
- The second question (what they keep putting off) is a separate submission after the primary email capture — send to the same form as a `notes` or custom field, or log separately

---

## Interactions & Behavior

| Interaction | Behaviour |
|---|---|
| Email submit | Validate email format; POST to Loops; show loading state on button ("Joining…"); on success replace form with confirmation + second question |
| Second question submit | POST to Loops or separate endpoint; show "Thanks." inline; no page reload |
| Carousel prev/next | Fade between phases; no auto-advance |
| Carousel dots | Click to jump to phase; active dot 9px `#3a7bbf`, inactive 6px `rgba(26,21,18,0.18)`; transition `all 0.35s ease` |
| Nav sticky | `position: sticky; top: 0`; `backdrop-filter: blur(12px)` |
| Paper trail toggle (phase 0) | Expand/collapse reasoning section inline; toggle label "Why Aether did this" |
| Approve button (phase 4) | Visual state only in prototype; production wires to real action |

---

## Animations

Per settled design constraint: **one active animation at a time, never concurrent.**

| Animation | Property | Duration | Easing |
|---|---|---|---|
| Aether dot pulse (nav + brand rows) | `opacity` | `2s` | `ease-in-out`, infinite |
| Carousel phase transition | `opacity` | `0.5s` | `ease-in-out` |
| Carousel dot size/color | `all` | `0.35s` | `ease` |

No other animations. No scroll-triggered reveals. No auto-advancing content.

---

## Design Tokens

### Colours

| Token | Value | Usage |
|---|---|---|
| Background | `#f2ede6` | Page background |
| Panel | `#ebe4dc` | Cards, phone screens |
| Panel dark | `#e4ddd5` | Tab bars |
| Text primary | `#1a1512` | Headlines, body |
| Text secondary | `rgba(26,21,18,0.55)` | Body copy |
| Text tertiary | `rgba(26,21,18,0.35)` | Labels, timestamps |
| Green (done) | `#3d9e72` | Completed state |
| Blue (staged) | `#3a7bbf` | Pending/staged state |
| Amber (held) | `#c4841a` | Held/reversal state |
| Red (urgent) | `#c44a4a` | Urgency signal |
| Green fill | `rgba(61,158,114,0.08)` | Green card backgrounds |
| Green border | `rgba(61,158,114,0.22)` | Green card borders |
| Blue fill | `rgba(58,123,191,0.07)` | Blue card backgrounds |
| Blue border | `rgba(58,123,191,0.20)` | Blue card borders |
| Amber fill | `rgba(196,132,26,0.07)` | Amber card backgrounds |
| Amber border | `rgba(196,132,26,0.22)` | Amber card borders |
| Wearable section bg | `#C4B5A3` | Wearable section background |
| Footer bg | `rgba(26,21,18,0.04)` | Footer background |

### Colour Semantics (non-negotiable — load-bearing architecture)

- 🟢 **Green** = acted / done
- 🔵 **Blue** = staged / pending
- 🟡 **Amber** = held / wearable / reversal
- 🔴 **Red** = urgency

These assignments are architectural, not aesthetic. Do not reassign colours.

### Typography

| Family | Weights | Usage |
|---|---|---|
| Fraunces | 300–900, variable optical sizing | Display headlines, screen titles |
| Lexend | 300, 400, 500, 600 | Body copy, UI text, buttons |
| DM Mono | 300, 400 | Labels, metadata, eyebrows, timestamps, chrome |

Load via Google Fonts:
```
https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Lexend:wght@300;400;500;600&family=DM+Mono:wght@300;400&display=swap
```

### Spacing

Base unit: `8px`. Key values: `4, 8, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 88, 96, 112px`

### Border Radius

| Usage | Value |
|---|---|
| Buttons, inputs | `8–10px` |
| Cards | `11–14px` |
| Pills/chips | `20px` |
| Phone shells | `44px outer, 36px screen` |
| Small dots | `50%` |

### Shadows

```css
/* Carousel panel */
box-shadow: 0 28px 72px rgba(26,21,18,0.12), 0 4px 16px rgba(26,21,18,0.06), 0 0 0 0.5px rgba(26,21,18,0.07);
/* Phone shell */
box-shadow: 0 0 0 1px rgba(26,21,18,0.12), 0 20px 40px rgba(26,21,18,0.15);
```

---

## Responsive Breakpoints

| Breakpoint | Change |
|---|---|
| `≤767px` | Hero: single column. Proof: single column. Wearable panels: stack. Footer: stack centered. |
| `≤480px` | Switcher bar: horizontal scroll. |
| `≤420px` | Form: stacked column. |
| `≤360px` | Carousel outline: `5px`. |

---

## RSD Safety Framework (non-negotiable)

All copy must pass this test: *does this element attribute a pattern to a system observation, or does it implicitly attribute it to a personal failure?* Only the former is acceptable.

- ✅ "Not handled" — system state
- ❌ "Ignored" — user failure
- ✅ "Draft sits before sending" — neutral observation
- ❌ "You haven't replied" — accusation

This applies to error states, empty states, labels, and button copy. Do not introduce new copy without applying this test.

---

## ADHD Design Constraints

These are functional requirements, not preferences:

1. **Touch targets minimum 44px** on all interactive elements
2. **One animation at a time** — never concurrent
3. **No auto-advancing content** — user controls pacing
4. **16px minimum** for reading surfaces (body text)
5. **Animation: opacity only, 2s ease-in-out** for ambient/system animations

---

## Assets

No external images. All visual elements are SVG inline icons or CSS shapes. Icon set is custom minimal — reference the HTML source for exact SVG paths.

---

## Files in This Package

| File | Description |
|---|---|
| `Waitlist Variants.dc.html` | Main design prototype — Variant A (Minimal) is the selected direction. All 4 variants present for reference. |
| `aether_wearable_eda_b2_light.html` | Wearable EDA scenario B-2 design reference — not for current implementation (gated on WS-4). For product reference only. |

---

## What's NOT in scope for this implementation

- Variants B, C, D — reference only
- Wearable EDA scenario (B-2) — gated on WS-4, POC-4+
- Dark mode — deferred post-POC
- Adaptive presentation layer — deferred post-funding
- Social proof / testimonials — add once signups exist; no seeded content
- Onboarding flow — not yet designed
