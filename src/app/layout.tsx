import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hirschs Favorite Recipes",
  description: "Our family recipe collection",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <header className="bg-brand-600 text-white">
          <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3 group">
              <span className="text-2xl">🍳</span>
              <span
                className="text-2xl font-bold tracking-tight group-hover:opacity-80 transition-opacity"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Hirschs Favorite Recipes
              </span>
            </a>
          </div>
          {/* Gold accent bar */}
          <div className="h-1 bg-accent-500" />
        </header>

        <main className="max-w-5xl mx-auto px-6 py-10">{children}</main>

        <footer className="border-t border-gray-100 mt-16">
          <div className="max-w-5xl mx-auto px-6 py-8 text-center text-sm text-gray-400 font-serif">
            Made with love — Hirschs Favorite Recipes
          </div>
        </footer>
      </body>
    </html>
  );
}
