"use client"

import { MapPin } from "lucide-react"

export function ListingsMap() {
  return (
    <div className="relative h-full w-full bg-muted">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="mx-auto h-12 w-12 text-muted-foreground" />
          <p className="mt-4 text-sm text-muted-foreground">
            Map integration coming soon
          </p>
        </div>
      </div>
    </div>
  )
}