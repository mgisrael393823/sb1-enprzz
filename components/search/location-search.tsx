"use client"

import * as React from "react"
import { Check, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandList,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Badge } from "@/components/ui/badge"
import { Location, popularLocations } from "./location-data"

interface LocationSearchProps {
  onLocationSelect?: (location: Location) => void
}

export function LocationSearch({ onLocationSelect }: LocationSearchProps) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState<Location | null>(null)
  const [searchQuery, setSearchQuery] = React.useState<string>("")
  const commandRef = React.useRef<HTMLDivElement>(null)

  const filteredLocations = React.useMemo(() => {
    const query = searchQuery.toLowerCase().trim()
    if (!query) return popularLocations

    const filtered = popularLocations.filter((location) =>
      location.name.toLowerCase().includes(query) ||
      location.region.toLowerCase().includes(query)
    )

    // Sort cities first, then neighborhoods
    return filtered.sort((a, b) => {
      if (a.type === b.type) return 0
      return a.type === "city" ? -1 : 1
    })
  }, [searchQuery])

  const groupedLocations = React.useMemo(() => {
    const cities = filteredLocations.filter(l => l.type === "city")
    const neighborhoods = filteredLocations.filter(l => l.type === "neighborhood")
    return { cities, neighborhoods }
  }, [filteredLocations])

  const handleSelect = (locationId: string) => {
    const location = popularLocations.find((l) => l.id === locationId)
    if (location) {
      setValue(location)
      setOpen(false)
      onLocationSelect?.(location)
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-start text-left bg-background text-foreground hover:bg-accent/10 border-input"
        >
          <MapPin className="mr-2 h-4 w-4 shrink-0" />
          {value ? (
            <span className="text-foreground">
              {value.name}, {value.region}
            </span>
          ) : (
            <span className="text-muted-foreground">
              Search cities or neighborhoods...
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] p-0 border-input bg-background" align="start">
        <Command shouldFilter={false} className="overflow-hidden rounded-md bg-background">
          <CommandInput
            placeholder="Search cities or neighborhoods..."
            value={searchQuery}
            onValueChange={setSearchQuery} 
            className="border-none focus:ring-0 text-foreground placeholder:text-muted-foreground bg-transparent"
          />
          <CommandList>
            <CommandEmpty className="py-6 text-center text-sm text-muted-foreground">
              No locations found. Try a different search term.
            </CommandEmpty>
            {groupedLocations.cities.length > 0 && (
              <CommandGroup heading="Cities" className="text-muted-foreground">
                {groupedLocations.cities.map((location) => (
                  <CommandItem
                    key={location.id}
                    value={`${location.name} ${location.region}`.toLowerCase()} 
                    className="flex items-center gap-2 px-4 py-2 text-foreground hover:bg-accent/50 aria-selected:bg-accent"
                    onSelect={() => handleSelect(location.id)}
                  >
                    <MapPin className="h-4 w-4 shrink-0 text-muted-foreground" />
                    <div className="flex flex-1 items-center justify-between">
                      <span>{location.name}, {location.region}</span>
                      <span className="text-xs text-muted-foreground capitalize">{location.type}</span>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
            {groupedLocations.neighborhoods.length > 0 && (
              <CommandGroup heading="Popular Neighborhoods" className="text-muted-foreground">
                {groupedLocations.neighborhoods.map((location) => (
                <CommandItem
                  key={location.id}
                  value={`${location.name} ${location.region}`.toLowerCase()}
                  className="flex items-center gap-2 px-4 py-2 text-foreground hover:bg-accent/50 aria-selected:bg-accent"
                  onSelect={() => handleSelect(location.id)}>
                  <MapPin className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <div className="flex flex-1 items-center justify-between">
                    <span>{location.name}, {location.region}</span>
                    <div className="flex items-center gap-2">
                      {location.badge && (
                        <Badge variant="secondary" className="text-xs">
                          {location.badge}
                        </Badge>
                      )}
                      <span className="text-xs text-muted-foreground capitalize">{location.type}</span>
                    </div>
                  </div>
                </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}