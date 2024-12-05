"use client"

import * as React from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Expand } from "lucide-react"
import { cn } from "@/lib/utils"

interface PropertyGalleryProps {
  images: readonly string[]
}

export function PropertyGallery({ images }: PropertyGalleryProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [showDialog, setShowDialog] = React.useState(false)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const previousImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <>
      <div className="relative h-[50vh] min-h-[400px] w-full bg-muted">
        <div className="grid h-full grid-cols-[2fr,1fr] gap-2 p-2">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={images[0]}
              alt="Primary property image"
              className="h-full w-full cursor-pointer object-cover transition-transform hover:scale-105"
              onClick={() => setShowDialog(true)}
            />
            <Button
              size="icon"
              variant="outline"
              className="absolute right-4 top-4"
              onClick={() => setShowDialog(true)}
            >
              <Expand className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-rows-2 gap-2">
            {images.slice(1, 3).map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`Property image ${index + 2}`}
                  className="h-full w-full cursor-pointer object-cover transition-transform hover:scale-105"
                  onClick={() => {
                    setCurrentIndex(index + 1)
                    setShowDialog(true)
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-3xl">
          <DialogTitle className="sr-only">Property Gallery</DialogTitle>
          <div className="relative aspect-video">
            <img
              src={images[currentIndex]}
              alt={`Property image ${currentIndex + 1}`}
              className="h-full w-full object-contain"
            />
            <Button
              size="icon"
              variant="outline"
              className="absolute left-4 top-1/2 -translate-y-1/2"
              onClick={previousImage}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="absolute right-4 top-1/2 -translate-y-1/2"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <div className="flex gap-1">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={cn(
                      "h-1.5 w-1.5 rounded-full bg-white/50 transition-colors",
                      currentIndex === index && "bg-white"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}