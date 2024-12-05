import { SAMPLE_LISTINGS } from "@/lib/sample-data"
import { PropertyGallery } from "@/components/property/property-gallery"
import { PropertyOverview } from "@/components/property/property-overview"
import { PropertyLocation } from "@/components/property/property-location"
import { PropertyApplication } from "@/components/property/property-application"
import { PropertyContact } from "@/components/property/property-contact"
import { Separator } from "@/components/ui/separator"
import { PropertyActions } from "@/components/property/property-actions"
import { PropertyReviews } from "@/components/property/property-reviews"
import { Metadata } from "next"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return SAMPLE_LISTINGS.map((listing) => ({
    id: listing.id
  }))
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const property = SAMPLE_LISTINGS.find(listing => listing.id === params.id)
  
  if (!property) {
    notFound()
  }

  return {
    title: `${property.title} | RentSpace`,
    description: `${property.beds} bed, ${property.baths} bath ${property.propertyType} apartment for rent at ${property.address}`
  }
}

export default function PropertyPage({ params }: { params: { id: string } }) {
  const { id } = params
  const property = SAMPLE_LISTINGS.find(listing => listing.id === id)

  if (!property) {
    notFound()
  }

  const propertyData = {
    ...property,
    details: property.details || {
      description: property.description || "",
      images: [property.imageUrl],
      amenities: [],
      petPolicy: {
        allowed: false,
        restrictions: "No pets allowed",
        deposit: 0,
        rent: 0
      },
      availability: new Date().toISOString(),
      leaseTerms: ["12 months"],
      screeningFee: {
        amount: 50,
        paidBy: "tenant"
      },
      location: {
        lat: 0,
        lng: 0,
        neighborhood: "",
        walkScore: 0,
        transitScore: 0,
        nearbyPlaces: []
      }
    }
  }

  return (
    <div className="min-h-screen pb-16">
      <PropertyGallery images={propertyData.details.images} />
      
      <div className="container px-4 -mt-20">
        <div className="grid gap-8 lg:grid-cols-[1fr,380px]">
          <div className="space-y-8">
            <PropertyActions propertyId={id} />
            <PropertyOverview
              title={propertyData.title}
              address={propertyData.address}
              price={propertyData.price}
              beds={propertyData.beds}
              baths={propertyData.baths}
              sqft={propertyData.sqft}
              propertyType={propertyData.propertyType}
              description={propertyData.details.description}
              amenities={propertyData.details.amenities}
              petPolicy={propertyData.details.petPolicy}
              availability={propertyData.details.availability}
              leaseTerms={propertyData.details.leaseTerms}
            />
            <Separator />
            <PropertyLocation
              address={propertyData.address}
              location={propertyData.details.location}
            />
            <PropertyReviews propertyId={id} />
          </div>
          
          <div className="space-y-4">
            <PropertyApplication
              price={propertyData.price}
              availability={propertyData.details.availability}
              screeningFee={propertyData.details.screeningFee}
              propertyId={id}
            />
            <PropertyContact />
          </div>
        </div>
      </div>
    </div>
  )
}