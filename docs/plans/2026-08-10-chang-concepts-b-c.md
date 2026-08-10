# Chang Orthodontics: Concepts B and C Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Tasks 5 and 6 are blocked on a human design step (Task 4); execute 1 to 3, hand off, resume at 5 when the designs come back.

**Goal:** Add two new homepage concepts for Chang Orthodontics, `concept-b` (persona `dr-c-yang`) and `concept-c` (persona `dr-b-nye`), built through the full pipeline (assign-persona → Claude Design → flatten → audit → publish) so the client picks a direction from three audited options.

**Architecture:** Concept A stays exactly as it is. B and C are designed in a Claude Design project against `practice-site-primitives`, flattened to self-contained static files by `flatten.mjs`, audited against Dr. Ty's rules by `audit-homepage`, and published beside A on the existing GitHub Pages hub. Brand invariants across all three: **navy `#005DAA` and the logo, nothing else**. Type, surface language, radii and shadows are concept-level choices.

**Tech Stack:** Static HTML on GitHub Pages (`OrthoBoost-Marketing/Client-web-concepts`, `main` = production). React + `practice-site-primitives` only inside the design/flatten leg. No build step in the published repo.

---

## Decisions already made (do not re-ask)

| Decision | Answer | Why |
|---|---|---|
| Slot A | `dr-g-house`, the existing homepage, untouched | Chang is a listed example client of this archetype; the concept is live and refined |
| Slot B | `dr-c-yang`, High-Expertise Clinical Ortho | User-specified. Fits: UCSF clinical professor, published researcher, complex cases, GP referrals |
| Slot C | `dr-b-nye`, Science-Driven Holistic Clinic | Third archetype group. The published 3-D airway research is the practice's rarest asset and this is the only archetype built around evidence-backed wellness |
| Identity line | Navy `#005DAA` + logo invariant; everything else varies per concept | Chang has no client brand typefaces; concept A's Archivo Black/Hanken was a concept choice, not brand. The client is choosing a *direction* |
| Design actor | Jules, in Claude Design, per the pipeline | Exercises the real workflow. This session preps inputs and handles flatten/audit/publish |

## Context an engineer with zero background needs

- **Working checkout:** `C:\Users\Chris\Projects\cwc-audit`, currently on `main`, which is level with `origin/main` and is what GitHub Pages serves. All work here happens on a branch.
- **Chang folder state:** `chang-orthodontics/` holds `CLIENT-BRIEF.md` (DRAFT), `concept-a/` (live, refined homepage + `DESIGN.md` + `BUILD-QUEUE.md`), and `index.html` (the client hub page, currently ONE card). Three `specimen*.html` files in `concept-a/` are gitignored scratch; leave them.
- **Persona files:** `C:\Users\Chris\Desktop\Orthoboost Ad Generator\docs\personas\dr-c-yang\design.md` and `...\dr-b-nye\design.md`. Each file's `## Website homepage` section already handles the web boundary; attach whole files, strip nothing. (The `dr-g-house` filename gotcha does not apply; A is not being redesigned.)
- **Primitives repo:** `C:\Users\Chris\Projects\practice-site-primitives`. Flatten: `npm run flatten -- --entry <page.tsx> --out <dir>/index.html`. **Exit code 2 = an inline literal colour, per-element identity drift; fix before proceeding.** Audit helper: `scripts/audit-site.mjs`.
- **Design prompt + structure brief:** `C:\Users\Chris\Downloads\CLAUDE-DESIGN-PROMPT.md` (client-agnostic, swap only the persona file per concept) and `C:\Users\Chris\Downloads\HOMEPAGE-DESIGN-BRIEF.md` (structure and counts authority).
- **Three-input authority split, verbatim rule:** `HOMEPAGE-DESIGN-BRIEF.md` = structure and counts only · `CLIENT-BRIEF.md` = facts and brand · persona `design.md` = look and feel only. Conflicts: brand → client brief always; counts and sections → homepage brief always; the persona never sets a colour, typeface, or count.
- **The one recorded failure mode:** a brief once said "differ from concept A" without naming the invariant boundary, and the concept came back off-brand. Every instruction that says "differ" must name what may NOT differ: navy `#005DAA` and the logo.
- **House rules that apply to every file written:** no em-dashes anywhere, ever. Practice name spelled out in full. All GitHub operations as `dev-orthoboost`.
- **Known content blocker carried from A:** no verbatim Google review quotes exist. Reviews sections ship as visible placeholders; writing a quote is forbidden. Do not add `aggregateRating` or `Review` schema.
- **Copy rules from the brief:** no urgency, no discounts, no exclamation marks, never "free exam" (always "free consultation"), never Medicaid, never Spanish advertising, no down payment references, no call-tracking number in markup, never print Dr. Chang's personal line (415) 652-6532.
- **Verification trap:** the in-app browser pane does not composite frames, so CSS transitions freeze and scroll-reveal pages read as broken/overflowing. Inject `[data-reveal]{opacity:1!important;transform:none!important;transition:none!important}` (or the concept's equivalent) before measuring. Never trust a headless-Chrome `--window-size=390` screenshot on Windows; measure `scrollWidth` in a real 390px viewport.

---

### Task 1: Branch and record the persona assignments

**Files:**
- Modify: `chang-orthodontics/CLIENT-BRIEF.md`

**Step 1: Branch off main**

```bash
git -C /c/Users/Chris/Projects/cwc-audit fetch origin && git -C /c/Users/Chris/Projects/cwc-audit checkout -b chang-concepts-b-c origin/main
```

Expected: new branch, level with origin/main.

**Step 2: Record the assignment the way `assign-persona` records it**

In `CLIENT-BRIEF.md`, find the `## Avatar & voice` section. Directly under the existing `avatar: premium-ortho` line, add:

```markdown
persona slots (assigned 2026-08-10):
- concept-a: `dr-g-house` (Premium Family Ortho), the existing live homepage, built and refined before this assignment; recorded for the slot, not redesigned.
- concept-b: `dr-c-yang` (High-Expertise Clinical Ortho), authority axis: UCSF professorship, board certification, published research, complex cases. The practice as the referral-grade specialist.
- concept-c: `dr-b-nye` (Science-Driven Holistic Clinic), evidence axis: the published 3-D airway research leads; orthodontics framed as airway and whole-child health with scientific backing.

composition boundary (applies to every concept, name it in any instruction that says "differ"): brand-invariant = navy #005DAA and the logo. Everything else, type system, surface language, radii, shadows, section order, hero pattern, density, copy register, is concept-level and MUST differ across slots.
```

**Step 3: Verify no em-dashes were introduced**

```bash
grep -cP '\x{2014}' /c/Users/Chris/Projects/cwc-audit/chang-orthodontics/CLIENT-BRIEF.md
```

Expected: the same em-dash line count as before your edit (the file has pre-existing ones in untouched lines; your added lines must contribute zero). Check your added block specifically renders with commas and colons only. (Done 2026-08-10: 34 before and after, inserted block clean.)

**Step 4: Commit**

```bash
git -C /c/Users/Chris/Projects/cwc-audit add chang-orthodontics/CLIENT-BRIEF.md && git -C /c/Users/Chris/Projects/cwc-audit commit -m "chang: assign personas for concept slots B and C

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>"
```

---

### Task 2: Gate 1, resolve blockers before any design starts

Nothing is designed until these are answered in writing. Record each in a `## Resolutions log (concepts B and C)` block appended to `CLIENT-BRIEF.md`.

**Step 1: Walk the Gate 1 checklist against the brief**

- **Services count is 3, 6 or 9:** concept A ships 6 treatments. B and C inherit the same service list from the brief. Record: `services count: 6, unchanged`.
- **Patient-photo consent:** the 11 approved originals in `concept-a/assets/` are the approved set; B and C use the same pool. Record it.
- **Office hours:** confirmed in the brief (Mon to Fri 9 to 5, phones covered through lunch). Record it.
- **Asset paths:** B and C reference `../concept-a/assets/web/...`? **No.** Each concept folder is self-contained on Pages; copy the asset tree (Task 5, Step 3). Record: `assets: copied per concept from concept-a/assets, same 11 originals + webp derivatives`.
- **Concept direction named:** done in Task 1. Record the two slugs.
- **Review quotes:** still missing. Record: `reviews: placeholder rule carries to B and C; no quotes, no rating schema`.

**Step 2: Append the log and commit**

```bash
git -C /c/Users/Chris/Projects/cwc-audit add chang-orthodontics/CLIENT-BRIEF.md && git -C /c/Users/Chris/Projects/cwc-audit commit -m "chang: Gate 1 resolutions log for concepts B and C

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>"
```

---

### Task 3: Build the two Claude Design input packets

One folder per concept so Jules can attach three files per session without hunting.

**Files:**
- Create: `chang-orthodontics/design-packets/concept-b/` and `.../concept-c/` (each: `CLIENT-BRIEF.md` copy, `HOMEPAGE-DESIGN-BRIEF.md` copy, persona `design.md` copy, `GATE-2-CHECKLIST.md`)

**Step 1: Assemble**

```bash
cd /c/Users/Chris/Projects/cwc-audit/chang-orthodontics && mkdir -p design-packets/concept-b design-packets/concept-c && cp CLIENT-BRIEF.md design-packets/concept-b/ && cp CLIENT-BRIEF.md design-packets/concept-c/ && cp "/c/Users/Chris/Downloads/HOMEPAGE-DESIGN-BRIEF.md" design-packets/concept-b/ && cp "/c/Users/Chris/Downloads/HOMEPAGE-DESIGN-BRIEF.md" design-packets/concept-c/ && cp "/c/Users/Chris/Desktop/Orthoboost Ad Generator/docs/personas/dr-c-yang/design.md" design-packets/concept-b/persona-dr-c-yang.md && cp "/c/Users/Chris/Desktop/Orthoboost Ad Generator/docs/personas/dr-b-nye/design.md" design-packets/concept-c/persona-dr-b-nye.md
```

**Step 2: Write `GATE-2-CHECKLIST.md` into each packet**

Same content both, five stop-conditions verbatim from the workflow. The design must report these five things BEFORE writing code; stop the generation if:

```markdown
# Gate 2: stop before code if any of these is true

1. The trust-bar variant contradicts the brief's proof section (Chang proof = board certified, UCSF faculty since 2018, 10,000 patients, 100 five-star reviews; never a star-glyph rating).
2. The services count is not 6.
3. The hero H1 is a metro H1. Chang is a single office; the H1 carries San Carlos.
4. The token override block contains a colour. Navy #005DAA is the palette and it stays.
5. The missing-items list is empty. This brief has known gaps (no review quotes, no OG image, no favicon set, founding year TBD); an empty list means the design did not read the brief.

Also non-negotiable, from the client brief: no em-dashes anywhere, "free consultation" never "free exam", no urgency or discounts, no Medicaid, no Spanish, premium must not read adults-only (the practice is mostly kids).

Composition boundary: brand-invariant = navy #005DAA and the logo, NOTHING else. Do not carry concept A's Archivo Black, Hanken Grotesk, pill nav, paper grain, or hard offset shadow into this concept. This concept's persona file owns look and feel.
```

**Step 3: Commit the packets**

```bash
git -C /c/Users/Chris/Projects/cwc-audit add chang-orthodontics/design-packets && git -C /c/Users/Chris/Projects/cwc-audit commit -m "chang: Claude Design input packets for concepts B and C

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>"
```

---

### Task 4: HUMAN STEP, Jules designs B and C in Claude Design

Not executable by this session. Hand Jules this checklist:

1. Claude Design project with `practice-site-primitives` synced.
2. **One FRESH design session per concept**, never both in one chat, or the second comes out as the first recoloured.
3. Attach the three files from `chang-orthodontics/design-packets/concept-b/` (then, separately, `concept-c/`). Prompt is `Downloads/CLAUDE-DESIGN-PROMPT.md` unchanged; the persona file is the only thing that differs between the sessions.
4. Enforce Gate 2: the design reports its five pre-code items; check them against `GATE-2-CHECKLIST.md` before letting it write code.
5. Deliverable per concept: the page `.tsx` from the handoff, saved to `practice-site-primitives/examples/chang-concept-b.tsx` and `chang-concept-c.tsx`.

**Resume the plan at Task 5 when both `.tsx` files exist.**

---

### Task 5: Flatten both concepts (Gate 3)

**Files:**
- Create: `chang-orthodontics/concept-b/index.html`, `chang-orthodontics/concept-c/index.html`, plus per-concept `assets/`

**Step 1: Flatten B**

```bash
cd /c/Users/Chris/Projects/practice-site-primitives && npm run flatten -- --entry examples/chang-concept-b.tsx --out /c/Users/Chris/Projects/cwc-audit/chang-orthodontics/concept-b/index.html
```

Expected: exit 0. **Exit 2 = literal colour in an inline style; per-element identity drift. Fix the tsx, re-flatten. Do not hand-patch the output HTML.**

**Step 2: Flatten C** (same command, `chang-concept-c.tsx`, `concept-c/`)

**Step 3: Copy assets per concept**

```bash
cp -r /c/Users/Chris/Projects/cwc-audit/chang-orthodontics/concept-a/assets /c/Users/Chris/Projects/cwc-audit/chang-orthodontics/concept-b/assets && cp -r /c/Users/Chris/Projects/cwc-audit/chang-orthodontics/concept-a/assets /c/Users/Chris/Projects/cwc-audit/chang-orthodontics/concept-c/assets
```

Then verify every `src`/`srcset` in each flattened file resolves:

```bash
cd /c/Users/Chris/Projects/cwc-audit/chang-orthodontics/concept-b && grep -oE '(src|href)="assets/[^"]+"' index.html | sed -E 's/(src|href)="//;s/"//' | sort -u | while read f; do [ -f "$f" ] || echo "MISSING: $f"; done
```

Expected: no output. Repeat for `concept-c`.

**Step 4: Head hygiene on both flattened files**

Each must carry: `<meta name="robots" content="noindex">` (public preview), a canonical to `https://changortho.com/`, one `<title>` with San Carlos in it, and NO `aggregateRating`/`Review` schema. Add what flatten did not emit.

**Step 5: Gate 3 mobile measurement, REAL 390px viewport**

Serve locally (`python -m http.server 8899` at the repo root, background) and open each concept at 390x844 in the browser pane. Inject the reveal-neutralising override first (see Context), then confirm `document.documentElement.scrollWidth === 390` and zero unclipped elements past the viewport. Record the numbers.

**Step 6: Commit**

```bash
git -C /c/Users/Chris/Projects/cwc-audit add chang-orthodontics/concept-b chang-orthodontics/concept-c && git -C /c/Users/Chris/Projects/cwc-audit commit -m "chang: flatten concepts B (dr-c-yang) and C (dr-b-nye), Gate 3 clean at 390px

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>"
```

---

### Task 6: Audit both homepages (Gate 4)

**Step 1: Run `/audit-homepage` against `concept-b/index.html`.** Expected findings that are NOT failures: the review placeholder, links to inner pages that do not exist yet. Everything else gets fixed in the `.tsx` and re-flattened (never patch the HTML), then re-audited.

**Step 2: Same for `concept-c/index.html`.**

**Step 3: Truth pass, both concepts:** every figure traces to the brief (10,000 patients, 100 five-star reviews, 15+ years, UCSF 2018, Platinum Plus, seven-year program), NAP character-identical to concept A's, no unverifiable affiliation claims (the AAO lesson), no star glyphs, no em-dashes, phone is (650) 598-0888 everywhere.

**Step 4: Commit fixes per concept with the audit result in the message.**

---

### Task 7: Rebuild the client hub and repo index for three concepts

**Files:**
- Modify: `chang-orthodontics/index.html` (one card → three), `README.md`, repo-root `index.html`

**Step 1:** Restore the hub to a three-card grid (`grid-template-columns:repeat(3,1fr)`, the pre-teardown responsive pattern). Cards: **Concept A** "clinical instrument" (tag: current direction), **Concept B** with a one-paragraph plain-language description of the dr-c-yang direction, **Concept C** likewise for dr-b-nye. Labels are A/B/C, never 1/2/3. Meta line per card: "Homepage only". No em-dashes.

**Step 2:** README Chang row: concepts `1` → `3`; concept table gets rows for `concept-b` and `concept-c` with their directions; update the `**State**` paragraph (three concepts, A live-refined, B and C awaiting client review, blockers unchanged).

**Step 3:** Repo-root `index.html` line for Chang: `Concept A` → `3 concepts`.

**Step 4:** Verify no stale references and commit:

```bash
cd /c/Users/Chris/Projects/cwc-audit && grep -rn 'concept-1\|concept-2\|concept-3\|Concept 1\|Concept 2\|Concept 3' chang-orthodontics/index.html README.md index.html
```

Expected: no output.

---

### Task 8: Verify, ship, and hold for review

**Step 1:** Local full pass: hub shows three cards, all three concepts render styled with zero asset 404s at 1440 and 390 (reveal override injected), concept A byte-identical to main (`git diff main -- chang-orthodontics/concept-a` shows nothing).

**Step 2:** Push and open a PR (base `main`, title `chang: add concepts B and C through the design pipeline`) with the Gate 3 measurements and both audit summaries in the body. As always: work as `dev-orthoboost`, PR body ends with the Claude Code attribution line.

**Step 3:** **Do not merge without Jules's explicit go**, and after merge, verify the live hub and both new concept URLs return 200, then confirm `specimen*.html` still 404 publicly.

**Step 4:** Phase 4 is the only step that leaves the building: Jules sends the client ONE URL, the hub (`https://orthoboost-marketing.github.io/Client-web-concepts/chang-orthodontics/`), with the blockers list. Not this session's job to send it.

---

## What this plan deliberately does not do

- **Does not touch concept A.** It is the refined, live baseline and one of the three choices. Any diff under `concept-a/` is a bug.
- **Does not build inner pages for any concept.** `/build-site` runs on the winner only (Phase 5), driven by `BUILD-QUEUE.md`.
- **Does not resolve the review-quote, OG-image, favicon, or founding-year blockers.** They carry, visibly, into B and C.
- **Does not send anything to the client.** Publishing to the hub is Phase 4's precondition, not the client send itself.
