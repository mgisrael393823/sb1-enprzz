"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandList,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

interface FilterOption {
  value: string
  label: string
}

interface SearchFilterProps {
  options: FilterOption[]
  placeholder: string
  value?: string[]
  onChange?: (value: string[]) => void
  className?: string
}

export function SearchFilter({
  options,
  placeholder,
  value = [],
  onChange,
  className,
}: SearchFilterProps) {
  const [open, setOpen] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState("")
  const commandRef = React.useRef<HTMLDivElement>(null)

  const filteredOptions = React.useMemo(() => {
    const query = searchQuery.toLowerCase().trim()
    if (!query) return options

    return options.filter((option) =>
      option.label.toLowerCase().includes(query) ||
      option.value.toLowerCase().includes(query)
    )
  }, [options, searchQuery])

  const handleSelect = (selectedValue: string) => {
    const newValue = value.includes(selectedValue)
      ? value.filter((v) => v !== selectedValue)
      : [...value, selectedValue]
    onChange?.(newValue)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button 
          variant="outline"
          role="combobox" 
          aria-expanded={open} 
          className={cn(
            "w-full justify-between text-left bg-white text-black hover:bg-gray-50 border-gray-200",
            className
          )}
        >
          {value.length === 0 ? (
            <span className="text-gray-500 text-sm">{placeholder}</span>
          ) : (
            <div className="flex flex-wrap gap-1">
              {value.map((v) => (
                <Badge
                  key={v}
                  variant="secondary"
                  className="mr-1 text-sm bg-gray-100 text-gray-800"
                >
                  {options.find((opt) => opt.value === v)?.label}
                </Badge>
              ))}
            </div>
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 border-gray-200 bg-white" align="start">
        <Command shouldFilter={false} className="overflow-hidden rounded-md">
          <CommandInput 
            placeholder={`Search ${placeholder.toLowerCase()}...`}
            value={searchQuery}
            onValueChange={setSearchQuery}
            className="border-none focus:ring-0 text-black placeholder:text-gray-500"
          />
          <CommandList className="max-h-[200px] overflow-auto">
            <CommandEmpty className="py-6 text-center text-sm text-muted-foreground">
              No results found.
            </CommandEmpty>
            <CommandGroup className="text-muted-foreground">
              {filteredOptions.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  className="flex items-center gap-2 px-4 py-2 text-foreground hover:bg-accent/50 aria-selected:bg-accent"
                  onSelect={() => handleSelect(option.value)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4 flex-shrink-0",
                      value.includes(option.value) ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <span className="text-sm">{option.label}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}