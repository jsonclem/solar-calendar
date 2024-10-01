"use client";

import Link from "next/link";
import React from "react";
import { cn } from "@/ui/utils/styles";
import { usePathname } from "next/navigation";

export type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  exact?: boolean;
};

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  className,
  activeClassName,
  exact,
}) => {
  const pathname = usePathname();
  const active = exact ? pathname === href : pathname.includes(href);

  return (
    <Link
      href={href}
      className={cn("transition", className, {
        [activeClassName || ""]: active,
      })}
    >
      {children}
    </Link>
  );
};

NavLink.displayName = "NavLink";
