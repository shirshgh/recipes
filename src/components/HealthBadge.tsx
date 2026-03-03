import { cn, healthLabel } from "@/lib/utils";

const hearts = ["", "🤎", "🤎🤎", "💛", "💚", "💚💚"];

export function HealthBadge({ score }: { score: number }) {
  const { label, color } = healthLabel(score);
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 text-xs font-serif font-medium px-2.5 py-1 rounded-full whitespace-nowrap shrink-0",
        color
      )}
      title={`Health score: ${score}/5`}
    >
      <span>{hearts[score]}</span>
      {label}
    </span>
  );
}
