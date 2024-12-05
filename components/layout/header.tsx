"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Home, Building2, User, LogIn, Search, BarChart3 } from "lucide-react"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Listings", href: "/listings", icon: Building2 },
  { name: "Dashboard", href: "/dashboard", icon: BarChart3 },
  { name: "Account", href: "/account", icon: User },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="mr-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <Link
              href="/"
              className="flex items-center space-x-2"
              onClick={() => setIsOpen(false)}
            >
              <Building2 className="h-5 w-5" />
              <span className="font-bold">RentSpace</span>
            </Link>
            <nav className="mt-8 flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-2 text-foreground/60 transition-colors hover:text-foreground"
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <div className="mr-4 hidden md:flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Building2 className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              RentSpace
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
            >
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
          <nav className="flex items-center">
            <Button variant="ghost" size="sm" className="mr-2 hidden md:flex">
              <LogIn className="mr-2 h-4 w-4" />
              Sign In
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="mr-2 hidden md:flex"
              onClick={() => router.push('/dashboard')}
            >
              <BarChart3 className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
            <Button 
              size="sm" 
              className="hidden md:flex"
              onClick={() => router.push('/list-property')}
            >
              List Property
            </Button>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}