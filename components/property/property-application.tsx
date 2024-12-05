"use client"

import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CalendarDays, FileText, Info } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { Calendar, MessageSquare } from "lucide-react"

interface PropertyApplicationProps {
  price: number
  availability: string
  screeningFee: {
    amount: number
    paidBy: "tenant" | "landlord"
  },
  propertyId: string
}

export function PropertyApplication({
  price,
  availability,
  screeningFee,
  propertyId
}: PropertyApplicationProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Ready to Apply?</CardTitle>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            Fast Apply
          </Badge>
        </div>
        <CardDescription>
          Complete your application online in minutes
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm">Monthly Rent</span>
            <span className="font-semibold">${price.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Security Deposit</span>
            <span className="font-semibold">${price.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <span className="text-sm">Application Fee</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Includes credit and background check</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="text-right">
              <span className="font-semibold">${screeningFee.amount}</span>
              <div className="text-xs text-muted-foreground">
                Paid by {screeningFee.paidBy}
              </div>
            </div>
          </div>
          <Separator />
          <div className="flex items-center gap-2 text-sm">
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
            <span>Available {format(new Date(availability), "MMMM d, yyyy")}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button className="w-full">
          <FileText className="mr-2 h-4 w-4" /> Apply Now
        </Button>
        <div className="flex gap-2 w-full">
          <Button className="flex-1">
            <Calendar className="mr-2 h-4 w-4" />
            Schedule Tour
          </Button>
          <Button variant="outline" className="flex-1">
            <MessageSquare className="mr-2 h-4 w-4" />
            Contact
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}