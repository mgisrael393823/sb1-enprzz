import { Card } from "@/components/ui/card"
import { 
  BarChart, 
  Shield, 
  Users, 
  Building2, 
  Search,
  FileCheck,
  MessageSquare
} from "lucide-react"

const benefits = [
  {
    icon: Search,
    title: "Maximum Exposure",
    description: "Reach millions of potential tenants actively searching for rentals"
  },
  {
    icon: Shield,
    title: "Secure Platform",
    description: "Advanced security measures to protect your information"
  },
  {
    icon: FileCheck,
    title: "Screening Tools",
    description: "Comprehensive tenant screening and background checks"
  },
  {
    icon: MessageSquare,
    title: "Direct Communication",
    description: "Built-in messaging system for efficient communication"
  },
  {
    icon: BarChart,
    title: "Market Insights",
    description: "Access to local market data and pricing recommendations"
  },
  {
    icon: Building2,
    title: "Property Tools",
    description: "Manage all your listings from one dashboard"
  }
]

export function ListPropertyBenefits() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Platform Benefits</h3>
      <div className="space-y-4">
        {benefits.map((benefit) => (
          <div key={benefit.title} className="flex gap-3">
            <benefit.icon className="h-5 w-5 text-primary" />
            <div>
              <h4 className="font-medium">{benefit.title}</h4>
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}