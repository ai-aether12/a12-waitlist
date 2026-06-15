# Aether Waitlist — Project Context

## Repository
- **Repo:** `ai-aether12/a12-waitlist`
- **Production:** `main` (GitHub Pages at `join.aether12.com`)
- **Only production file:** `index.html` — all CSS and JS are inline, no build step

## Branch convention
Create a new `claude/[name]` branch per PR. After every squash-merge to main, working branches diverge — fix by creating a fresh branch from main rather than rebasing:
```bash
git fetch origin main && git checkout -b claude/[new-name] origin/main
# then copy current index.html onto it
```

## Git hygiene
Set author config once per session before committing:
```bash
git config user.email noreply@anthropic.com && git config user.name Claude
```

## GitHub operations
Use GitHub MCP tools (`mcp__github__*`) for all PR/merge operations — no `gh` CLI available. Load via ToolSearch before use.

## Security constraint
`LOOPS_FORM_ID = 'cmq6zybem02rs0jzc70ldajs7'` in the FormController IIFE must never be modified.

## Current design system
Light warm-stone theme:
```css
--bg:          #f2ede6
--text:        #1a1512
--green:       #3d9e72
--blue:        #3a7bbf
--amber:       #c4841a
--red:         #c44a4a
--panel:       #ebe4dc
--wearable-bg: #C4B5A3
```
Typography: Fraunces (headings), Lexend (body/CTAs), DM Mono (labels/mono)

## Page structure (top to bottom)
1. **Nav** — sticky, blur backdrop, `AETHER` wordmark + "First 100" pill
2. **Hero** — 2-col grid (`1fr 348px`): copy left, carousel right
   - Copy split into `.hero-copy-head` (h1 only) and `.hero-copy-body` (tagline + form)
   - On mobile (`≤767px`): `.hero-copy { display:contents }` so order becomes headline → carousel → form
3. **Proof strip** — 3-col grid:
   - Col 1: `? ? ?` connector (Knowing → Done), eyebrow "Activation energy"
   - Col 2: "Built for ADHD." Fraunces heading
   - Col 3: Visible/Traceable/Reversible chips, eyebrow "NO BLACK BOX"
4. **Wearable section** — `#C4B5A3` background, two phone panels (capacity framing)
5. **Footer** — share pills (X, LinkedIn, WhatsApp, Email) + copyright

## Email form flow
- Default: input + "I'm In" button
- Submit → POST to Loops (`/api/newsletter-form/[LOOPS_FORM_ID]`)
- Success: "You're in." + share row (X, LinkedIn, WhatsApp, Email, Copy link)
- Error: inline error message, button resets

## Carousel
- 5 phases, user-navigated (no auto-advance — ADHD constraint)
- `CarouselController` IIFE: `init()`, `goTo(n)`, `prev()`, `next()`
- Phase transitions: `opacity 0.7s ease-in-out`
- Nav: `← [dots] →`, 44×44px buttons (min touch target)

## Social / OG
- OG and Twitter Card meta tags are set for `join.aether12.com`
- `og:image` placeholder at `/og-image.png` — needs a real 1200×630px image uploaded to repo root
- Share URLs in HTML and JS all point to `join.aether12.com`

## JS modules (both inline in `<script>`)
- `CarouselController` IIFE — carousel navigation
- `FormController` IIFE — email capture, Loops POST, success/error states, copy-link clipboard
