import { HeroSection } from "@/components/sections/hero-section"
import { FeaturedListings } from "@/components/sections/featured-listings"
import { MembershipPlans } from "@/components/sections/membership-plans"
import { HowItWorks } from "@/components/sections/how-it-works"
import { NeighborhoodSpotlight } from "@/components/sections/neighborhood-spotlight"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedListings />
      <HowItWorks />
      <MembershipPlans />
      <NeighborhoodSpotlight />
      
      <section className="py-24 bg-muted">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your Next Home?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of happy renters who found their perfect home through our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Explore Listings</Button>
            <Button size="lg" variant="outline">
              List Your Property
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}