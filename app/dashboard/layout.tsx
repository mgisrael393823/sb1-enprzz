"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  BarChart3,
  Building2,
  FileText,
  Home,
  MessageSquare,
  Menu,
  Settings,
  Users,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navigation = [
  { name: "Overview", href: "/dashboard", icon: Home },
  { name: "Properties", href: "/dashboard/properties", icon: Building2 },
  { name: "Applications", href: "/dashboard/applications", icon: FileText },
  { name: "Inbox", href: "/dashboard/inbox", icon: MessageSquare },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { name: "Tenants", href: "/dashboard/tenants", icon: Users },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="relative min-h-screen bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r bg-card",
        sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        "transition-transform duration-200 ease-in-out"
      )}>
        <div className="flex h-16 items-center gap-2 border-b px-6 bg-card">
          <Building2 className="h-6 w-6" />
          <span className="ml-2 font-semibold">Landlord Dashboard</span>
        </div>
        <nav className="flex-1 space-y-1.5 p-4 overflow-y-auto">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-primary text-primary-foreground" 
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Mobile sidebar toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed left-4 top-4 z-40 md:hidden hover:bg-accent"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Main content */}
      <div className="flex min-h-screen flex-col md:pl-72 transition-all duration-200">
        <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  )
}