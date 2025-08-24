import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="bg-primary/10 rounded-3xl px-6 py-12 md:py-16 md:px-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Ready to never miss a <span className="text-primary">follow-up</span> again?
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Start closing more deals with an efficient, affordable CRM system.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/signup">Start for free</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="#demo">Schedule a demo</Link>
          </Button>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          No credit card required. Free 14-day trial on all plans.
        </p>
      </div>
    </section>
  );
}
