"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { format } from "date-fns"

// Mock data - replace with real data from your backend
const conversations = [
  {
    id: "1",
    name: "John Smith",
    property: "Modern Downtown Loft",
    lastMessage: "Hi, I'm interested in viewing the apartment",
    timestamp: new Date(),
    unread: true,
    status: "New Lead"
  },
  {
    id: "2",
    name: "Sarah Johnson",
    property: "Luxury High-Rise Studio",
    lastMessage: "What utilities are included in the rent?",
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    unread: false,
    status: "Following Up"
  },
]

interface InboxListProps {
  selectedId: string | null
  onSelect: (id: string) => void
}

export function InboxList({ selectedId, onSelect }: InboxListProps) {
  return (
    <div className="flex-1 overflow-auto">
      {conversations.map((conversation) => (
        <div
          key={conversation.id}
          className={cn(
            "flex cursor-pointer flex-col border-b p-4 hover:bg-muted/50",
            selectedId === conversation.id && "bg-muted",
            conversation.unread && "bg-primary/5"
          )}
          onClick={() => onSelect(conversation.id)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-semibold">{conversation.name}</span>
              {conversation.unread && (
                <Badge variant="secondary" className="bg-primary/10">New</Badge>
              )}
            </div>
            <span className="text-xs text-muted-foreground">
              {format(conversation.timestamp, "h:mm a")}
            </span>
          </div>
          
          <p className="mt-1 text-sm text-muted-foreground">{conversation.property}</p>
          <p className="mt-2 text-sm line-clamp-1">{conversation.lastMessage}</p>
          
          <div className="mt-2 flex items-center gap-2">
            <Badge variant="outline">{conversation.status}</Badge>
          </div>
        </div>
      ))}
    </div>
  )
}