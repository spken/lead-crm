import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const faqs = [
  {
    question: "How is Lead CRM different from other CRM systems?",
    answer: "Lead CRM is specifically designed for individual sales professionals and small teams, focusing on the core features you actually need - contact management, automated follow-ups, and simple pipeline tracking - without the bloat and complexity of enterprise systems. We've made it affordable and easy to use from day one."
  },
  {
    question: "Do I need technical knowledge to use Lead CRM?",
    answer: "Not at all! Lead CRM is designed to be intuitive and user-friendly. You can set up your account and start managing leads within minutes. No technical expertise required."
  },
  {
    question: "Can I import my existing contacts?",
    answer: "Absolutely! Lead CRM allows you to import contacts from CSV files, Google Contacts, or other CRM systems. Our import wizard will guide you through mapping fields to ensure a smooth transition."
  },
  {
    question: "How does the automated follow-up system work?",
    answer: "When you add a contact or update their status, you can set follow-up reminders. Lead CRM will notify you when it's time to reach out, and even suggest templated messages based on the contact's stage in your sales pipeline."
  },
  {
    question: "Can I use Lead CRM on my phone?",
    answer: "Yes! Lead CRM works on any device with a web browser. Our responsive design ensures a great experience on smartphones and tablets, allowing you to update client information on the go."
  },
  {
    question: "What happens when I reach the contact limit on the free plan?",
    answer: "When you reach the 25-contact limit on our free plan, you'll receive a notification. You can choose to upgrade to our Pro plan for unlimited contacts, or you can manage your existing contacts by archiving those that are no longer active."
  },
  {
    question: "Do you offer any discounts for annual billing?",
    answer: "Yes, we offer a 20% discount when you choose annual billing on any of our paid plans. This can be selected during the upgrade process."
  },
  {
    question: "How secure is my data with Lead CRM?",
    answer: "Your data security is our top priority. We use industry-standard encryption, regular backups, and strict access controls to keep your information safe. Lead CRM is fully GDPR compliant and we never sell your data to third parties."
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Frequently Asked <span className="text-primary">Questions</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Everything you need to know about Lead CRM
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {faqs.map((faq, index) => (
          <Card key={index} className="border shadow-sm transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">{faq.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{faq.answer}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
