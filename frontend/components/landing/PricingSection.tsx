import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Check } from "lucide-react";

const pricingOptions = [
  {
    name: "Free",
    description: "For individuals just getting started",
    price: "$0",
    period: "forever",
    features: [
      "Up to 25 contacts",
      "Basic follow-up reminders",
      "Email integration",
      "Mobile access",
    ],
    buttonText: "Get Started",
    buttonVariant: "outline" as const,
  },
  {
    name: "Pro",
    description: "For serious sales professionals",
    price: "$15",
    period: "per month",
    features: [
      "Unlimited contacts",
      "Advanced follow-up automation",
      "Email & SMS integration",
      "Custom sales pipeline",
      "Performance analytics",
      "Priority support",
    ],
    buttonText: "Try Free for 14 Days",
    buttonVariant: "default" as const,
    popular: true,
  },
  {
    name: "Team",
    description: "For small teams and agencies",
    price: "$12",
    period: "per user per month",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Lead assignment",
      "Shared contacts",
      "Manager analytics",
      "API access",
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
    minUsers: 3,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Simple, <span className="text-primary">affordable</span> pricing
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl">
          No hidden fees. No complicated plans. Just straightforward pricing for sales professionals.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {pricingOptions.map((option) => (
          <Card key={option.name} className={`border relative flex flex-col h-full transition-all hover:shadow-md ${option.popular ? 'border-primary shadow-md' : 'shadow-sm'}`}>
            {option.popular && (
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg rounded-tr-lg">
                Popular
              </div>
            )}
            <CardHeader>
              <CardTitle>{option.name}</CardTitle>
              <CardDescription>{option.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 flex-grow">
              <div>
                <span className="text-4xl font-bold">{option.price}</span>
                <span className="text-muted-foreground"> / {option.period}</span>
                {option.minUsers && (
                  <p className="text-sm text-muted-foreground mt-1">Minimum {option.minUsers} users</p>
                )}
              </div>
              <ul className="space-y-2">
                {option.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant={option.buttonVariant} className="w-full" asChild>
                <Link href="/signup">{option.buttonText}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-muted-foreground">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
}
