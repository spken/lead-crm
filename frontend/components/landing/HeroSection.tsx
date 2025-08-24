'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { scrollToAnchor } from "@/lib/scroll-utils";

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col pt-16 relative">
      <div className="container mx-auto px-4 flex-1 flex items-center">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Never miss a <span className="text-primary">follow-up</span> again
            </h1>
            <p className="text-xl text-muted-foreground">
              A lightweight, affordable CRM for sales professionals that automates follow-ups and tracks client interactions without the complexity of enterprise systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/signup">Start for free</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#demo">Watch Demo</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative h-[350px] w-full md:h-[450px] md:w-[450px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground text-xl font-medium">
                CRM Dashboard Preview
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center">
        <span className="text-sm font-medium text-muted-foreground mb-2">Discover our features</span>
        <a 
          href="#features" 
          onClick={(e) => scrollToAnchor(e, "features")}
          className="group flex items-center justify-center p-2 rounded-full bg-primary/20 hover:bg-primary/10 transition-colors"
          aria-label="Scroll to features"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary/70 group-hover:text-primary transition-colors"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
