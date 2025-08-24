import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleDollarSign, PieChart, Clock, BarChart3, FileSpreadsheet, Bell } from "lucide-react";

const problems = [
  {
    title: "Enterprise CRMs are too expensive",
    description: "Enterprise solutions cost up to $300 per user monthly, with excessive features creating unnecessary complexity and steep learning curves.",
    icon: CircleDollarSign
  },
  {
    title: "Manual tracking doesn't scale",
    description: "Spreadsheets and emails become unmanageable as your contact list grows, with no reminders or analytics to improve your process.",
    icon: FileSpreadsheet
  },
];

export function ProblemSection() {
  return (
    <div className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/20">
      <section id="problem" className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            The <span className="text-primary">follow-up problem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Sales professionals lose deals not because their product is bad, but because their follow-up system is broken.
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <div className="grid gap-6 sm:grid-cols-3">
              <Card className="text-center hover:shadow-md">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">48%</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    of salespeople never follow up with a prospect after initial contact
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-md">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">44%</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    give up after just one follow-up attempt
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-md">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">80%</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    of sales require 5-12 follow-ups to close the deal
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            <p className="text-center text-muted-foreground mt-4">
              Most sales professionals are missing out on <span className="font-medium text-primary">80% of potential sales</span> due to poor follow-up practices.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {problems.map((problem, index) => (
              <Card key={index} className="border shadow-sm transition-all hover:shadow-md">
                <CardHeader>
                  <div className="mb-3">
                    <problem.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{problem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{problem.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
