"use client"

import { useState } from "react"
import { ListingsGrid } from "@/components/listings/listings-grid"
import { ListingsMap } from "@/components/listings/listings-map"
import { ListingsFilters } from "@/components/listings/listings-filters"
import { Button } from "@/components/ui/button"
import { SplitView } from "@/components/ui/split-view"
import { LayoutGrid, Map } from "lucide-react"

export default function ListingsPage() {
  const [view, setView] = useState<"grid" | "split">("split")
  const [loading, setLoading] = useState(false)

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <div className="sticky top-16 z-30 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex items-center justify-between py-4">
          <ListingsFilters />
          <div className="flex items-center gap-2">
            <Button
              variant={view === "grid" ? "default" : "outline"}
              size="icon"
              onClick={() => setView("grid")}
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
            <Button
              variant={view === "split" ? "default" : "outline"}
              size="icon"
              onClick={() => setView("split")}
            >
              <Map className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {view === "grid" ? (
        <div className="container py-8">
          <ListingsGrid />
          <div className="mt-8 flex justify-center">
            <Button
              variant="outline"
              size="lg"
              disabled={loading}
              onClick={() => {
                setLoading(true)
                // Simulate loading more items
                setTimeout(() => setLoading(false), 1000)
              }}
            >
              {loading ? "Loading..." : "Load More"}
            </Button>
          </div>
        </div>
      ) : (
        <SplitView
          className="h-[calc(100vh-8.5rem)]"
          leftPanel={
            <div className="h-full overflow-auto p-4">
              <ListingsGrid />
              <div className="mt-8 flex justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  disabled={loading}
                  onClick={() => {
                    setLoading(true)
                    setTimeout(() => setLoading(false), 1000)
                  }}
                >
                  {loading ? "Loading..." : "Load More"}
                </Button>
              </div>
            </div>
          }
          rightPanel={<ListingsMap />}
        />
      )}
    </div>
  )
}