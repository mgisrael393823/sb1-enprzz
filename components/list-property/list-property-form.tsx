"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { CalendarIcon, Check, Upload } from "lucide-react"

interface ListPropertyFormProps {
  currentStep: number
  onStepChange: (step: number) => void
}

export function ListPropertyForm({ currentStep, onStepChange }: ListPropertyFormProps) {
  const [date, setDate] = useState<Date>()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex items-center">
              <div
                className={cn(
                  "h-8 w-8 rounded-full flex items-center justify-center border",
                  currentStep >= step
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-muted-foreground text-muted-foreground"
                )}
              >
                {currentStep > step ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <span>{step}</span>
                )}
              </div>
              {step < 4 && (
                <div
                  className={cn(
                    "h-0.5 w-12",
                    currentStep > step ? "bg-primary" : "bg-muted-foreground"
                  )}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <Card className="p-6">
        {currentStep === 1 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Property Details</h2>
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Property Title</Label>
                <Input id="title" placeholder="e.g. Modern Downtown Loft" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="Street Address" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="propertyType">Property Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="condo">Condo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">Monthly Rent</Label>
                  <Input id="price" type="number" placeholder="0" />
                </div>
              </div>
            </div>
            <Button className="w-full" onClick={() => onStepChange(2)}>
              Continue
            </Button>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Property Features</h2>
            <div className="grid gap-4">
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="beds">Bedrooms</Label>
                  <Input id="beds" type="number" placeholder="0" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="baths">Bathrooms</Label>
                  <Input id="baths" type="number" placeholder="0" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sqft">Square Feet</Label>
                  <Input id="sqft" type="number" placeholder="0" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your property..."
                  className="min-h-[100px]"
                />
              </div>
              <div className="space-y-2">
                <Label>Availability Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="flex justify-between">
              <Button variant="outline" onClick={() => onStepChange(1)}>
                Back
              </Button>
              <Button onClick={() => onStepChange(3)}>Continue</Button>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Photos & Documents</h2>
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label>Property Photos</Label>
                <div className="border-2 border-dashed rounded-lg p-8 text-center">
                  <Upload className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
                  <div className="text-sm text-muted-foreground">
                    <p>Drag and drop your photos here, or click to browse</p>
                    <p className="mt-1">Maximum 10 photos, 5MB each</p>
                  </div>
                  <Button variant="outline" className="mt-4">
                    Upload Photos
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <Button variant="outline" onClick={() => onStepChange(2)}>
                Back
              </Button>
              <Button onClick={() => onStepChange(4)}>Continue</Button>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Review & Submit</h2>
            <div className="space-y-4">
              <div className="rounded-lg bg-muted p-4">
                <p className="text-sm text-muted-foreground">
                  Please review your listing details before submitting. Once submitted,
                  our team will review your listing within 24 hours.
                </p>
              </div>
              <div className="space-y-2">
                <Label>Terms & Conditions</Label>
                <div className="text-sm text-muted-foreground space-y-2">
                  <p>By submitting this listing, you agree to our:</p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>Fair Housing Policy</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <Button variant="outline" onClick={() => onStepChange(3)}>
                Back
              </Button>
              <Button>Submit Listing</Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}