"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
}

export function Progress({ value = 0, className, ...props }: ProgressProps) {
  return (
    <div
      className={cn(
        "w-full h-3 bg-gray-200 rounded-full overflow-hidden",
        className
      )}
      {...props}
    >
      <div
        className="h-full bg-green-600 transition-all duration-500"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
