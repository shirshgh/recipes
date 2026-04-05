# Hirschs Recipes — New Computer Setup

## Code & Images
Fully on GitHub: https://github.com/shirshgh/recipes.git

## Database
**Turso** (remote cloud SQLite) — data lives in the cloud, nothing to restore.

## First-time setup on a new machine

```bash
# 1. Install Node 22 LTS
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
# → http://localhost:3000
# → http://localhost:3000/admin
```

## The one thing to keep safe
**Turso auth token** — save it in a password manager.
If lost, regenerate it at turso.tech → your database → Generate Token.

## Stack
- Next.js 15, TypeScript, Tailwind CSS
- Drizzle ORM → Turso (remote SQLite)
- Node 22 LTS required (v25+ breaks the native SQLite addon)
