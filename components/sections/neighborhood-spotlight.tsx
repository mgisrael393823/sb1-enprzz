import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const neighborhoods = [
  {
    name: "Downtown Chicago",
    description: "Walkable and vibrant urban core",
    image: "https://images.unsplash.com/photo-1494522358652-f30e61a60313?auto=format&fit=crop&q=80",
    listings: 48,
  },
  {
    name: "Brooklyn Heights",
    description: "Historic charm meets modern living",
    image: "https://images.unsplash.com/photo-1555529902-5fbe7166d6ff?auto=format&fit=crop&q=80",
    listings: 36,
  },
  {
    name: "South Beach Miami",
    description: "Beachfront luxury and nightlife",
    image: "https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?auto=format&fit=crop&q=80",
    listings: 52,
  },
  {
    name: "Austin Downtown",
    description: "Tech hub with a musical soul",
    image: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?auto=format&fit=crop&q=80",
    listings: 41,
  },
]

export function NeighborhoodSpotlight() {
  return (
    <section className="py-24">
      <div className="container px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Popular Neighborhoods</h2>
            <p className="text-muted-foreground">
              Explore trending areas with the most sought-after properties
            </p>
          </div>
          <Button variant="outline">View All Areas</Button>
        </div>
        
        <ScrollArea className="w-full whitespace-nowrap rounded-lg">
          <div className="flex w-max space-x-4 p-1">
            {neighborhoods.map((neighborhood) => (
              <Card key={neighborhood.name} className="w-[300px] shrink-0">
                <CardHeader className="p-0">
                  <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
                    <img
                      src={neighborhood.image}
                      alt={neighborhood.name}
                      className="object-cover w-full h-full transition-transform hover:scale-105"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-xl mb-1">
                    {neighborhood.name}
                  </CardTitle>
                  <CardDescription className="mb-4">
                    {neighborhood.description}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {neighborhood.listings} available listings
                    </span>
                    <Button variant="ghost" size="sm">
                      View Listings
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  )
}