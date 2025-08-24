import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, BarChart3, Mail, GitBranch, Smartphone, LineChart } from "lucide-react";

const features = [
  {
    title: "Automated Follow-ups",
    description: "Never miss a follow-up opportunity. Our system automatically reminds you when it's time to reach out.",
    icon: Clock
  },
  {
    title: "Lead Tracking",
    description: "Track every interaction with your leads and clients in one centralized, easy-to-use dashboard.",
    icon: BarChart3
  },
  {
    title: "Email Integration",
    description: "Seamlessly integrate with your email to track conversations and schedule automated follow-ups.",
    icon: Mail
  },
  {
    title: "Customizable Pipeline",
    description: "Create a sales pipeline that fits your specific workflow and selling process.",
    icon: GitBranch
  },
  {
    title: "Mobile Friendly",
    description: "Access your CRM on the go with our mobile-responsive design. Update leads from anywhere.",
    icon: Smartphone
  },
  {
    title: "Performance Analytics",
    description: "Get insights into your sales performance with simple, actionable analytics.",
    icon: LineChart
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Features designed for <span className="text-primary">sales professionals</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl">
          All the tools you need to stay organized, follow up consistently, and close more deals.
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Card key={index} className="border shadow-sm transition-all hover:shadow-md">
            <CardHeader>
              <div className="mb-3">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
