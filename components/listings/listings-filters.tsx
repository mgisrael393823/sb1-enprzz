"use client"

import { Button } from "@/components/ui/button"
import { useRouter, useSearchParams } from "next/navigation"
import { SearchFilter } from "@/components/search/search-filters"
import { LocationSearch } from "@/components/search/location-search"
import {
  propertyTypes,
  priceRanges,
  petPolicies,
  amenities,
  lifestyleFeatures,
} from "@/components/search/filter-data"
import { useState } from "react"

export function ListingsFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [selectedLocation, setSelectedLocation] = useState<string[]>([])
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedPrices, setSelectedPrices] = useState<string[]>([])
  const [selectedPets, setSelectedPets] = useState<string[]>([])
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([])
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  
  const updateFilters = (key: string, value: string[]) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value.length) {
      params.set(key, value.join(","))
    } else {
      params.delete(key)
    }
    router.push(`/listings?${params.toString()}`)
  }

  return (
    <div className="flex flex-1 items-center gap-2 overflow-x-auto pb-2">
      <LocationSearch
        onLocationSelect={(location) => {
          const params = new URLSearchParams(searchParams.toString())
          params.set("location", location.id)
          router.push(`/listings?${params.toString()}`)
        }}
      />
      <SearchFilter
        options={propertyTypes}
        placeholder="Property Type"
        value={selectedTypes}
        onChange={(value) => {
          setSelectedTypes(value)
          updateFilters("types", value)
        }}
      />
      <SearchFilter
        options={priceRanges}
        placeholder="Price Range"
        value={selectedPrices}
        onChange={(value) => {
          setSelectedPrices(value)
          updateFilters("prices", value)
        }}
      />
      <SearchFilter
        options={petPolicies}
        placeholder="Pet Policy"
        value={selectedPets}
        onChange={(value) => {
          setSelectedPets(value)
          updateFilters("pets", value)
        }}
      />
      <SearchFilter
        options={amenities}
        placeholder="Amenities"
        value={selectedAmenities}
        onChange={(value) => {
          setSelectedAmenities(value)
          updateFilters("amenities", value)
        }}
      />
      <SearchFilter
        options={lifestyleFeatures}
        placeholder="Lifestyle"
        value={selectedFeatures}
        onChange={(value) => {
          setSelectedFeatures(value)
          updateFilters("features", value)
        }}
      />
      <Button variant="outline" size="sm" className="whitespace-nowrap">
        More Filters
      </Button>
    </div>
  )
}