# Hirschs Recipes — Project Reference

## Code & Images
Fully on GitHub: https://github.com/shirshgh/recipes.git

## Database
**Turso** (remote cloud SQLite) — data lives in the cloud, nothing to restore.
- Dashboard: https://app.turso.tech/shirsh/databases/hirsch-recipes
- URL: `libsql://hirsch-recipes-shirsh.aws-eu-west-1.turso.io`

---

## New Machine Setup

```bash
# 1. Install Node 22 LTS (required — v25+ breaks the native SQLite addon)
brew install node@22
echo 'export PATH="/opt/homebrew/opt/node@22/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc

# 2. Clone the repo
git clone https://github.com/shirshgh/recipes.git
cd recipes

# 3. Install dependencies
npm install

# 4. Create .env.local  ← only manual step
cat > .env.local << 'EOF'
TURSO_DATABASE_URL=libsql://hirsch-recipes-shirsh.aws-eu-west-1.turso.io
TURSO_AUTH_TOKEN=<token from password manager or Turso dashboard>
EOF

# 5. Run
npm run dev
# → http://localhost:3000        (recipe site)
# → http://localhost:3000/admin  (admin panel)
```

### The one thing to keep safe
**Turso auth token** — save it in a password manager.
If lost, regenerate at turso.tech → your database → Generate Token.

---

## Common Tasks

### Add a recipe
Use Claude Code (in this project folder):
```
/add-recipe https://some-recipe-url.com
/add-recipe [paste text or describe the recipe]
/add-recipe [share a photo of the recipe]
```
Claude will extract, confirm, and insert it into the DB automatically.

### Browse & edit recipes via UI
```bash
npm run dev
# → http://localhost:3000/admin
```
Edit or delete any recipe from the admin table.

### Open the database visually (Drizzle Studio)
```bash
npm run db:studio
# → opens a local web UI to browse/edit all tables
```

### Inspect the database via Turso CLI
```bash
# Install Turso CLI (once)
curl -sSfL https://get.tur.so/install.sh | bash

# Connect to the DB
turso db shell hirsch-recipes-hirsch

# Useful queries
SELECT id, title, category FROM recipes ORDER BY id DESC LIMIT 20;
SELECT COUNT(*) FROM recipes;
SELECT name FROM tags;
```

### Add or change the DB schema
1. Edit `src/db/schema.ts`
2. Run:
```bash
npm run db:push   # pushes schema changes to Turso (no migration files needed)
```

### Recipe images
- Stored in `public/images/` and committed to git
- Add a new image: drop the file into `public/images/`, then tell Claude: `add photo filename.jpg to [recipe name]`
- Keep images under 600KB — use JPG format (convert with `sips -s format jpeg input.png --out output.jpg`)

### Run a one-off script (e.g. bulk insert)
```bash
npx tsx --env-file=.env.local scripts/my-script.ts
```

---

## Key File Locations

| What | Where |
|------|-------|
| DB schema | `src/db/schema.ts` |
| Server queries | `src/lib/queries.ts` |
| Server actions | `src/lib/actions.ts` |
| Recipe detail page | `src/app/recipes/[slug]/page.tsx` |
| Home page | `src/app/page.tsx` |
| Admin panel | `src/app/admin/` |
| Recipe form (admin) | `src/components/admin/RecipeForm.tsx` |
| Global styles | `src/app/globals.css` |
| Tailwind config | `tailwind.config.ts` |
| Drizzle config | `drizzle.config.ts` |
| Env variables | `.env.local` (not in git) |
| Recipe images | `public/images/` |

---

## Stack
- Next.js 15, React 19, TypeScript
- Tailwind CSS (brand = mauve/purple, accent = gold)
- Drizzle ORM → Turso (remote SQLite)
- Radix UI, Lucide React
- Fonts: Playfair Display + Bitter (Google Fonts)
