"use client"

import { Calendar, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SearchFilter } from "@/components/search/search-filters"
import { LocationSearch } from "@/components/search/location-search"
import {
  propertyTypes,
  priceRanges,
  petPolicies,
  lifestyleFeatures,
} from "@/components/search/filter-data"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { useRouter } from "next/navigation"

export function HeroSection() {
  const router = useRouter()
  const [date, setDate] = useState<Date>()
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedPrices, setSelectedPrices] = useState<string[]>([])
  const [selectedPets, setSelectedPets] = useState<string[]>([])
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)

  const handleSearch = () => {
    const params = new URLSearchParams()
    
    if (selectedLocation) params.append("location", selectedLocation)
    if (selectedTypes.length) params.append("types", selectedTypes.join(","))
    if (selectedPrices.length) params.append("prices", selectedPrices.join(","))
    if (selectedPets.length) params.append("pets", selectedPets.join(","))
    if (selectedFeatures.length) params.append("features", selectedFeatures.join(","))
    if (date) params.append("moveIn", date.toISOString())
    
    router.push(`/listings?${params.toString()}`)
  }

  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80"
          alt="Modern apartment building"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70" />
      </div>
      
      <div className="container relative z-10 px-4 text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Find Your Perfect Home
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl md:text-2xl">
          Discover premium apartments with AI-powered matching and exclusive member perks
        </p>
        
        <div className="mx-auto max-w-4xl rounded-lg bg-background/80 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex flex-col gap-4">
            <LocationSearch
              onLocationSelect={(location) => {
                setSelectedLocation(location.id)
              }}
            />
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              <SearchFilter
                options={propertyTypes}
                placeholder="Property Type"
                value={selectedTypes}
                onChange={setSelectedTypes}
              />
              <SearchFilter
                options={priceRanges}
                placeholder="Price Range"
                value={selectedPrices}
                onChange={setSelectedPrices}
              />
              <SearchFilter
                options={petPolicies}
                placeholder="Pet Policy"
                value={selectedPets}
                onChange={setSelectedPets}
              />
              <SearchFilter
                options={lifestyleFeatures}
                placeholder="Lifestyle"
                value={selectedFeatures}
                onChange={setSelectedFeatures}
              />
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left sm:w-[240px]",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Select move-in date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <Button 
                className="w-full sm:w-auto"
                onClick={handleSearch}
              >
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" variant="outline">
            Explore Listings
          </Button>
          <Button size="lg" onClick={() => router.push('/listings')}>
            Become a Member
          </Button>
        </div>
      </div>
    </section>
  )
}