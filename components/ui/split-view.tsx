import * as React from "react"
import { GripVertical } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"
import { cn } from "@/lib/utils"

interface SplitViewProps extends React.HTMLAttributes<HTMLDivElement> {
  leftPanel: React.ReactNode
  rightPanel: React.ReactNode
  defaultSize?: number
  minSize?: number
  maxSize?: number
}

export function SplitView({
  leftPanel,
  rightPanel,
  className,
  defaultSize = 50,
  minSize = 30,
  maxSize = 70,
  ...props
}: SplitViewProps) {
  return (
    <ResizablePrimitive.PanelGroup
      direction="horizontal"
      className={cn("flex h-full w-full", className)}
      {...props}
    >
      <ResizablePrimitive.Panel
        defaultSize={defaultSize}
        minSize={minSize}
        maxSize={maxSize}
        className="h-full"
      >
        {leftPanel}
      </ResizablePrimitive.Panel>
      <ResizablePrimitive.PanelResizeHandle className="group relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-4 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full">
        <GripVertical className="h-4 w-4 rotate-90 scale-90 rounded-sm border bg-border opacity-0 transition-opacity group-hover:opacity-100" />
      </ResizablePrimitive.PanelResizeHandle>
      <ResizablePrimitive.Panel className="h-full">
        {rightPanel}
      </ResizablePrimitive.Panel>
    </ResizablePrimitive.PanelGroup>
  )
}