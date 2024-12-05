"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, StarHalf } from "lucide-react"

interface PropertyReviewsProps {
  propertyId: string
}

export function PropertyReviews({ propertyId }: PropertyReviewsProps) {
  // In a real app, these would come from an API
  const reviews = [
    {
      id: "1",
      author: "John D.",
      rating: 4.5,
      date: "2024-01-15",
      content: "Great location and amenities. Very responsive property management."
    },
    {
      id: "2",
      author: "Sarah M.",
      rating: 5,
      date: "2024-01-10",
      content: "Beautiful apartment with amazing views. Highly recommend!"
    }
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Reviews</h3>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="h-4 w-4 text-yellow-400"
                fill="currentColor"
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            {reviews.length} reviews
          </span>
        </div>
      </div>
      
      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id} className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="font-medium">{review.author}</span>
                <div className="flex items-center">
                  {Array.from({ length: Math.floor(review.rating) }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400"
                      fill="currentColor"
                    />
                  ))}
                  {review.rating % 1 !== 0 && (
                    <StarHalf
                      className="h-4 w-4 text-yellow-400"
                      fill="currentColor"
                    />
                  )}
                </div>
              </div>
              <span className="text-sm text-muted-foreground">
                {new Date(review.date).toLocaleDateString()}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{review.content}</p>
          </Card>
        ))}
      </div>
      
      <Button variant="outline" className="w-full">
        Write a Review
      </Button>
    </div>
  )
}