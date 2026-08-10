# Chang Orthodontics: Concept A Teardown Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Reduce `chang-orthodontics/` to a single `concept-a/` folder containing only the homepage plus the extracted design system, delete concepts B and C, and leave the project sitting cleanly at the start of the new build workflow.

**Architecture:** The design system was already extracted from Concept A into `chang-orthodontics/site/` (a self-contained `site.css` with no Tailwind, a `DESIGN.md` design contract, and a flattened `index.html`). Rather than re-extracting, we promote that folder to `concept-a/` and delete the three legacy concept folders. Every destructive step happens only after the current unpushed work is committed and pushed to a preserve branch.

**Tech Stack:** Static HTML + hand-written CSS, no build step. Git + GitHub Pages (`OrthoBoost-Marketing/Client-web-concepts`). Verification via `orthoboost-web:audit-homepage`.

---

## Context an engineer with zero background needs

**Repo:** `OrthoBoost-Marketing/Client-web-concepts`. It is served by GitHub Pages from the **root of `main`**, so `main` is production. Client preview links look like
`https://orthoboost-marketing.github.io/Client-web-concepts/chang-orthodontics/concept-a/`.

**There are four local checkouts of this same repo.** This matters, do not mix them up:

| Path | Branch | State |
|---|---|---|
| `C:\Users\Chris\Projects\Client-web-concepts` | `siouxland-launch-punch-list` | **DIRTY.** Holds all the Chang work. 46 modified files + untracked `site/`. None of it is pushed. |
| `C:\Users\Chris\Projects\cwc-audit` | `main` | Clean, up to date with `origin/main`. **This is where the teardown happens.** |
| `C:\Users\Chris\Projects\cwc-main` | `main` | Clean. Leave alone. |
| `C:\Users\Chris\Projects\Client-web-concepts-main` | `siouxland-seo` | Clean. Leave alone. |

**The single biggest risk in this plan:** the dirty checkout contains the only copy of the flattened homepage, `site.css`, `DESIGN.md`, and `CLIENT-BRIEF.md`. If it is lost, the design system is gone. Task 1 exists solely to make that impossible. **Do not start Task 2 until Task 1 is pushed and verified.**

**Current Chang folder contents:**
- `concept-1/` — "clinical instrument", 26 pages, Tailwind. This is the one the client calls **Concept A**. Its look is the source of the design system.
- `concept-2/` — IBM Carbon editorial, 26 pages. Being deleted.
- `concept-3/` — warm calm clinical, 26 pages. Being deleted.
- `site/` — untracked. The flattened Concept A homepage + `site.css` + `DESIGN.md`. **This becomes `concept-a/`.**
- `CLIENT-BRIEF.md` — untracked. Status DRAFT. Keep as is, do not edit in this plan.
- `index.html` — the preview landing page with three cards labeled "Concept 1/2/3".

**Naming decision:** concepts are labeled A/B/C, not 1/2/3. B and C are deleted, so only the survivor gets a folder, and it is `concept-a`. The old `/concept-1/`, `/concept-2/`, `/concept-3/` preview URLs go dead. That is intended.

**Expected and acceptable end state:** the homepage links to ~24 inner pages that will not exist yet, so those links 404. That is the point of walking backwards, `build-site` creates them later. Task 7 records that inventory so the build phase has a work list.

**Skills referenced:** @orthoboost-web:audit-homepage (Task 9), @orthoboost-web:build-site (future phase, not this plan).

---

### Task 1: Preserve the unpushed Chang work

Nothing is deleted in this task. It only creates a safety net.

**Files:**
- Modify: nothing
- Commit: all of `chang-orthodontics/` plus `README.md` in `C:\Users\Chris\Projects\Client-web-concepts`

**Step 1: Confirm what is pending**

```bash
git -C /c/Users/Chris/Projects/Client-web-concepts status --porcelain
```

Expected: 46 ` M` lines (`README.md`, 27 under `concept-1/`, 9 under `concept-2/`, 9 under `concept-3/`) and two `??` lines (`chang-orthodontics/CLIENT-BRIEF.md`, `chang-orthodontics/site/`).

If you see **more** than this, or modifications outside `chang-orthodontics/` and `README.md`, **stop and report**. Something else is in flight.

**Step 2: Confirm the README change is Chang-only**

```bash
git -C /c/Users/Chris/Projects/Client-web-concepts diff -- README.md
```

Expected: exactly one added block, the `**Build (Aug 4 2026):**` paragraph. If the diff touches Siouxland or any other client, do not include `README.md` in the next commit, commit it separately on its own branch instead.

**Step 3: Create the preserve branch**

```bash
git -C /c/Users/Chris/Projects/Client-web-concepts checkout -b chang-preserve-2026-08-10
```

Expected: `Switched to a new branch 'chang-preserve-2026-08-10'`

This branch is a **safety net only**. It is never merged to `main`. It sits on top of the Siouxland branch, which is exactly why we do not merge it.

**Step 4: Stage and commit everything Chang**

```bash
git -C /c/Users/Chris/Projects/Client-web-concepts add chang-orthodontics README.md
```

```bash
git -C /c/Users/Chris/Projects/Client-web-concepts commit -m "$(cat <<'EOF'
chang: preserve in-flight concept edits, flattened site/, and client brief

Snapshot before the concept-a teardown. Not for merge: this branch sits on
top of siouxland-launch-punch-list. The teardown branches from main and
pulls chang-orthodontics/ across with git checkout.

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
EOF
)"
```

Expected: a commit summary listing roughly 150 files changed (the 46 edits plus every untracked file under `site/`, including its ~60 image derivatives).

**Step 5: Push the safety net**

```bash
git -C /c/Users/Chris/Projects/Client-web-concepts push -u origin chang-preserve-2026-08-10
```

Expected: `* [new branch] chang-preserve-2026-08-10 -> chang-preserve-2026-08-10`

**Step 6: Verify the working tree is now clean**

```bash
git -C /c/Users/Chris/Projects/Client-web-concepts status --porcelain
```

Expected: **no output at all.** If anything remains, it was not committed. Fix that before continuing.

**Step 7: Verify the design system actually made it into the commit**

```bash
git -C /c/Users/Chris/Projects/Client-web-concepts show --stat HEAD -- chang-orthodontics/site/DESIGN.md chang-orthodontics/site/site.css chang-orthodontics/site/index.html chang-orthodontics/CLIENT-BRIEF.md
```

Expected: all four files listed as added. **This is the gate. Do not proceed to Task 2 until all four appear.**

---

### Task 2: Open the teardown branch off main

**Files:**
- Working checkout switches to `C:\Users\Chris\Projects\cwc-audit`

**Step 1: Confirm cwc-audit is clean and current**

```bash
git -C /c/Users/Chris/Projects/cwc-audit fetch origin && git -C /c/Users/Chris/Projects/cwc-audit status --porcelain && git -C /c/Users/Chris/Projects/cwc-audit rev-parse main origin/main
```

Expected: no porcelain output, and the two SHAs printed are identical. If they differ, run `git -C /c/Users/Chris/Projects/cwc-audit pull --ff-only` first.

**Step 2: Branch from main**

```bash
git -C /c/Users/Chris/Projects/cwc-audit checkout -b chang-concept-a
```

Expected: `Switched to a new branch 'chang-concept-a'`

**Step 3: Bring the preserved Chang folder across**

```bash
git -C /c/Users/Chris/Projects/cwc-audit checkout chang-preserve-2026-08-10 -- chang-orthodontics README.md
```

Expected: no output. Git stages the whole folder from the preserve branch on top of `main`.

**Step 4: Verify the design system arrived**

```bash
ls /c/Users/Chris/Projects/cwc-audit/chang-orthodontics/ && ls /c/Users/Chris/Projects/cwc-audit/chang-orthodontics/site/*.css /c/Users/Chris/Projects/cwc-audit/chang-orthodontics/site/*.md /c/Users/Chris/Projects/cwc-audit/chang-orthodontics/site/*.html
```

Expected: top level shows `CLIENT-BRIEF.md`, `concept-1`, `concept-2`, `concept-3`, `index.html`, `site`. The second listing shows `site.css`, `DESIGN.md`, `index.html`.

**Step 5: Commit the sync**

```bash
git -C /c/Users/Chris/Projects/cwc-audit commit -m "$(cat <<'EOF'
chang: sync in-flight concept edits and flattened site/ onto main

Same content as chang-preserve-2026-08-10, rebased onto main so the
teardown that follows carries no Siouxland commits.

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
EOF
)"
```

Expected: a commit listing the same file set as Task 1 Step 4.

**All remaining tasks run in `C:\Users\Chris\Projects\cwc-audit`.**

---

### Task 3: Promote site/ to concept-a

**Files:**
- Rename: `chang-orthodontics/site/` → `chang-orthodontics/concept-a/`

**Step 1: Rename with git so history follows**

```bash
git -C /c/Users/Chris/Projects/cwc-audit mv chang-orthodontics/site chang-orthodontics/concept-a
```

Expected: no output.

**Step 2: Verify the rename**

```bash
ls /c/Users/Chris/Projects/cwc-audit/chang-orthodontics/
```

Expected: `CLIENT-BRIEF.md  concept-1  concept-2  concept-3  concept-a  index.html`. No `site` directory.

**Step 3: Verify the homepage still resolves its stylesheet**

```bash
grep -n 'site\.css' /c/Users/Chris/Projects/cwc-audit/chang-orthodontics/concept-a/index.html
```

Expected: one line, `<link rel="stylesheet" href="site.css">`. The path is relative, so the rename does not break it. If this returns nothing, the stylesheet link was absolute and must be fixed before continuing.

**Step 4: Commit**

```bash
git -C /c/Users/Chris/Projects/cwc-audit add -A chang-orthodontics && git -C /c/Users/Chris/Projects/cwc-audit commit -m "$(cat <<'EOF'
chang: promote site/ to concept-a

Concepts are labeled A/B/C, not 1/2/3. The flattened Concept A homepage and
its design system become the one surviving concept folder.

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
EOF
)"
```

Expected: file changes shown as renames (`R`), not delete-plus-add.

---

### Task 4: Delete concepts 1, 2, and 3

This is the destructive step. It is safe now: every byte is on `chang-preserve-2026-08-10` on the remote, and on this branch's own history.

**Files:**
- Delete: `chang-orthodontics/concept-1/`, `chang-orthodontics/concept-2/`, `chang-orthodontics/concept-3/`

**Step 1: Record what is about to go, for the commit message**

```bash
find /c/Users/Chris/Projects/cwc-audit/chang-orthodontics/concept-1 /c/Users/Chris/Projects/cwc-audit/chang-orthodontics/concept-2 /c/Users/Chris/Projects/cwc-audit/chang-orthodontics/concept-3 -name '*.html' | wc -l
```

Expected: `78` (26 pages × 3 concepts).

**Step 2: Delete all three**

```bash
git -C /c/Users/Chris/Projects/cwc-audit rm -r --quiet chang-orthodontics/concept-1 chang-orthodontics/concept-2 chang-orthodontics/concept-3
```

Expected: no output.

**Step 3: Verify only concept-a remains**

```bash
ls /c/Users/Chris/Projects/cwc-audit/chang-orthodontics/ && find /c/Users/Chris/Projects/cwc-audit/chang-orthodontics -name '*.html' | sort
```

Expected: the listing shows exactly `CLIENT-BRIEF.md  concept-a  index.html`, and the find returns exactly two paths: `chang-orthodontics/index.html` and `chang-orthodontics/concept-a/index.html`.

If any other `.html` appears, stop. The teardown was incomplete.

**Step 4: Verify the assets survived inside concept-a**

```bash
ls /c/Users/Chris/Projects/cwc-audit/chang-orthodontics/concept-a/assets/*.svg /c/Users/Chris/Projects/cwc-audit/chang-orthodontics/concept-a/assets/*.jpg | wc -l && ls /c/Users/Chris/Projects/cwc-audit/chang-orthodontics/concept-a/assets/web/ | wc -l
```

Expected: `11` originals (1 SVG + 10 JPG) and `41` files in `web/` (40 WebP derivatives + `manifest.json`).

**Step 5: Commit**

```bash
git -C /c/Users/Chris/Projects/cwc-audit commit -m "$(cat <<'EOF'
chang: delete concepts B and C, and Concept A's inner pages

Walking the project back to a single homepage so the rest of the site is
built through the current workflow rather than carried forward from the
original three-concept pitch. All 78 deleted pages remain recoverable on
chang-preserve-2026-08-10 and in this branch's history.

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
EOF
)"
```

Expected: `78 files changed` in HTML terms, plus the deleted CSS and duplicated asset trees. Total will be in the hundreds of files.

---

### Task 5: Repair DESIGN.md's cross-references

`DESIGN.md` currently points at `site/` and `../concept-1/`, both of which no longer exist.

**Files:**
- Modify: `chang-orthodontics/concept-a/DESIGN.md:3-5`

**Step 1: Read the current header**

```bash
sed -n '1,6p' /c/Users/Chris/Projects/cwc-audit/chang-orthodontics/concept-a/DESIGN.md
```

Expected, lines 3 and 5:
```
The shared design contract for `site/`. Every page copies the header, footer, mobile drawer, sticky bottom bar, and container rules from `index.html` verbatim. Change them here first, then propagate.

Brief: `../CLIENT-BRIEF.md` · Visual shell: `../concept-1/` · Structure and voice: kit avatar **Marlowe**.
```

**Step 2: Replace both lines**

Line 3 becomes:
```
The shared design contract for `concept-a/`. Every page copies the header, footer, mobile drawer, sticky bottom bar, and container rules from `index.html` verbatim. Change them here first, then propagate.
```

Line 5 becomes:
```
Brief: `../CLIENT-BRIEF.md` · Visual shell: this folder, extracted from the original concept-1 "clinical instrument" pitch · Structure and voice: kit avatar **Marlowe**.
```

**Step 3: Verify no stale references remain**

```bash
grep -n 'concept-1\|concept-2\|concept-3\|`site/`' /c/Users/Chris/Projects/cwc-audit/chang-orthodontics/concept-a/DESIGN.md
```

Expected: **no output.** (The word "concept-1" may legitimately survive in prose describing the origin, if so it will appear on line 5 only and that is fine. Any *path-shaped* reference is a bug.)

Note line 37 of `DESIGN.md` says "This is concept-1's signature; keep it." That is prose about provenance, not a path. Reword it to "This is the signature of the original Concept A shell; keep it." for consistency.

**Step 4: Commit**

```bash
git -C /c/Users/Chris/Projects/cwc-audit add chang-orthodontics/concept-a/DESIGN.md && git -C /c/Users/Chris/Projects/cwc-audit commit -m "$(cat <<'EOF'
chang: repoint DESIGN.md at concept-a

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 5B: Close the design-system checklist gaps

Audited against the open-source Design System Checklist (designsystemchecklist.com). Everything in this task is **additive**: new tokens that alias values already in use, and new documentation. **No existing CSS declaration is rewritten, so the homepage must render pixel-identically afterward.** That is the constraint, verify it in Task 9.

**Files:**
- Modify: `chang-orthodontics/concept-a/site.css` (`:root` block only, lines 19-27)
- Modify: `chang-orthodontics/concept-a/DESIGN.md` (add new sections)

**Step 1: Extend the token block**

In `site.css`, keep every existing token exactly as is and add to `:root`:

```css
  /* semantic colors: needed by the forms on appointment.html and contact.html */
  --c-focus:var(--navy);
  --c-error:#B3261E; --c-error-bg:#FCEEED;
  --c-success:#1B6B3A; --c-success-bg:#EDF7F0;
  --c-disabled:#9aa0b3; --c-disabled-bg:#F1F3F7;

  /* spacing scale: 4-point. Use these on every new page. */
  --space-1:.25rem; --space-2:.5rem; --space-3:.75rem; --space-4:1rem;
  --space-5:1.25rem; --space-6:1.5rem; --space-8:2rem; --space-10:2.5rem;
  --space-12:3rem; --space-16:4rem; --space-20:5rem; --space-28:7rem;

  /* elevation: names for the shadows already in use */
  --shadow-hard:5px 6px 0 var(--c-ink);      /* hero photo */
  --shadow-hard-sm:4px 5px 0 var(--c-ink);   /* split media */
  --shadow-1:0 4px 14px rgba(0,93,170,.12);
  --shadow-2:0 12px 34px rgba(0,93,170,.07);
  --shadow-3:0 18px 44px rgba(0,93,170,.16);

  /* z-index scale */
  --z-grain:0; --z-content:5; --z-nav:50; --z-bar:55;

  /* motion */
  --ease-out:cubic-bezier(.16,1,.3,1);
  --dur-fast:.2s; --dur-base:.25s; --dur-slow:.7s;
```

Do **not** go back and replace the literal values elsewhere in the file. Retrofitting risks visual drift for no benefit; these tokens govern pages built from here on.

**Step 2: Add the missing DESIGN.md sections**

Append these sections to `DESIGN.md`, after `## Layout` and before `## Voice` where they fit naturally:

```markdown
## Spacing and units

4-point scale, tokens `--space-1` (4px) through `--space-28` (112px). Every new page uses tokens, not literals. The homepage predates the scale and keeps its literals; do not retrofit it.

## Breakpoints

`640px` · `768px` · `900px` · `1024px` · `1100px`. Five, and no more. `1100px` is the nav switch: below it the pill nav becomes the drawer and the sticky bottom bar appears. Do not invent a sixth breakpoint for one stubborn section.

## Elevation

| Token | Use |
|---|---|
| `--shadow-hard` | hero photo, the signature offset |
| `--shadow-hard-sm` | split-section media |
| `--shadow-1` | resting pill CTA |
| `--shadow-2` | cards at rest |
| `--shadow-3` | dropdowns, drawer, anything overlaying content |

Z-index is a closed set: `--z-grain` 0, `--z-content` 5, `--z-nav` 50, `--z-bar` 55. Nothing else gets a z-index.

## Motion

Easing is always `--ease-out`. Durations are `--dur-fast` .2s (color and background), `--dur-base` .25s (transforms, menus), `--dur-slow` .7s (scroll reveals). Reveals are opacity plus a 30px translate, once, never looping. `prefers-reduced-motion: reduce` disables every transition and forces revealed elements visible. That block is non-negotiable, carry it to every page.

## Iconography

Inline SVG only, `viewBox="0 0 24 24"`, `fill:currentColor`, drawn on a 24px box so it pairs with the type scale. Rendered at 15 to 19px. Outlined-solid hybrid, matching the existing set. Every icon is decorative and carries `aria-hidden="true"`; the adjacent text is the accessible name. If an icon ever has to stand alone, it needs an `aria-label` on the control, not on the SVG. Icons never appear in a grid above the stats band, and never as a substitute for a photograph.

## Semantic colors

`--c-focus` (focus ring, currently navy), `--c-error` / `--c-error-bg`, `--c-success` / `--c-success-bg`, `--c-disabled` / `--c-disabled-bg`. These exist for the appointment and contact forms. All four foregrounds clear 4.5:1 on their paired background and on white.

## Explicit non-goals

- **No dark mode.** Light only, deliberately. There is no `prefers-color-scheme` block and no dark palette. Do not add one page by page.
- **No component library.** This is a static site, not a product. Components live in the page markup and are copied verbatim per `DESIGN.md`, not imported.
- **No icon font, no icon sprite.** Inline SVG only.

## Open pre-launch items

- **Fonts load from the Google Fonts CDN and are render-blocking.** `display=swap` and `preconnect` are set, so there is no invisible-text flash, but there is a swap reflow. Self-host both families before launch, see the static-site-deploy skill.
- **No OG image.** Needs a 1200x630 asset.
- **No favicon set.** Currently reusing the logo SVG; needs a 32px ICO and a 180px apple-touch-icon.
```

**Step 3: Verify the homepage still parses and nothing shifted**

```bash
grep -c '^\s*--' /c/Users/Chris/Projects/cwc-audit/chang-orthodontics/concept-a/site.css
```

Expected: a count noticeably higher than before (the original `:root` had 15 token lines).

Then confirm no existing declaration was touched:

```bash
git -C /c/Users/Chris/Projects/cwc-audit diff --stat -- chang-orthodontics/concept-a/site.css
```

Expected: **insertions only, zero deletions.** If the diff shows deletions, an existing rule was modified. Revert and redo additively.

**Step 4: Commit**

```bash
git -C /c/Users/Chris/Projects/cwc-audit add chang-orthodontics/concept-a/site.css chang-orthodontics/concept-a/DESIGN.md && git -C /c/Users/Chris/Projects/cwc-audit commit -m "$(cat <<'EOF'
chang: close design-system checklist gaps in tokens and docs

Audited against the open-source Design System Checklist. Adds semantic
color, spacing, elevation, z-index and motion tokens that alias values
already in use, and documents breakpoints, iconography, motion, explicit
non-goals, and open pre-launch items. Purely additive: no existing
declaration changed, so the homepage renders identically.

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 6: Rewrite the client preview landing page

`chang-orthodontics/index.html` currently shows three cards and pulls the logo from `concept-2/assets/chang-logo.svg`, which is now deleted. The page is broken until this is fixed.

**Files:**
- Modify: `chang-orthodontics/index.html`

**Step 1: Confirm the broken logo reference**

```bash
grep -n 'concept-1/\|concept-2/\|concept-3/' /c/Users/Chris/Projects/cwc-audit/chang-orthodontics/index.html
```

Expected: 4 hits — the logo `<img src="concept-2/assets/chang-logo.svg">` on line 73, and the three `Open Concept N` links on lines 91, 103, 115.

**Step 2: Make the edits**

Keep the existing `<style>` block and page shell unchanged. Change only:

1. **Line 73** logo path: `concept-2/assets/chang-logo.svg` → `concept-a/assets/chang-logo.svg`
2. **`.concepts` grid**: change `grid-template-columns:repeat(3, 1fr)` to `grid-template-columns:minmax(0, 520px)` and add `justify-content:center` so one card does not stretch across the full width.
3. **Intro paragraph** (line 80): replace the three-concept explanation with a single-direction one. Exact replacement text:

```
Concept A is the chosen direction. This page is the homepage only. The rest of the site is being rebuilt page by page against the same design system, and each page will appear here as it is finished. Patient review quotes are still marked placeholders, and the real Google reviews drop in before launch.
```

4. **Replace all three `.concept` cards** with one:

```html
<div class="concept">
  <div class="concept-head">
    <h2>Concept A<span class="sub">clinical instrument</span></h2>
    <span class="tag">Chosen direction</span>
  </div>
  <p>A technical, precise look: schematic detail, real photography from the office, and figures that read like a clinical readout. Precision is the selling point. The homepage is complete and sets the design system for every page that follows.</p>
  <div class="concept-foot">
    <a class="open" href="concept-a/">Open Concept A &rarr;</a>
    <span class="meta">Homepage only</span>
  </div>
</div>
```

Do not use an em-dash anywhere in this file. House style.

**Step 3: Verify no dead references remain**

```bash
grep -n 'concept-1/\|concept-2/\|concept-3/\|Concept 1\|Concept 2\|Concept 3' /c/Users/Chris/Projects/cwc-audit/chang-orthodontics/index.html
```

Expected: **no output.**

**Step 4: Verify every asset the page references exists**

```bash
grep -o 'src="[^"]*"' /c/Users/Chris/Projects/cwc-audit/chang-orthodontics/index.html
```

Expected: one hit, `src="concept-a/assets/chang-logo.svg"`. Then confirm it resolves:

```bash
ls -la /c/Users/Chris/Projects/cwc-audit/chang-orthodontics/concept-a/assets/chang-logo.svg
```

Expected: the file exists, roughly 31 KB.

**Step 5: Commit**

```bash
git -C /c/Users/Chris/Projects/cwc-audit add chang-orthodontics/index.html && git -C /c/Users/Chris/Projects/cwc-audit commit -m "$(cat <<'EOF'
chang: preview page shows one card, Concept A, homepage only

Also repoints the logo, which was loading from the now-deleted concept-2.

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 7: Record the page inventory the build phase has to produce

The homepage links to inner pages that no longer exist. Those dangling links are the work list for the next phase. Capture them now, mechanically, so nothing is invented later from memory.

**Files:**
- Create: `chang-orthodontics/concept-a/BUILD-QUEUE.md`

**Step 1: Generate the list of linked-but-missing pages**

```bash
cd /c/Users/Chris/Projects/cwc-audit/chang-orthodontics/concept-a && grep -o 'href="[a-z0-9-]*\.html"' index.html | sed 's/href="//; s/"//' | sort -u | while read f; do [ -f "$f" ] || echo "$f"; done
```

Expected: roughly 24 filenames, one per line, including `appointment.html`, `about.html`, `dr-michael-chang.html`, `braces.html`, `invisalign.html`, `early-orthodontics.html`, `kids-teens.html`, `adults.html`, `airway.html`, `retainers.html`, `treatments.html`, `technology.html`, `team.html`, `reviews.html`, `new-patients.html`, `financing.html`, `faq.html`, `emergencies.html`, `contact.html`, `san-carlos.html`, `terms.html`, `privacy.html`, `accessibility.html`, `hipaa.html`. Note `index.html` must **not** appear, it exists.

**Step 2: Write BUILD-QUEUE.md**

Use this exact structure, pasting the generated list into the table:

```markdown
# Build queue: Chang Orthodontics

The homepage is complete. Every page below is linked from `index.html` and does not exist yet, so those links 404 on the preview. That is expected: the site is being rebuilt through the current workflow rather than carried over from the original three-concept pitch.

Design contract: `DESIGN.md`. Client facts: `../CLIENT-BRIEF.md`. Nav tree and page inventory are defined in the brief, not here.

Build with @orthoboost-web:build-site, then clear @orthoboost-web:audit-homepage per page.

| Page | Type | Status |
|---|---|---|
| appointment.html | appointment | not started |
| ... one row per generated filename ... |

## Known blockers carried from DESIGN.md

- No verbatim Google review quotes. The reviews section stays a marked placeholder. Never write a quote.
- No official credential logo files. Authority strip stays typographic.
- No service photography. Services grid stays schematic.
- No staff names or headshots. Team page stays minimal tier.
- No founding year. Footer copyright is a single year.
```

Fill the `Type` column from the page's role: treatment, practice, resource, legal, location, appointment. Set every `Status` to `not started`.

**Step 3: Verify the table row count matches the generated list**

```bash
grep -c '^| [a-z0-9-]*\.html' /c/Users/Chris/Projects/cwc-audit/chang-orthodontics/concept-a/BUILD-QUEUE.md
```

Expected: the same number the Step 1 command produced. If they differ, a page was dropped or duplicated.

**Step 4: Commit**

```bash
git -C /c/Users/Chris/Projects/cwc-audit add chang-orthodontics/concept-a/BUILD-QUEUE.md && git -C /c/Users/Chris/Projects/cwc-audit commit -m "$(cat <<'EOF'
chang: record the page build queue derived from the homepage nav

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 8: Update the two repo-level index pages

**Files:**
- Modify: `README.md:12`, `README.md:64-70`
- Modify: `index.html:55` (repo root)

**Step 1: Update the repo root preview list**

In `C:\Users\Chris\Projects\cwc-audit\index.html`, line 55 reads:

```html
<li><a href="chang-orthodontics/"><b>Chang Orthodontics</b><span>3 concepts</span></a></li>
```

Change `3 concepts` to `Concept A`.

**Step 2: Update the README summary row**

In `README.md`, the Chang row of the top table has a column with `3`. Change it to `1`.

**Step 3: Replace the README concept table**

Delete the three-row concept table (the `concept-1` / `concept-2` / `concept-3` rows and their header) and replace the whole Chang section body below the Notion line with:

```markdown
| Concept | Direction | Notes |
|---|---|---|
| [concept-a](https://orthoboost-marketing.github.io/Client-web-concepts/chang-orthodontics/concept-a/) | Clinical instrument: data-led, precise, real photography | homepage only |

**State (Aug 10 2026):** walked back to a single concept. Concept A's homepage is the design system of record (`concept-a/DESIGN.md`, `concept-a/site.css`); every other page is being rebuilt through the current workflow, tracked in `concept-a/BUILD-QUEUE.md` and governed by `chang-orthodontics/CLIENT-BRIEF.md`. Concepts B and C, and Concept A's original 26 pages, were deleted and remain recoverable on `chang-preserve-2026-08-10`. Blocked on verbatim Google review quotes.
```

Note this **replaces** the `**Build (Aug 4 2026):**` paragraph that came across in Task 2. Do not keep both.

**Step 4: Verify no stale concept paths remain anywhere in the repo**

```bash
grep -rn 'chang-orthodontics/concept-1\|chang-orthodontics/concept-2\|chang-orthodontics/concept-3\|chang-orthodontics/site' /c/Users/Chris/Projects/cwc-audit --include='*.md' --include='*.html'
```

Expected: **no output.**

**Step 5: Commit**

```bash
git -C /c/Users/Chris/Projects/cwc-audit add README.md index.html && git -C /c/Users/Chris/Projects/cwc-audit commit -m "$(cat <<'EOF'
chang: update repo index and README for the single-concept state

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 9: Verify the homepage actually renders and passes the gate

Deleting files is easy to get subtly wrong. This task proves the survivor works.

**Files:**
- Modify: none (verification only)

**Step 1: Serve the folder locally**

Use `mcp__Claude_Browser__preview_start` with a `.claude/launch.json` entry, or any static server rooted at `C:\Users\Chris\Projects\cwc-audit`. Open:

```
http://localhost:<port>/chang-orthodontics/concept-a/
```

**Step 2: Confirm the page is styled, not naked HTML**

Read the page and check the console. Expected: navy `#005DAA` primary, Archivo Black H1, Hanken Grotesk body, pill buttons, the hero photo with its hard offset shadow. **Zero 404s in the network log for `site.css` or anything under `assets/`.** Inner-page links returning 404 is expected and is not a failure here.

If `site.css` 404s, the Task 3 rename broke the reference. Fix before continuing.

**Step 3: Confirm the preview landing page works**

Open `http://localhost:<port>/chang-orthodontics/` and confirm: the Chang logo renders (it now comes from `concept-a/`), exactly one card is shown, and "Open Concept A" navigates to the homepage.

**Step 4: Run the homepage audit**

Invoke @orthoboost-web:audit-homepage against `chang-orthodontics/concept-a/index.html`.

Expected: the two findings that are always expected on a concept page (the placeholder reviews section, and the absent-by-design items listed in `DESIGN.md`) plus the dangling inner-page links. **Anything else is a real regression introduced by this teardown** and must be fixed before Task 10.

**Step 5: Confirm no em-dashes crept in**

```bash
grep -rn '—' /c/Users/Chris/Projects/cwc-audit/chang-orthodontics/index.html /c/Users/Chris/Projects/cwc-audit/chang-orthodontics/concept-a/BUILD-QUEUE.md
```

Expected: **no output.** House style, absolute.

---

### Task 10: Ship it

**Step 1: Review the whole branch as one diff**

```bash
git -C /c/Users/Chris/Projects/cwc-audit diff --stat main...chang-concept-a | tail -5
```

Expected: a very large deletion count and a small insertion count. Read the last line, insertions should be in the low hundreds at most.

**Step 2: Confirm nothing outside Chang was touched**

```bash
git -C /c/Users/Chris/Projects/cwc-audit diff --name-only main...chang-concept-a | grep -v '^chang-orthodontics/' | grep -v '^README.md$' | grep -v '^index.html$' | grep -v '^docs/plans/'
```

Expected: **no output.** If another client's folder appears, a Siouxland commit leaked in. Stop and report.

**Step 3: Push**

```bash
git -C /c/Users/Chris/Projects/cwc-audit push -u origin chang-concept-a
```

**Step 4: Open the PR**

```bash
gh pr create --repo OrthoBoost-Marketing/Client-web-concepts --base main --head chang-concept-a --title "chang: walk back to a single Concept A homepage" --body "$(cat <<'EOF'
Reduces `chang-orthodontics/` to one concept folder so the rest of the site is rebuilt through the current workflow instead of carried forward from the original three-concept pitch.

- `site/` promoted to `concept-a/`: flattened homepage, self-contained `site.css`, `DESIGN.md` design contract
- concepts 1, 2 and 3 deleted (78 pages)
- preview landing page rebuilt around a single Concept A card, logo repointed off the deleted concept-2
- `BUILD-QUEUE.md` records the ~24 pages the build phase has to produce
- README and repo index updated

Everything deleted is recoverable on `chang-preserve-2026-08-10`.

Homepage verified rendering with no asset 404s. Inner-page links 404 by design until the build phase runs.

🤖 Generated with [Claude Code](https://claude.com/claude-code)
EOF
)"
```

**Step 5: After merge, verify the live preview**

Wait for the Pages deploy, then open:

```
https://orthoboost-marketing.github.io/Client-web-concepts/chang-orthodontics/
```

Expected: one Concept A card, logo rendering, and `concept-a/` opening the styled homepage. Confirm `/concept-2/` now 404s, that is the intended outcome.

**Do not send the new link to the client** until Jules has looked at it. The old three-concept link he may have already shared is now dead.

---

## What this plan deliberately does not do

- **Does not touch `CLIENT-BRIEF.md`.** It is still status DRAFT with open TBDs (founding year, tagline). Resolving those is intake work, a separate phase.
- **Does not build any inner pages.** That is @orthoboost-web:build-site, the next phase, driven by `BUILD-QUEUE.md`.
- **Does not rewrite the homepage.** The flattened Concept A homepage ships as is. If it needs design changes, that is a separate pass against `DESIGN.md`.
- **Does not merge `chang-preserve-2026-08-10`.** That branch exists only as the recovery point and sits on top of unrelated Siouxland commits.
- **Does not clean up the other three checkouts.** Four checkouts of one repo is its own problem, worth fixing, not here.
