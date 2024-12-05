import { PropertyCard } from "@/components/property/property-card"

const FEATURED_PROPERTIES = [
  {
    id: "luxury-downtown-loft",
    title: "Luxury Downtown Loft",
    address: "123 Main St, New York, NY",
    price: 3500,
    beds: 2,
    baths: 2,
    sqft: 1200,
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
    propertyType: "Luxury",
  },
  {
    id: "modern-midtown-studio",
    title: "Modern Midtown Studio",
    address: "456 Park Ave, New York, NY",
    price: 2800,
    beds: 1,
    baths: 1,
    sqft: 750,
    imageUrl: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80",
    propertyType: "Comfortable",
  },
  {
    id: "cozy-brooklyn-heights",
    title: "Cozy Brooklyn Heights",
    address: "789 Heights St, Brooklyn, NY",
    price: 2200,
    beds: 1,
    baths: 1,
    sqft: 650,
    imageUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80",
    propertyType: "Modest",
  },
] as const

export function FeaturedListings() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Listings</h2>
            <p className="text-muted-foreground">
              Discover our hand-picked premium properties
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROPERTIES.map((property) => (
            <PropertyCard key={property.title} {...property} />
          ))}
        </div>
      </div>
    </section>
  )
}