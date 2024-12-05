"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Building2, MessageSquare } from "lucide-react"

export function PropertyContact() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Building2 className="h-5 w-5" />
          <div className="flex-1">
            <CardTitle>Contact Property</CardTitle>
            <CardDescription>
              Send a message to the property manager
            </CardDescription>
          </div>
          <Badge variant="outline">Quick Response</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="First Name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Last Name" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input type="tel" id="phone" placeholder="Phone" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Message (optional)"
              className="min-h-[100px]"
            />
          </div>
          <div className="text-sm text-muted-foreground">
            By submitting, you agree to receive communications about this property.
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <MessageSquare className="mr-2 h-4 w-4" /> Send Message
        </Button>
      </CardFooter>
    </Card>
  )
}