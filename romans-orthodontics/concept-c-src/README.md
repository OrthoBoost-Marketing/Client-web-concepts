# concept-c build sources

`concept-c/index.html` is generated, not hand-edited. Edit these three files and
re-run the pipeline instead, or the next regeneration silently reverts your change.

| File | What it is |
|---|---|
| `homepage-concept-c2.tsx` | the page composition — the flatten entry, imports from `practice-site-primitives` |
| `concept-c.css` | the concept's own CSS, which becomes the single inline `<style>` block |
| `assemble.mjs` | post-processes the flatten output into the repo's page shape |

## Regenerating

From a checkout of `practice-site-primitives` (that repo holds `flatten.mjs`,
`audit-site.mjs`, and Playwright). Point `SRC` at this folder:

```bash
node scripts/flatten.mjs --entry "$SRC/homepage-concept-c2.tsx" --out "$SRC/flat.html" --title "Braces &amp; Invisalign in Anthem, AZ | Romans Orthodontics" --description "Romans Orthodontics is an orthodontic practice in Anthem, AZ. Dr. Nicholas Romans, board-certified orthodontist, treats kids, teens and adults. First visit is a free consultation."
```

Then `node "$SRC/assemble.mjs"`, which writes `concept-c/index.html` and
`concept-c/design-system.css`.

**Flatten exit 2 means an inline style attribute carries a literal colour, or a
brand-identity token was overridden.** Fix it before building the sibling pages,
not after. The handoff bundle this concept came from tripped the brand lock: it
set `--font-display`/`--font-body`/`--font-mono` to Bitter + Nunito Sans, which
`CLIENT-BRIEF.md` names as the concept-b off-brand mistake. Typefaces, palette
and `--radius` are brand-invariant across every concept.

## Two things that must survive any restructuring

**The reveal observer fails open.** Content is visible by default; the hidden
state is armed only once the inline script runs, and if `IntersectionObserver`
never reports, everything is forced visible after 1.2s.

**The clip-path goes on `.roc-wipe`'s child, never on `.roc-wipe` itself.**
Chrome clips an IntersectionObserver target's intersection rect by the target's
own `clip-path`, so a self-clipped element reports ratio 0 forever and never
reveals. The handoff shipped it that way and all five media blocks — the doctor
portrait, the three zigzag photos, and the map — were permanently invisible. The
fail-open timeout does not catch it either, because the plain `.roc-anim`
elements do fire, so `fired` is never 0.
