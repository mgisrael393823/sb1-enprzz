import { Card } from "@/components/ui/card"
import { ArrowUp, ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils"

const metrics = [
  {
    name: "Average Rent",
    value: "$2,850",
    change: "+5.3%",
    changeType: "increase",
  },
  {
    name: "Occupancy Rate",
    value: "94%",
    change: "+2.1%",
    changeType: "increase",
  },
  {
    name: "Time on Market",
    value: "18 days",
    change: "-3 days",
    changeType: "decrease",
  },
  {
    name: "Application Rate",
    value: "8.2%",
    change: "+1.2%",
    changeType: "increase",
  },
]

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground">
          Track performance metrics across your properties
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.name} className="p-6">
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">
                {metric.name}
              </p>
              <p className="text-2xl font-bold">{metric.value}</p>
            </div>
            <div className="mt-4 flex items-center text-sm">
              {metric.changeType === "increase" ? (
                <ArrowUp className="h-4 w-4 text-green-500" />
              ) : (
                <ArrowDown className="h-4 w-4 text-red-500" />
              )}
              <span
                className={cn(
                  "ml-1",
                  metric.changeType === "increase" ? "text-green-500" : "text-red-500"
                )}
              >
                {metric.change}
              </span>
              <span className="ml-2 text-muted-foreground">from last month</span>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <div className="p-6">
            <h2 className="font-semibold">Revenue Trends</h2>
            {/* Add revenue chart component here */}
            <div className="mt-4 h-[300px] bg-muted/30 rounded flex items-center justify-center">
              <p className="text-muted-foreground">Revenue chart coming soon</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <h2 className="font-semibold">Occupancy Trends</h2>
            {/* Add occupancy chart component here */}
            <div className="mt-4 h-[300px] bg-muted/30 rounded flex items-center justify-center">
              <p className="text-muted-foreground">Occupancy chart coming soon</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}