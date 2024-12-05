import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check } from "lucide-react"

const PLANS = [
  {
    name: "Basic",
    price: "Free",
    description: "Essential features for your apartment search",
    features: [
      "Basic property search",
      "Save favorite listings",
      "Email notifications",
      "Property comparisons",
    ],
  },
  {
    name: "RenterPlus",
    price: "$15",
    period: "month",
    description: "Premium features for serious renters",
    features: [
      "Early access to listings",
      "Exclusive property discounts",
      "Priority application reviews",
      "Rent reporting to credit bureaus",
      "Rewards program",
      "Premium customer support",
    ],
    featured: true,
  },
  {
    name: "Annual RenterPlus",
    price: "$149",
    period: "year",
    description: "Save 17% with annual billing",
    features: [
      "All RenterPlus features",
      "Two months free",
      "Extended price history",
      "Advanced neighborhood insights",
      "Moving concierge service",
    ],
  },
] as const

export function MembershipPlans() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Membership Plans</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan to enhance your rental search experience with exclusive
            perks and priority access
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PLANS.map((plan) => (
            <Card
              key={plan.name}
              className={plan.featured ? "border-primary shadow-lg" : ""}
            >
              <CardHeader className="p-6">
                {plan.featured && (
                  <div className="text-sm font-medium text-primary mb-2">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-muted-foreground">/{plan.period}</span>
                  )}
                </div>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="p-6 pt-0">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="p-6 pt-0">
                <Button
                  className="w-full"
                  variant={plan.featured ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}