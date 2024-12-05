import { Card } from "@/components/ui/card"
import {
  ArrowDown,
  ArrowUp,
  Building2,
  DollarSign,
  Home,
  Users,
} from "lucide-react"
import { cn } from "@/lib/utils"

const stats = [
  {
    name: "Total Properties",
    value: "12",
    change: "+2",
    changeType: "increase",
    icon: Building2,
  },
  {
    name: "Active Listings",
    value: "8",
    change: "-1",
    changeType: "decrease",
    icon: Home,
  },
  {
    name: "Total Revenue",
    value: "$48,250",
    change: "+12%",
    changeType: "increase",
    icon: DollarSign,
  },
  {
    name: "Active Tenants",
    value: "24",
    change: "+3",
    changeType: "increase",
    icon: Users,
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2 pb-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's an overview of your properties.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.name} className="p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.name}
                </p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
              <div className="rounded-full bg-primary/10 p-3">
                <stat.icon className="h-5 w-5 text-muted-foreground" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              {stat.changeType === "increase" ? (
                <ArrowUp className="h-4 w-4 text-green-500" />
              ) : (
                <ArrowDown className="h-4 w-4 text-red-500" />
              )}
              <span
                className={cn(
                  "ml-1",
                  stat.changeType === "increase" ? "text-green-500" : "text-red-500"
                )}
              >
                {stat.change}
              </span>
              <span className="ml-2 text-muted-foreground">from last month</span>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2 hover:shadow-md transition-shadow">
          <div className="p-6 space-y-4">
            <h2 className="text-lg font-semibold">Revenue Overview</h2>
            {/* Add revenue chart component here */}
          </div>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <div className="p-6 space-y-4">
            <h2 className="text-lg font-semibold">Recent Applications</h2>
            {/* Add recent applications list component here */}
          </div>
        </Card>
      </div>
    </div>
  )
}