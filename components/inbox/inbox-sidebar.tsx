"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { 
  Inbox, 
  Star, 
  Clock,
  Archive,
  Trash,
  Settings,
  AlertCircle,
  CheckCircle2,
  Clock3,
} from "lucide-react"

interface InboxSidebarProps {
  selectedFilter: string
  onFilterChange: (filter: string) => void
}

const navigation = [
  { name: "All Messages", icon: Inbox, count: 12 },
  { name: "Starred", icon: Star, count: 3 },
  { name: "Waiting", icon: Clock, count: 5 },
  { name: "Archived", icon: Archive },
  { name: "Trash", icon: Trash },
] as const

const statusFilters = [
  { id: "unread", name: "Unread", icon: AlertCircle, count: 4 },
  { id: "replied", name: "Replied", icon: CheckCircle2, count: 8 },
  { id: "follow-up", name: "Follow-up", icon: Clock3, count: 3 },
] as const

export function InboxSidebar({ selectedFilter, onFilterChange }: InboxSidebarProps) {
  return (
    <div className="w-60 border-r">
      <div className="p-4">
        <Button className="w-full">New Message</Button>
      </div>
      
      <nav className="space-y-1 p-2">
        {navigation.map((item) => (
          <Button
            key={item.name}
            variant="ghost"
            className={cn(
              "w-full justify-start",
              selectedFilter === item.name.toLowerCase() && "bg-muted"
            )}
            onClick={() => onFilterChange(item.name.toLowerCase())}
          >
            <item.icon className="mr-2 h-4 w-4" />
            <span className="flex-1 text-left">{item.name}</span>
            {item.count && (
              <Badge variant="secondary">{item.count}</Badge>
            )}
          </Button>
        ))}
      </nav>

      <Separator className="my-4" />
      
      <div className="px-4 py-2">
        <h3 className="text-sm font-medium text-muted-foreground">Status</h3>
      </div>
      
      <nav className="space-y-1 p-2">
        {statusFilters.map((filter) => (
          <Button
            key={filter.id}
            variant="ghost"
            className={cn(
              "w-full justify-start",
              selectedFilter === filter.id && "bg-muted"
            )}
            onClick={() => onFilterChange(filter.id)}
          >
            <filter.icon className="mr-2 h-4 w-4" />
            <span className="flex-1 text-left">{filter.name}</span>
            {filter.count && (
              <Badge variant="secondary">{filter.count}</Badge>
            )}
          </Button>
        ))}
      </nav>

      <div className="mt-auto p-4">
        <Button variant="ghost" className="w-full justify-start">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
      </div>
    </div>
  )
}