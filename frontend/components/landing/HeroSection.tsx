import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
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
    </section>
  );
}
