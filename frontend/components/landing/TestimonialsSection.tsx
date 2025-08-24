import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Real Estate Agent",
    company: "Realty Experts",
    image: "https://i.pravatar.cc/100?img=1",
    content: "Before Lead CRM, I was tracking clients in spreadsheets and missing follow-ups. Now my response time has improved dramatically, and I've closed 40% more deals this quarter.",
    industry: "real-estate",
  },
  {
    name: "Michael Chen",
    role: "Insurance Agent",
    company: "Pacific Insurance",
    image: "https://i.pravatar.cc/100?img=3",
    content: "The automated follow-ups have changed my business. I'm connecting with more prospects and closing policies faster without the hassle of an enterprise system.",
    industry: "insurance",
  },
  {
    name: "Jessica Rodriguez",
    role: "Sales Manager",
    company: "Tech Solutions Inc",
    image: "https://i.pravatar.cc/100?img=5",
    content: "We switched from an expensive CRM to Lead CRM and saved thousands while improving our team's productivity. The interface is intuitive and our reps actually want to use it.",
    industry: "tech",
  },
  {
    name: "David Patel",
    role: "Mortgage Broker",
    company: "First Choice Lending",
    image: "https://i.pravatar.cc/100?img=8",
    content: "As an independent broker, I couldn't justify the cost of other CRMs. Lead CRM gives me everything I need at a fraction of the price, and my clients get faster responses.",
    industry: "finance",
  },
  {
    name: "Emma Wilson",
    role: "Car Sales Associate",
    company: "Downtown Motors",
    image: "https://i.pravatar.cc/100?img=9",
    content: "I've tried every CRM out there, and Lead CRM is the only one that doesn't overcomplicate things. I spend less time on data entry and more time selling cars.",
    industry: "auto",
  },
  {
    name: "Robert Kim",
    role: "Pharmaceutical Rep",
    company: "MedLife Inc",
    image: "https://i.pravatar.cc/100?img=11",
    content: "The mobile app lets me update client information right after meetings. No more forgetting details or missing follow-ups with busy doctors' offices.",
    industry: "healthcare",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Trusted by <span className="text-primary">sales professionals</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl">
          See how Lead CRM is helping sales professionals across industries close more deals.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-8">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="real-estate">Real Estate</TabsTrigger>
          <TabsTrigger value="insurance">Insurance</TabsTrigger>
          <TabsTrigger value="tech">Tech</TabsTrigger>
          <TabsTrigger value="finance">Finance</TabsTrigger>
          <TabsTrigger value="auto">Auto</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </TabsContent>
        
        {["real-estate", "insurance", "tech", "finance", "auto", "healthcare"].map((industry) => (
          <TabsContent key={industry} value={industry}>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials
                .filter((t) => t.industry === industry)
                .map((testimonial, index) => (
                  <TestimonialCard key={index} testimonial={testimonial} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <Card className="border shadow-sm">
      <CardContent className="pt-6">
        <div className="flex flex-col gap-4">
          <p className="italic">&ldquo;{testimonial.content}&rdquo;</p>
          <div className="flex items-center gap-4 mt-4">
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-xs text-primary-foreground">
              {testimonial.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <p className="font-medium">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground">
                {testimonial.role}, {testimonial.company}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
