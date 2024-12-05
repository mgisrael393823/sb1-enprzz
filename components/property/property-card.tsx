"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, BedDouble, Bath, Maximize } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface PropertyCardProps {
  id: string
  title: string
  address: string
  price: number
  beds: number
  baths: number
  sqft: number
  imageUrl: string
  propertyType: "Luxury" | "Comfortable" | "Modest"
}

export function PropertyCard({
  id,
  title,
  address,
  price,
  beds,
  baths,
  sqft,
  imageUrl,
  propertyType,
}: PropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const router = useRouter()

  return (
    <Card className="overflow-hidden group">
      <div 
        className="relative cursor-pointer"
        onClick={() => router.push(`/listings/${id}/`)}
      >
        <img
          src={imageUrl}
          alt={title}
          className="h-48 w-full object-cover transition-transform group-hover:scale-105"
        />
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "absolute top-3 right-3 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm",
            "hover:bg-background/90 hover:scale-110 transition-all duration-300",
            "border border-border shadow-sm",
            {
              "text-red-500 hover:text-red-600": isFavorite,
              "text-muted-foreground hover:text-foreground": !isFavorite,
            }
          )}
          onClick={(e) => {
            e.stopPropagation()
            setIsFavorite(!isFavorite)
          }}
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Heart 
                  className={cn(
                    "h-5 w-5 transition-transform",
                    isFavorite && "scale-110 animate-in zoom-in-50 duration-300"
                  )} 
                  fill={isFavorite ? "currentColor" : "none"} 
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>{isFavorite ? "Remove from Favorites" : "Add to Favorites"}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Button>
        <Badge className="absolute top-2 left-2" variant="secondary">
          {propertyType}
        </Badge>
      </div>
      
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-muted-foreground text-sm mb-2">{address}</p>
        <p className="text-xl font-bold mb-4">${price.toLocaleString()}/mo</p>
        
        <div className="flex justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <BedDouble className="h-4 w-4" />
            <span>{beds} beds</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>{baths} baths</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize className="h-4 w-4" />
            <span>{sqft.toLocaleString()} sqft</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full"
          onClick={() => router.push(`/listings/${id}/`)}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  )
}