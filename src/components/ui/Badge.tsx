// src/components/ui/Badge.tsx
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variant === "default" && "bg-stone-100 text-stone-800",
        variant === "accent" && "bg-amber-100 text-amber-800", // Good for "Best Seller"
        variant === "outline" && "text-stone-600 border border-stone-200",
        className
      )}
    >
      {children}
    </span>
  );
}