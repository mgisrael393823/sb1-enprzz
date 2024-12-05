interface Listing {
  address: string
  price: number
  propertyType: string
  type: string
  pets?: string[]
  amenities?: string[]
  features?: string[]
}

export function filterListings<T extends Listing>(listings: readonly T[], searchParams: URLSearchParams): T[] {
  let filtered = [...listings]
   
  const locationId = searchParams.get("location")?.toLowerCase()
  const types = searchParams.get("types")?.split(",")
  const prices = searchParams.get("prices")?.split(",")
  const propertyTypes = searchParams.get("propertyTypes")?.split(",")
  const pets = searchParams.get("pets")?.split(",")
  const amenities = searchParams.get("amenities")?.split(",")
  const features = searchParams.get("features")?.split(",")

  if (locationId) {
    const locationMap: Record<string, string[]> = {
      'chicago': ['chicago', 'il'],
      'fulton-market': ['fulton market', 'chicago'],
      'river-north': ['river north district', 'chicago'],
      'lincoln-park': ['lincoln park district', 'chicago'],
      'west-loop': ['west loop district', 'chicago'],
      'nyc': ['new york', 'ny'],
      'meatpacking': ['meatpacking district', 'new york'],
      'williamsburg': ['williamsburg', 'brooklyn'],
      'tribeca': ['tribeca', 'new york'],
      'sf': ['san francisco', 'ca'],
      'mission': ['mission district', 'san francisco'],
      'hayes-valley': ['hayes valley', 'san francisco'],
      'miami': ['miami', 'fl'],
      'design-district': ['design district', 'miami'],
      'wynwood': ['wynwood', 'miami'],
      'brickell': ['brickell', 'miami']
    }

    const searchTerms = locationMap[locationId] || [locationId.replace(/-/g, ' ')]

    filtered = filtered.filter(listing => {
      const address = listing.address?.toLowerCase() || ''
      return address && searchTerms.some(term => 
        address.toLowerCase().includes(term.toLowerCase()) ||
        term.toLowerCase().includes(address.toLowerCase())
      )
    })
  }

  if (propertyTypes?.length) {
    filtered = filtered.filter(listing =>
      propertyTypes.includes(listing.propertyType.toLowerCase())
    )
  }

  if (types?.length) {
    filtered = filtered.filter(listing => listing.type &&
      types.includes(listing.type)
    )
  }

  if (prices?.length) {
    filtered = filtered.filter(listing => {
      return prices.some(range => {
        if (!listing.price) return false
        const [min, max] = range.split("-").map(Number)
        if (max) {
          return listing.price >= min && listing.price <= max
        }
        return listing.price >= min
      })
    })
  }

  if (pets?.length) {
    filtered = filtered.filter(listing => listing.pets &&
      listing.pets?.some(pet => pets.includes(pet))
    )
  }

  if (amenities?.length) {
    filtered = filtered.filter(listing => listing.amenities &&
      listing.amenities?.some(amenity => amenities.includes(amenity))
    )
  }

  if (features?.length) {
    filtered = filtered.filter(listing => listing.features &&
      listing.features?.some(feature => features.includes(feature))
    )
  }

  return filtered
}