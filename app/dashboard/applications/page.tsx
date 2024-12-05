import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, User, Calendar } from "lucide-react"

const applications = [
  {
    id: "1",
    property: "Modern Downtown Loft",
    applicant: "John Smith",
    date: "2024-02-15",
    status: "pending",
  },
  {
    id: "2",
    property: "Luxury High-Rise Studio",
    applicant: "Sarah Johnson",
    date: "2024-02-14",
    status: "approved",
  },
  {
    id: "3",
    property: "Spacious River North",
    applicant: "Michael Brown",
    date: "2024-02-13",
    status: "rejected",
  },
]

export default function ApplicationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Applications</h1>
        <p className="text-muted-foreground">
          Review and manage tenant applications
        </p>
      </div>

      <div className="space-y-4">
        {applications.map((application) => (
          <Card key={application.id} className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-semibold">{application.property}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {application.applicant}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(application.date).toLocaleDateString()}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Badge
                  variant={
                    application.status === "approved"
                      ? "success"
                      : application.status === "rejected"
                      ? "destructive"
                      : "secondary"
                  }
                >
                  {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                </Badge>
                <Button variant="outline" size="sm">
                  <FileText className="mr-2 h-4 w-4" />
                  View Details
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}