# Aether Waitlist — Project Context

## Repository
- **Repo:** `ai-aether12/a12-waitlist`
- **Production:** `main` (GitHub Pages at `join.aether12.com`)
- **Production files:** `index.html`, `why.html`, `privacy.html` — page-specific CSS/JS are inline; shared styles/behavior live in `shared.css`/`shared.js`. No build step.

## Branch convention
Create a new `claude/[name]` branch per PR. After every squash-merge to main, working branches diverge — fix by creating a fresh branch from main rather than rebasing:
```bash
git fetch origin main && git checkout -b claude/[new-name] origin/main
```

## Git hygiene
Set author config once per session before committing:
```bash
git config user.email noreply@anthropic.com && git config user.name Claude
```

## GitHub operations
Use GitHub MCP tools (`mcp__github__*`) for all PR/merge operations — no `gh` CLI available. Load via ToolSearch before use.

## Security constraint
`LOOPS_FORM_ID = 'cmq6zybem02rs0jzc70ldajs7'` must never be modified. It's defined once in `shared.js`, used by all 3 pages' forms.

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
1. **Nav** — sticky, blur backdrop
2. **Hero** — two-column: copy left, carousel right. Hero email form is hidden on mobile.
3. **Learning Arc** — scroll-snap phone carousel showing the product developing over time
4. **Proof strip** — three-column value props
5. **Wearable section** — two phone panels
6. **Secondary CTA** — second email form; this is the sign-up entry point for mobile users
7. **Footer** — share icons + copyright

## Email form flow
- Default: input + submit button
- Submit → POST to Loops
- Success: confirmation state with share options
- Error: inline error message, button resets
- `why.html` has its own Loops form with the same flow

## Analytics
Google Analytics (`G-B72BCSL7P7`) is loaded on both pages. A `generate_lead` event fires on successful form submission in both files.

## Social / OG
- OG and Twitter Card meta tags point to `join.aether12.com`
- An OG image (`1200×630px`) still needs to be uploaded to the repo root

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

## 5. WCAG AA Compliance

**All new text and interactive elements must meet WCAG 2.1 AA contrast.**

On the site background (`#f2ede6`):
- Minimum passing opacity for `rgba(26,21,18,…)` text: **0.62** (`--text-40`), giving ~4.8:1
- `--text-35` (rgba 0.58, ~4.2:1) fails — do not use for readable text
- Minimum font size for label/secondary copy: **11px**
- Interactive icons need **3:1** non-text contrast (WCAG 1.4.11)

When adding or changing text color, opacity, or font size — verify the contrast ratio before committing.
