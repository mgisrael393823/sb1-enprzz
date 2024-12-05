import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { SAMPLE_LISTINGS } from "@/lib/sample-data"

export default function PropertiesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Properties</h1>
          <p className="text-muted-foreground">
            Manage and monitor all your properties
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Property
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SAMPLE_LISTINGS.map((property) => (
          <Card key={property.id} className="overflow-hidden">
            <img
              src={property.imageUrl}
              alt={property.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold">{property.title}</h3>
              <p className="text-sm text-muted-foreground">{property.address}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold">
                  ${property.price.toLocaleString()}/mo
                </span>
                <Button variant="outline" size="sm">
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