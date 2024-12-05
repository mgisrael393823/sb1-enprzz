import { Search, FileText, Home } from "lucide-react"

const steps = [
  {
    title: "Search Apartments",
    description: "Use advanced filters to find your ideal home",
    icon: Search,
  },
  {
    title: "Apply Online",
    description: "Complete applications and screenings in minutes",
    icon: FileText,
  },
  {
    title: "Move In",
    description: "Secure your new apartment hassle-free",
    icon: Home,
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find and secure your dream apartment in three simple steps
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative flex flex-col items-center text-center"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <step.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="absolute -right-12 top-8 hidden h-0.5 w-24 bg-border md:block" />
              <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}