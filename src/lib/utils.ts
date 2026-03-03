import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Scale an ingredient amount and format it nicely */
export function scaleAmount(base: number, scale: number): string {
  const val = base * scale;
  // Round to 2 decimal places, strip trailing zeros
  const rounded = Math.round(val * 100) / 100;

  // Try to express as a simple fraction for readability
  if (rounded === Math.floor(rounded)) return String(rounded);

  const fractions: [number, string][] = [
    [0.25, "¼"],
    [0.5, "½"],
    [0.75, "¾"],
    [0.33, "⅓"],
    [0.67, "⅔"],
    [0.125, "⅛"],
  ];

  const whole = Math.floor(rounded);
  const frac = Math.round((rounded - whole) * 1000) / 1000;

  for (const [num, symbol] of fractions) {
    if (Math.abs(frac - num) < 0.03) {
      return whole > 0 ? `${whole}${symbol}` : symbol;
    }
  }

  return String(rounded);
}

/** Map health score 1–5 to a label and colour class */
export function healthLabel(score: number): { label: string; color: string } {
  const map: Record<number, { label: string; color: string }> = {
    1: { label: "Indulgent", color: "bg-red-100 text-red-700" },
    2: { label: "Treat", color: "bg-orange-100 text-orange-700" },
    3: { label: "Balanced", color: "bg-yellow-100 text-yellow-700" },
    4: { label: "Healthy", color: "bg-lime-100 text-lime-700" },
    5: { label: "Very Healthy", color: "bg-green-100 text-green-700" },
  };
  return map[score] ?? map[3];
}
