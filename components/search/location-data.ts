interface Location {
  id: string
  name: string
  region: string
  type: "city" | "neighborhood"
  parentCity?: string
  badge?: "popular" | "trending" | "new"
}

export const popularLocations: Location[] = [
  // Cities
  { id: "nyc", name: "New York City", region: "New York", type: "city" },
  { id: "sf", name: "San Francisco", region: "California", type: "city" },
  { id: "chicago", name: "Chicago", region: "Illinois", type: "city" },
  { id: "miami", name: "Miami", region: "Florida", type: "city" },
  { id: "nashville", name: "Nashville", region: "Tennessee", type: "city" },
  { id: "denver", name: "Denver", region: "Colorado", type: "city" },
  { id: "la", name: "Los Angeles", region: "California", type: "city" },

  // New York Neighborhoods
  { id: "meatpacking", name: "Meatpacking District", region: "New York", type: "neighborhood", parentCity: "nyc", badge: "trending" },
  { id: "williamsburg", name: "Williamsburg", region: "New York", type: "neighborhood", parentCity: "nyc", badge: "popular" },
  { id: "tribeca", name: "Tribeca", region: "New York", type: "neighborhood", parentCity: "nyc" },
  { id: "dumbo", name: "DUMBO", region: "New York", type: "neighborhood", parentCity: "nyc" },

  // Chicago Neighborhoods
  { id: "fulton-market", name: "Fulton Market District", region: "Illinois", type: "neighborhood", parentCity: "chicago", badge: "trending" },
  { id: "lincoln-park", name: "Lincoln Park", region: "Illinois", type: "neighborhood", parentCity: "chicago", badge: "popular" },
  { id: "river-north", name: "River North", region: "Illinois", type: "neighborhood", parentCity: "chicago" },
  { id: "west-loop", name: "West Loop", region: "Illinois", type: "neighborhood", parentCity: "chicago" },

  // San Francisco Neighborhoods
  { id: "mission", name: "Mission District", region: "California", type: "neighborhood", parentCity: "sf", badge: "popular" },
  { id: "hayes-valley", name: "Hayes Valley", region: "California", type: "neighborhood", parentCity: "sf" },
  { id: "nob-hill", name: "Nob Hill", region: "California", type: "neighborhood", parentCity: "sf" },
  { id: "soma", name: "SoMa", region: "California", type: "neighborhood", parentCity: "sf", badge: "trending" },

  // Miami Neighborhoods
  { id: "design-district", name: "Design District", region: "Florida", type: "neighborhood", parentCity: "miami", badge: "trending" },
  { id: "wynwood", name: "Wynwood", region: "Florida", type: "neighborhood", parentCity: "miami", badge: "popular" },
  { id: "brickell", name: "Brickell", region: "Florida", type: "neighborhood", parentCity: "miami" },

  // Nashville Neighborhoods
  { id: "the-gulch", name: "The Gulch", region: "Tennessee", type: "neighborhood", parentCity: "nashville", badge: "trending" },
  { id: "germantown", name: "Germantown", region: "Tennessee", type: "neighborhood", parentCity: "nashville" },
  { id: "east-nashville", name: "East Nashville", region: "Tennessee", type: "neighborhood", parentCity: "nashville", badge: "popular" },

  // Denver Neighborhoods
  { id: "rino", name: "RiNo", region: "Colorado", type: "neighborhood", parentCity: "denver", badge: "trending" },
  { id: "lodo", name: "LoDo", region: "Colorado", type: "neighborhood", parentCity: "denver", badge: "popular" },
  { id: "capitol-hill", name: "Capitol Hill", region: "Colorado", type: "neighborhood", parentCity: "denver" },

  // Los Angeles Neighborhoods
  { id: "dtla", name: "Downtown LA", region: "California", type: "neighborhood", parentCity: "la", badge: "trending" },
  { id: "silver-lake", name: "Silver Lake", region: "California", type: "neighborhood", parentCity: "la", badge: "popular" },
  { id: "venice", name: "Venice Beach", region: "California", type: "neighborhood", parentCity: "la" }
]

export type { Location }