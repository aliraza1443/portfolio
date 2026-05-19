"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(137,240,175,0.65)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[linear-gradient(135deg,#a7f3c0,#5bd38c)] px-5 py-3 text-slate-950 shadow-[0_14px_30px_rgba(91,211,140,0.25)] hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(91,211,140,0.35)]",
        secondary:
          "glass-panel px-5 py-3 text-white/90 hover:-translate-y-0.5 hover:border-white/25",
        ghost:
          "px-4 py-2 text-white/72 hover:bg-white/6 hover:text-white",
      },
      size: {
        default: "",
        sm: "px-4 py-2 text-xs",
        lg: "px-6 py-3.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({
  className,
  variant,
  size,
  children,
  ...props
}: ButtonProps) {
  return (
    <a className={cn(buttonVariants({ variant, size, className }))} {...props}>
      {children}
    </a>
  );
}
