"use client"

import { MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface PropertyLocationProps {
  address: string
  location: {
    lat: number
    lng: number
    neighborhood: string
    walkScore: number
    transitScore: number
    nearbyPlaces: readonly {
      name: string
      distance: string
    }[]
  }
}

export function PropertyLocation({ address, location }: PropertyLocationProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Location</h3>
      
      <div className="relative h-[400px] overflow-hidden rounded-lg bg-muted">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="mx-auto h-12 w-12 text-muted-foreground" />
            <p className="mt-4 text-sm text-muted-foreground">
              Map integration coming soon
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Neighborhood</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="mb-2 text-sm text-muted-foreground">Address</div>
                <div>{address}</div>
              </div>
              <div>
                <div className="mb-2 text-sm text-muted-foreground">Area</div>
                <div>{location.neighborhood}</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Transportation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="mb-2 text-sm text-muted-foreground">
                  Walk Score
                </div>
                <Badge variant="secondary">{location.walkScore}/100</Badge>
              </div>
              <div>
                <div className="mb-2 text-sm text-muted-foreground">
                  Transit Score
                </div>
                <Badge variant="secondary">{location.transitScore}/100</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Nearby Places</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
            {location.nearbyPlaces.map((place) => (
              <div
                key={place.name}
                className="flex items-center justify-between gap-2"
              >
                <span>{place.name}</span>
                <span className="text-sm text-muted-foreground">
                  {place.distance}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}