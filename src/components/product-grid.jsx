"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const products = [
  {
    title: "LiftMaster 8500W",
    description: "Wall Mount Garage Door Opener",
    price: "$499",
    image: "/wall.png",
  },
  {
    title: "Smart Openers",
    description: "Steel Garage Door with Windows",
    price: "$1,299",
    image: "/SmartOpeners.png",
  },
  {
    title: "Belt Openers",
    description: "Belt Drive Garage Door Opener",
    price: "$2,299",
    image: "/Belt Openers.png",
  },
  {
    title: "Chain Drive Openers",
    description: "Wood Look Garage Door",
    price: "$2,199",
    image: "/Chain Drive Openers.png",
  },
];

export function ProductGrid() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Products</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">Discover our selection of top-rated garage door products</p>
          </div>
        </div>
        <div className="grid gap-6 mt-16 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image src={product.image} alt={product.title} fill className="object-cover" />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle>{product.title}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
                <p className="mt-2 font-bold">{product.price}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="#contact">Get Quote</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
