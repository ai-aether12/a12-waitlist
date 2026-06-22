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

---

## Coding Guidelines

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.
