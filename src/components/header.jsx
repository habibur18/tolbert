"use client";

import { Menu, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image src="/tolbert.png" alt="Tolbert Logo" width={182} height={132} />
          {/* <span className="hidden sm:inline-block text-xl font-bold">Tolbert Garage Door</span> */}
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="flex flex-col gap-4">
              <Link href="#services" className="text-lg font-semibold">
                Services
              </Link>
              <Link href="#products" className="text-lg font-semibold">
                Products
              </Link>
              <Link href="#contact" className="text-lg font-semibold">
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px] lg:w-[500px] lg:grid-cols-2">
                  <Link href="#services" className="group grid h-auto w-full items-center justify-start gap-1 rounded-md p-4 hover:bg-accent">
                    <div className="font-medium group-hover:underline">Garage Door Repair</div>
                    <div className="text-sm text-muted-foreground">Professional repair services for all types of garage doors</div>
                  </Link>
                  <Link href="#services" className="group grid h-auto w-full items-center justify-start gap-1 rounded-md p-4 hover:bg-accent">
                    <div className="font-medium group-hover:underline">Installation</div>
                    <div className="text-sm text-muted-foreground">Expert installation of new garage doors and openers</div>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px] lg:w-[500px] lg:grid-cols-2">
                  <Link href="#products" className="group grid h-auto w-full items-center justify-start gap-1 rounded-md p-4 hover:bg-accent">
                    <div className="font-medium group-hover:underline">Garage Doors</div>
                    <div className="text-sm text-muted-foreground">Browse our selection of high-quality garage doors</div>
                  </Link>
                  <Link href="#products" className="group grid h-auto w-full items-center justify-start gap-1 rounded-md p-4 hover:bg-accent">
                    <div className="font-medium group-hover:underline">Openers</div>
                    <div className="text-sm text-muted-foreground">Explore our garage door opener options</div>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#contact" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">Contact</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex items-center space-x-4">
          <Button asChild variant="outline" size="sm" className="hidden sm:flex">
            <Link href="tel:469-909-0956">
              <Phone className="mr-2 h-4 w-4" />
              469-909-0956
            </Link>
          </Button>
          <Button asChild size="sm" className="bg-green-600 hover:bg-green-700">
            <Link href="#contact">Get Estimate</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
