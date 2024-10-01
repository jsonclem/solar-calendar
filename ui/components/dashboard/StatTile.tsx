import { cn } from "@/ui/utils/styles";
import React from "react";

export const StatTile = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<"div">
>(({ children, className, ...rest }, ref) => {
  return (
    <div
      className={cn(
        "rounded-md border border-input relative shadow dark:border-input-dark transition-all p-md",
        className
      )}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  );
});

StatTile.displayName = "StatTile";

export const StatTileTitle = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<"div">
>(({ children, className, ...rest }, ref) => {
  return (
    <div
      className={cn(
        "text-xs font-medium dark:text-text-primary-dark",
        className
      )}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  );
});

StatTileTitle.displayName = "StatTileTitle";

export const StatTileNumber = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<"div">
>(({ children, className, ...rest }, ref) => {
  return (
    <div
      className={cn(
        "text-3xl font-bold leading-none dark:text-text-primary-dark",
        className
      )}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  );
});

StatTileNumber.displayName = "StatTileNumber";

export const StatTileDescription = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<"div">
>(({ children, className, ...rest }, ref) => {
  return (
    <div
      className={cn(
        "text-xs text-text-secondary dark:text-text-secondary-dark",
        className
      )}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  );
});

StatTileDescription.displayName = "StatTileDescription";