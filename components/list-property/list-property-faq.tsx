import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How do I get started with listing my property?",
    answer: "Getting started is easy! Simply click the 'List Property' button and follow our step-by-step process. You'll need to provide property details, photos, and your contact information."
  },
  {
    question: "What does the verification process involve?",
    answer: "Our verification process includes confirming your identity and property ownership. You'll need to provide government-issued ID and proof of ownership or management authority."
  },
  {
    question: "How long does it take to get my listing approved?",
    answer: "Most listings are reviewed and approved within 24 hours. We'll notify you via email once your listing is live on our platform."
  },
  {
    question: "What are the fees for listing a property?",
    answer: "Basic listings are free. Premium features, such as featured placement and advanced screening tools, are available with our subscription plans."
  },
  {
    question: "Can I edit my listing after it's published?",
    answer: "Yes, you can edit your listing at any time through your dashboard. Updates will be reviewed to ensure quality standards."
  },
  {
    question: "How do I screen potential tenants?",
    answer: "We provide comprehensive screening tools including credit checks, background checks, and rental history verification. These can be requested directly through our platform."
  }
]

export function ListPropertyFAQ() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}