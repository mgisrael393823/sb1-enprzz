"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { Send, Paperclip, SmilePlus } from "lucide-react"

interface InboxConversationProps {
  conversationId: string
}

// Mock data - replace with real data from your backend
const messages = [
  {
    id: "1",
    sender: "John Smith",
    content: "Hi, I'm interested in viewing the apartment",
    timestamp: new Date(Date.now() - 1000 * 60 * 60),
    type: "received"
  },
  {
    id: "2",
    sender: "You",
    content: "Hello! I'd be happy to arrange a viewing. When would you like to come see it?",
    timestamp: new Date(Date.now() - 1000 * 60 * 30),
    type: "sent"
  }
]

export function InboxConversation({ conversationId }: InboxConversationProps) {
  const [newMessage, setNewMessage] = useState("")

  return (
    <div className="flex h-full flex-col">
      <div className="border-b p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold">John Smith</h3>
            <p className="text-sm text-muted-foreground">Modern Downtown Loft</p>
          </div>
          <Badge>New Lead</Badge>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex flex-col",
              message.type === "sent" ? "items-end" : "items-start"
            )}
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{message.sender}</span>
              <span>{format(message.timestamp, "h:mm a")}</span>
            </div>
            <div
              className={cn(
                "mt-1 max-w-[80%] rounded-lg px-4 py-2",
                message.type === "sent"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted"
              )}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t p-4">
        <div className="flex items-end gap-2">
          <Textarea
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="min-h-[80px]"
          />
          <div className="flex flex-col gap-2">
            <Button size="icon" variant="outline">
              <Paperclip className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="outline">
              <SmilePlus className="h-4 w-4" />
            </Button>
            <Button size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}