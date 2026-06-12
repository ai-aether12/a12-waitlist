# Aether Waitlist — Project Context

## Repository
- **Repo:** `ai-aether12/a12-waitlist`
- **Dev branch:** `claude/sleepy-franklin-1x10rb`
- **Production:** `main` (GitHub Pages)
- **Only production file:** `index.html` — all CSS and JS are inline, no build step

## Current state
The hero card is an auto-playing 5-phase carousel:
1. **WYWA** — action entries (invoice staged, doctor appointment with Aetna card detail, Marcus not-handled). 6s hold.
2. **Log** — completed actions. Collapses to list, Doctor entry expands after 2s, holds 4s.
3. **Log → Insights** — Marcus peek strip tap, transitions to Insights panel.
4. **Insights** — Marcus pattern panel with day chart. 9s hold.
5. **Permission grant** — "Waiting on you —" screen with amber border, reasoning rail, approve card. 8s hold → loop.

## Next task
Design changes and bug fixes to all app screens before deciding whether to restore the slider.

## Key design decisions
- **Permission grant title:** "Waiting on you —" (not "Before I act" — was ambiguous)
- **Approve action:** whole card is the tap target (ADHD-friendly, largest tap zone)
- **"Tell Aether something":** secondary option that invokes a Claude conversation, not a form
- **Reasoning rail:** thin left-rail line connecting Log excerpt → Insights excerpt → Approve card
- **Provenance chips:** removed from header — excerpt cards carry the source story
- **Red = overdue/urgency only** — Log provenance chip is neutral white, not red
- **"How Aether decides →":** dim link below actions pointing to future explainer page
- **Design system:** DM Mono for labels/mono text, Lexend for headings/CTAs, Bebas Neue for hero headline, Syne for body

## Design system
```
--green:  #55b98c   (actions taken, approve)
--blue:   #5b9bd5   (insights, patterns)
--amber:  #e6a817   (permission/urgency, time-sensitive)
--red:    #e05c5c   (overdue only)
--bg:     #07111e
--card-bg:#0e1d2f
--text:   rgba(240,240,238,0.92)
--text-faint: rgba(240,240,238,0.42)
--text-dim:   rgba(240,240,238,0.28)
```
- Uppercase DM Mono labels: `letter-spacing: 0.1em` throughout
- Border radii: `8px` for cards/strips, `20px` for the card-stack shell
- All animations use `opacity` or `transform` only (GPU-compositable)
- `will-change: opacity` on all continuously pulsing elements

## Interactive elements in the app card
- `.e-action-strip` — primary action rows (dot + DM Mono text + `›`)
- `.log-entry` — completed log items with expandable detail
- `.action-entry` — staged/pending items (WYWA view)
- `.peek-strip` — Marcus insight hint strip (glows blue in carousel)
- `.approve-card` — whole-card tap target for permission grant

## Files
- `index.html` — production site
- `mockup-permission-grant.html` — permission grant design reference (standalone)
- `mockup-ambient.html` — ambient interrupt design reference (standalone, not used in site)

## Security constraint
`LOOPS_FORM_ID` in the email submit handler must never be modified.

## Git hygiene
Every commit requires author fix before push:
```bash
git config user.email noreply@anthropic.com && git config user.name Claude
git commit --amend --no-edit --reset-author
git push --force origin HEAD:claude/sleepy-franklin-1x10rb
```
Or set config once per session before committing.

## Carousel JS structure
- `runSequence()` — main loop, phases 1–5 then recurses
- `resetAll()` — snaps back to WYWA state, hides all non-WYWA elements
- `initEls()` — caches all DOM references (called once on first IntersectionObserver trigger)
- `setNav(name)` — updates bottom nav active state, caches element refs in `navEls{}`
- `pauseableDelay(ms)` — delay that respects `paused` flag (hover-pause)
- `ENTRY_HOLD=6000`, `INSIGHT_HOLD=9000`, `PERM_HOLD=8000`

## Mockup file notes
- `mockup-permission-grant.html` is the approved design used as the source for Phase 5 in the carousel
- Do not merge mockup files into each other — they are independent design artifacts
