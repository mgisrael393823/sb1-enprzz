"use client"

import { format } from "date-fns"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  BedDouble,
  Bath,
  Maximize,
  Check,
  X,
  CalendarDays,
  Building2,
} from "lucide-react"

interface PropertyOverviewProps {
  title: string
  address: string
  price: number
  beds: number
  baths: number
  sqft: number
  propertyType: string
  description: string
  amenities: readonly {
    name: string
    included: boolean
  }[]
  petPolicy: {
    allowed: boolean
    restrictions: string
    deposit: number
    rent: number
  }
  availability: string
  leaseTerms: readonly string[]
}

export function PropertyOverview({
  title,
  address,
  price,
  beds,
  baths,
  sqft,
  propertyType,
  description,
  amenities,
  petPolicy,
  availability,
  leaseTerms,
}: PropertyOverviewProps) {
  return (
    <div className="space-y-8">
      <Card className="relative overflow-hidden">
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium">Walk Score:</span>
            <Badge variant="secondary">N/A</Badge>
          </div>
        </div>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-2xl">{title}</CardTitle>
              <CardDescription className="mt-1.5">{address}</CardDescription>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">
                ${price.toLocaleString()}/mo
              </div>
              <Badge variant="outline" className="mt-1.5 capitalize">
                {propertyType}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <BedDouble className="h-4 w-4 text-muted-foreground" />
              <span>
                {beds} bed{beds > 1 ? "s" : ""}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Bath className="h-4 w-4 text-muted-foreground" />
              <span>
                {baths} bath{baths > 1 ? "s" : ""}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Maximize className="h-4 w-4 text-muted-foreground" />
              <span>{sqft.toLocaleString()} sqft</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">About this property</h3>
        <div className="space-y-4">
          <p className="text-muted-foreground">{description}</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="p-4">
              <h4 className="font-medium mb-2">Monthly Costs</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Base Rent</span>
                  <span>${price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Utilities (est.)</span>
                  <span>$150-200</span>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <h4 className="font-medium mb-2">One-Time Costs</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Security Deposit</span>
                  <span>${price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Application Fee</span>
                  <span>$50</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Amenities</h3>
        <div className="grid gap-4">
          <div className="space-y-3">
            <h4 className="font-medium text-sm text-muted-foreground">In-Unit Features</h4>
            <div className="grid gap-2 sm:grid-cols-2">
              {amenities
                .filter(a => a.name.includes("In-Unit") || a.name.includes("Central") || a.name.includes("Dishwasher"))
                .map((amenity) => (
                  <div key={amenity.name} className="flex items-center gap-2">
                    {amenity.included ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <X className="h-4 w-4 text-red-500" />
                    )}
                    <span>{amenity.name}</span>
                  </div>
                ))}
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-medium text-sm text-muted-foreground">Building Amenities</h4>
            <div className="grid gap-2 sm:grid-cols-2">
              {amenities
                .filter(a => !a.name.includes("In-Unit") && !a.name.includes("Central") && !a.name.includes("Dishwasher"))
                .map((amenity) => (
                  <div key={amenity.name} className="flex items-center gap-2">
                    {amenity.included ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <X className="h-4 w-4 text-red-500" />
                    )}
                    <span>{amenity.name}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Fees & Policies</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card className="p-4">
            <h4 className="font-medium mb-2">Move-In Costs</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">First Month's Rent</span>
                <span>${price.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Security Deposit</span>
                <span>${price.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Application Fee</span>
                <span>$50</span>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <h4 className="font-medium mb-2">Pet Policy</h4>
            <div className="space-y-2 text-sm">
              <p>{petPolicy.restrictions}</p>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Pet Deposit</span>
                <span>${petPolicy.deposit}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Monthly Pet Rent</span>
                <span>${petPolicy.rent}/pet</span>
              </div>
            </div>
          </Card>
          {amenities.map((amenity) => (
            <div
              key={amenity.name}
              className="flex items-center gap-2"
            >
              {amenity.included ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <X className="h-4 w-4 text-red-500" />
              )}
              <span>{amenity.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Pet Policy</h3>
        <div className="space-y-2">
          <p>{petPolicy.restrictions}</p>
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Pet Deposit:</span>
              <span>${petPolicy.deposit}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Monthly Pet Rent:</span>
              <span>${petPolicy.rent}/pet</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Availability & Lease Terms</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <div className="mb-2 text-sm text-muted-foreground">
              Available From
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-muted-foreground" />
              <span>{format(new Date(availability), "MMMM d, yyyy")}</span>
            </div>
          </div>
          <div>
            <div className="mb-2 text-sm text-muted-foreground">
              Lease Terms
            </div>
            <div className="flex flex-wrap gap-2">
              {leaseTerms.map((term) => (
                <Badge key={term} variant="secondary">
                  {term}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}