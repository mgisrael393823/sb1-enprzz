"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart, Share2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface PropertyActionsProps {
  propertyId: string
}

export function PropertyActions({ propertyId }: PropertyActionsProps) {
  const [isFavorited, setIsFavorited] = useState(false)
  const [isShareOpen, setIsShareOpen] = useState(false)

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Check out this property",
        url: window.location.href
      })
    } else {
      setIsShareOpen(true)
    }
  }

  return (
    <div className="flex items-center gap-2">
      <Badge variant="secondary" className="bg-green-100 text-green-800">
        Verified Listing
      </Badge>
      <Button
        variant="outline"
        size="icon"
        className="rounded-full"
        onClick={() => setIsFavorited(!isFavorited)}
      >
        <Heart 
          className="h-4 w-4" 
          fill={isFavorited ? "currentColor" : "none"}
        />
      </Button>
      <Dialog open={isShareOpen} onOpenChange={setIsShareOpen}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={handleShare}
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Share this property</DialogTitle>
            <DialogDescription>
              Copy the link below to share this property
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={window.location.href}
              className="flex-1 px-3 py-2 border rounded"
              readOnly
            />
            <Button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href)
                setIsShareOpen(false)
              }}
            >
              Copy
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}