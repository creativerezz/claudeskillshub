"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/apps", label: "Apps", active: false },
    { href: "/", label: "Skills", active: false },
    { href: "/docs/skills-best-practices", label: "Docs", active: false },
    { href: "#", label: "Pricing", active: false },
    { href: "#", label: "Chat", active: false },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background">
      <div className="container flex h-14 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <svg
            className="h-5 w-5 text-primary"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
          <span className="text-lg font-semibold text-primary">AutomateHub</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm transition-colors hover:text-foreground ${
                link.active ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 md:flex">
          <Button
            variant="outline"
            size="sm"
            className="h-8 border-primary px-4 text-sm text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Publish
          </Button>
          <Link
            href="#"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="flex items-center justify-center p-2 text-muted-foreground transition-colors hover:text-foreground md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border/50 bg-background md:hidden">
          <nav className="container flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded-md px-3 py-2.5 text-sm transition-colors hover:bg-secondary ${
                  link.active
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="my-2 border-t border-border/50" />
            <div className="flex flex-col gap-2 px-3">
              <Button
                variant="outline"
                size="sm"
                className="h-9 w-full border-primary text-sm text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Publish
              </Button>
              <Link
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-center text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Login
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
