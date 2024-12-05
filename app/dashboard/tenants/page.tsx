import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Mail, Phone, Home } from "lucide-react"

const tenants = [
  {
    id: "1",
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "(555) 123-4567",
    property: "Modern Downtown Loft",
    leaseEnd: "2024-12-31",
    status: "active",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    phone: "(555) 234-5678",
    property: "Luxury High-Rise Studio",
    leaseEnd: "2024-08-15",
    status: "active",
  },
  {
    id: "3",
    name: "Michael Brown",
    email: "michael.b@example.com",
    phone: "(555) 345-6789",
    property: "Spacious River North",
    leaseEnd: "2024-06-30",
    status: "notice",
  },
]

export default function TenantsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tenants</h1>
          <p className="text-muted-foreground">
            Manage your current tenants and leases
          </p>
        </div>
        <Button>Export List</Button>
      </div>

      <div className="space-y-4">
        {tenants.map((tenant) => (
          <Card key={tenant.id} className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <h3 className="font-semibold">{tenant.name}</h3>
                  <Badge
                    variant={tenant.status === "active" ? "success" : "warning"}
                  >
                    {tenant.status === "active" ? "Active" : "Notice Given"}
                  </Badge>
                </div>
                <div className="grid gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    {tenant.email}
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    {tenant.phone}
                  </div>
                  <div className="flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    {tenant.property}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Lease Ends</p>
                <p className="font-medium">
                  {new Date(tenant.leaseEnd).toLocaleDateString()}
                </p>
                <Button variant="outline" size="sm" className="mt-4">
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