"use client"

import { useState } from "react"
import { InboxSidebar } from "./inbox-sidebar"
import { InboxList } from "./inbox-list"
import { InboxConversation } from "./inbox-conversation"
import { InboxSearch } from "./inbox-search"
import { InboxToolbar } from "./inbox-toolbar"

export function InboxLayout() {
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilter, setSelectedFilter] = useState<string>("all")

  return (
    <div className="flex h-[calc(100vh-4rem)] overflow-hidden">
      <InboxSidebar 
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
      />
      
      <div className="flex flex-1 flex-col border-r">
        <InboxToolbar>
          <InboxSearch 
            value={searchQuery}
            onChange={setSearchQuery}
          />
        </InboxToolbar>
        <InboxList 
          selectedId={selectedConversation}
          onSelect={setSelectedConversation}
          filter={selectedFilter}
          searchQuery={searchQuery}
        />
      </div>

      <div className="flex-1">
        {selectedConversation ? (
          <InboxConversation conversationId={selectedConversation} />
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              <h3 className="text-lg font-semibold">Select a conversation</h3>
              <p className="text-sm text-muted-foreground">
                Choose a conversation from the list to view messages
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}