// src/components/ui/Button.tsx
import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "icon";
  size?: "sm" | "md" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          "inline-flex items-center justify-center rounded-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          
          // Variants
          variant === "primary" && "bg-stone-900 text-white hover:bg-stone-800 active:scale-95",
          variant === "secondary" && "bg-stone-100 text-stone-900 hover:bg-stone-200",
          variant === "outline" && "border border-stone-200 bg-transparent hover:bg-stone-50 text-stone-900",
          variant === "ghost" && "hover:bg-stone-100 hover:text-stone-900",
          variant === "icon" && "p-2 hover:bg-stone-100 rounded-full",

          // Sizes
          size === "sm" && "h-9 px-4 text-xs",
          size === "md" && "h-11 px-6 text-sm",
          size === "lg" && "h-14 px-8 text-base",
          size === "icon" && "h-10 w-10",
          
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };