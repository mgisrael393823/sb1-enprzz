"use client"

import { useSearchParams } from "next/navigation"
import { PropertyCard } from "@/components/property/property-card"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { SAMPLE_LISTINGS } from "@/lib/sample-data"
import { filterListings } from "@/lib/filter-utils"

interface Listing {
  id: string
  title: string
  address: string
  price: number
  beds: number
  baths: number
  sqft: number
  imageUrl: string
  propertyType: "Luxury" | "Comfortable" | "Modest"
  type: string
}

export function ListingsGrid() {
  const searchParams = useSearchParams()
  const [filteredListings, setFilteredListings] = useState<typeof SAMPLE_LISTINGS>(SAMPLE_LISTINGS)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const filtered = searchParams.toString()
      ? filterListings(SAMPLE_LISTINGS, searchParams)
      : SAMPLE_LISTINGS
    setFilteredListings(filtered)
    setLoading(false)
  }, [searchParams])
  if (loading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="h-48 bg-muted rounded-lg mb-4" />
            <div className="space-y-3">
              <div className="h-4 bg-muted rounded w-3/4" />
              <div className="h-4 bg-muted rounded w-1/2" />
              <div className="h-4 bg-muted rounded w-1/4" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (filteredListings.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-semibold mb-2 text-foreground">No listings found</h3>
        <p className="text-muted-foreground mb-6">
          Try adjusting your filters or exploring different neighborhoods
        </p>
        <Button
          variant="outline"
          onClick={() => {
            const url = new URL(window.location.href)
            url.search = ""
            window.history.pushState({}, "", url.toString())
            setFilteredListings(SAMPLE_LISTINGS)
          }}
        >
          Clear all filters
        </Button>
      </div>
    )
  }
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {filteredListings.map((listing) => (
        <PropertyCard key={listing.id} {...listing} />
      ))}
    </div>
  )
}