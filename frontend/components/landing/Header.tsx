"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { scrollToAnchor } from "@/lib/scroll-utils";

export function Header() {
  return (
    <header className="border-b bg-background/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">Lead CRM</span>
          </Link>
        </div>
        <div className="flex items-center justify-end gap-6">
          <nav className="hidden md:flex gap-6 items-center">
            <a 
              href="#features" 
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={(e) => scrollToAnchor(e, "features")}
            >
              Features
            </a>
            <a 
              href="#problem" 
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={(e) => scrollToAnchor(e, "problem")}
            >
              Problem
            </a>
            <a 
              href="#pricing" 
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={(e) => scrollToAnchor(e, "pricing")}
            >
              Pricing
            </a>
            <a 
              href="#faq" 
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={(e) => scrollToAnchor(e, "faq")}
            >
              FAQ
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/signup">Sign Up Free</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
