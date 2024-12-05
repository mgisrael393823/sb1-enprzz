"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

interface InboxSearchProps {
  value: string
  onChange: (value: string) => void
}

export function InboxSearch({ value, onChange }: InboxSearchProps) {
  return (
    <div className="relative flex-1">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input 
        placeholder="Search conversations..." 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-9"
      />
    </div>
  )
}