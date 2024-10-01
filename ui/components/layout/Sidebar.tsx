"use client";

import Link from "next/link";
import React, { createContext, useContext, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { cn } from "@/ui/utils/styles";
import { usePathname } from "next/navigation";

export type SidebarContextType = {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};

const SidebarContext = createContext<SidebarContextType>({
  collapsed: false,
  setCollapsed: () => {},
});

export const useSidebar = () => useContext(SidebarContext);

export const Sidebar = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithRef<"nav">
>(({ children, className, ...rest }, ref) => {
  const [collapsed, setCollapsed] = useState(false);

  const filteredChildren: React.ReactNode[] = [];
  let collapseChild;

  React.Children.toArray(children).forEach((child) => {
    if (
      React.isValidElement(child) &&
      typeof child.type !== "string" &&
      (child.type as React.ComponentType).displayName === "SidebarCollapse"
    ) {
      collapseChild = child;
    } else {
      filteredChildren.push(child);
    }
  });

  return (
    <SidebarContext.Provider
      value={{
        collapsed,
        setCollapsed,
      }}
    >
      <div className="relative">
        <nav
          ref={ref}
          className={cn(
            "h-screen w-56 overflow-auto flex flex-col sticky top-0 left-0",
            className
          )}
          {...rest}
        >
          {filteredChildren}
        </nav>
        {collapseChild}
      </div>
    </SidebarContext.Provider>
  );
});

Sidebar.displayName = "Sidebar";

export const SidebarTop = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<"div">
>(({ children, className, ...rest }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "h-14 px-5 flex bg-background-dark items-center gap-2 sticky top-0 left-0 w-full flex-shrink-0",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
});

SidebarTop.displayName = "SidebarTop";

export const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<"div">
>(({ children, className, ...rest }, ref) => {
  return (
    <div ref={ref} className={cn("px-3", className)} {...rest}>
      {children}
    </div>
  );
});

SidebarContent.displayName = "SidebarContent";

export const Sidebarbottom = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<"div">
>(({ children, className, ...rest }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "px-5 py-3 bottom-0 left-0 w-full sticky mt-auto",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
});

Sidebarbottom.displayName = "Sidebarbottom";

export const SidebarCollapse = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<"div">
>(({ children, className, ...rest }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "absolute left-full ml-2 top-1/2 h-20 w-1.5 rounded-full bg-separator",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
});

SidebarCollapse.displayName = "SidebarCollapse";

export const NavHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<"div">
>(({ children, className, ...rest }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("uppercase text-[10px] mb-1 px-2", className)}
      {...rest}
    >
      {children}
    </div>
  );
});

NavHeader.displayName = "NavHeader";

export type NavGroupContextType = {
  open: boolean;
  toggle: () => void;
};

const NavGroupContext = createContext<NavGroupContextType>({
  open: false,
  toggle: () => {},
});

export const useNavGroup = () => useContext(NavGroupContext);

export const NavGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<"div">
>(({ children, className, ...rest }, ref) => {
  const [open, setOpen] = useState(false);

  return (
    <NavGroupContext.Provider value={{ open, toggle: () => setOpen(!open) }}>
      <div ref={ref} {...rest} className={cn("", className)}>
        {children}
      </div>
    </NavGroupContext.Provider>
  );
});

NavGroup.displayName = "NavGroup";

interface NavGroupTitleProps extends React.ComponentPropsWithRef<"div"> {
  hrefs?: string[];
  activeClassName?: string;
}

export const NavGroupTitle = React.forwardRef<
  HTMLDivElement,
  NavGroupTitleProps
>(({ children, className, hrefs, activeClassName, ...rest }, ref) => {
  const { toggle, open } = useNavGroup();
  const pathname = usePathname();

  const matchesHrefs = hrefs?.some((href) =>
    href === "/" ? pathname === "/" : pathname.includes(href)
  );

  return (
    <div
      ref={ref}
      onClick={toggle}
      className={cn(
        "flex items-center cursor-pointer gap-2 transition-all rounded px-2 py-2",
        {
          [activeClassName || ""]: !open && matchesHrefs,
        },
        className
      )}
      {...rest}
    >
      {children}
      <ChevronDownIcon
        className={cn("h-3 ml-auto transition-all duration-500", {
          "transform rotate-180": open,
        })}
      />
    </div>
  );
});

NavGroupTitle.displayName = "NavGroupTitle";

export const NavGroupLinks = React.forwardRef<
  HTMLUListElement,
  React.ComponentPropsWithRef<"ul">
>(({ children, className, ...rest }, ref) => {
  const { open } = useNavGroup();

  return (
    <ul
      ref={ref}
      {...rest}
      className={cn(
        "overflow-hidden transition-all duration-500 max-h-0",
        { "max-h-screen": open },
        className
      )}
    >
      {children}
    </ul>
  );
});

NavGroupLinks.displayName = "NavGroupLinks";

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
      className={cn(
        "flex items-center cursor-pointer gap-2 transition-all rounded pl-8 pr-2 py-2",
        className,
        {
          [activeClassName || ""]: active,
        }
      )}
    >
      {children}
    </Link>
  );
};

NavLink.displayName = "NavLink";
