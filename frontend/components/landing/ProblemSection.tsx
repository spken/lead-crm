import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ProblemSection() {
  return (
    <div className="py-16 md:py-24">
      <section id="problem" className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            The <span className="text-primary">follow-up problem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Sales professionals lose deals not because their product is bad, but because their follow-up system is broken.
          </p>
        </div>

        <Tabs defaultValue="stats" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="stats">The Stats</TabsTrigger>
            <TabsTrigger value="costly">Costly CRMs</TabsTrigger>
            <TabsTrigger value="manual">Manual Methods</TabsTrigger>
          </TabsList>
          <TabsContent value="stats" className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">48%</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    of salespeople never follow up with a prospect after initial contact
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">44%</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    give up after just one follow-up attempt
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            <Card className="border-primary">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-primary">80%</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  of sales require 5-12 follow-ups to close the deal
                </CardDescription>
              </CardContent>
            </Card>
            <p className="text-center text-muted-foreground">
              Most sales professionals are missing out on 80% of potential sales due to poor follow-up practices.
            </p>
          </TabsContent>
          
          <TabsContent value="costly">
            <Card>
              <CardHeader>
                <CardTitle>Enterprise CRMs are expensive and complex</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Enterprise CRM solutions can cost up to <span className="font-bold">$300 per user per month</span>, 
                   putting them out of reach for individual sales professionals and small teams.</p>
                <p>Even "basic" plans typically start at $7-30 per user monthly, adding up to hundreds or thousands 
                   of dollars per year.</p>
                <p>Most enterprise CRMs come with excessive features that sales professionals don't need, 
                   creating unnecessary complexity and steep learning curves.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="manual">
            <Card>
              <CardHeader>
                <CardTitle>Manual tracking methods are ineffective</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Using spreadsheets, notebooks, or emails to track client interactions becomes inefficient and error-prone as you scale.</p>
                <p>Without automated reminders, critical follow-ups are often forgotten or delayed.</p>
                <p>Manual methods provide no analytics or insights to help improve your sales process over time.</p>
                <p>Real estate agents and sales professionals specifically struggle with organizing lead information
                   and miss opportunities due to disorganized tracking systems.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
