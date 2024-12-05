"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ListPropertyForm } from "@/components/list-property/list-property-form"
import { ListPropertyBenefits } from "@/components/list-property/list-property-benefits"
import { ListPropertyFAQ } from "@/components/list-property/list-property-faq"
import { Building2, Shield, Users } from "lucide-react"

export default function ListPropertyPage() {
  const [step, setStep] = useState(1)

  return (
    <div className="min-h-screen pb-16">
      <section className="relative py-20 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              List Your Property with Confidence
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Reach millions of verified renters and find the perfect tenant for your property
            </p>
            <Button size="lg" onClick={() => setStep(1)}>Get Started Now</Button>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4">
          <div className="grid lg:grid-cols-[1fr,380px] gap-8">
            <div className="space-y-8">
              <ListPropertyForm currentStep={step} onStepChange={setStep} />
            </div>
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Why List With Us?</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">Verified Tenants</h4>
                      <p className="text-sm text-muted-foreground">
                        Access pre-screened tenants with verified profiles
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Shield className="h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">Secure Platform</h4>
                      <p className="text-sm text-muted-foreground">
                        Advanced security and fraud prevention measures
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Building2 className="h-5 w-5 text-primary" />
                    <div>
                      <h4 className="font-medium">Property Management Tools</h4>
                      <p className="text-sm text-muted-foreground">
                        Streamline your rental business with our suite of tools
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
              <ListPropertyBenefits />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container px-4">
          <ListPropertyFAQ />
        </div>
      </section>
    </div>
  )
}