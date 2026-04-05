"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="print:hidden inline-flex items-center gap-2 text-sm font-serif px-4 py-2 border border-gray-200 rounded-xl hover:bg-brand-50 text-gray-600 transition-colors cursor-pointer"
    >
      <Printer size={14} />
      Print
    </button>
  );
}
