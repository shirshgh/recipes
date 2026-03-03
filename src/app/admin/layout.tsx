import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-serif uppercase tracking-widest text-accent-600 font-semibold">
            Admin
          </p>
          <h1 className="text-3xl font-bold text-brand-800" style={{ fontFamily: "'Playfair Display', serif" }}>
            Manage Recipes
          </h1>
        </div>
        <Link
          href="/admin/recipes/new"
          className="bg-brand-600 text-white font-serif font-semibold px-5 py-2.5 rounded-xl hover:bg-brand-700 transition-colors shadow-sm text-sm"
        >
          + Add Recipe
        </Link>
      </div>
      {children}
    </div>
  );
}
