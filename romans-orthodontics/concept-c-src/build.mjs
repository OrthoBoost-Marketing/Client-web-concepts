/* One command to regenerate concept-c, so the title and description cannot
   drift from what shipped by being retyped on a command line.
 *
 *   node <path-to-this-file>/build.mjs --primitives ~/Projects/practice-site-primitives
 *
 * Runs flatten.mjs from the primitives repo, then assemble.mjs from here.
 * Exits non-zero if flatten does. Exit 2 means an inline style attribute
 * carries a literal colour, or a brand-identity token was overridden. */
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, join, resolve } from 'node:path'

const HERE = dirname(fileURLToPath(import.meta.url))

const args = Object.fromEntries(
  process.argv.slice(2).reduce((acc, a, i, arr) => {
    if (a.startsWith('--')) acc.push([a.slice(2), arr[i + 1]])
    return acc
  }, []),
)

const PRIMITIVES = resolve(args.primitives ?? join(HERE, '../../../practice-site-primitives'))

/* The page's <title> and <meta name="description">. Edit them HERE, never on a
   command line, and this is the only copy under version control. */
const TITLE = 'Braces &amp; Invisalign in Anthem, AZ | Romans Orthodontics'
const DESCRIPTION =
  'Romans Orthodontics is an orthodontic practice in Anthem, AZ. Dr. Nicholas Romans, ' +
  'board-certified orthodontist, treats kids, teens and adults. First visit is a free consultation.'

const run = (label, cmd, argv, cwd) => {
  const r = spawnSync(cmd, argv, { cwd, stdio: 'inherit', shell: false })
  if (r.error) throw r.error
  if (r.status !== 0) {
    console.error(`\n✗ ${label} exited ${r.status}`)
    process.exit(r.status ?? 1)
  }
}

run('flatten', process.execPath, [
  join(PRIMITIVES, 'scripts/flatten.mjs'),
  '--entry', join(HERE, 'homepage-concept-c2.tsx'),
  '--out', join(HERE, 'flat.html'),
  '--title', TITLE,
  '--description', DESCRIPTION,
], PRIMITIVES)

run('assemble', process.execPath, [join(HERE, 'assemble.mjs')], HERE)
