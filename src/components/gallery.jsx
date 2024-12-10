"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

const services = [
  {
    title: "Openers",
    description: "Professional garage door opener installation and repair",
    image: "/openars.png",
  },
  {
    title: "Doors",
    description: "Wide selection of residential and commercial garage doors",
    image: "/door.png",
  },
  {
    title: "Springs",
    description: "Expert garage door spring repair and replacement",
    image: "/springs.png",
  },
  {
    title: "Screens",
    description: "Custom garage door screens and installation",
    image: "/screens.png",
  },
  {
    title: "Gates",
    description: "Automated gate systems and maintenance",
    image: "/gates.png",
  },
  {
    title: "Commercial Doors",
    description: "Commercial garage door solutions",
    image: "/commercial.png",
  },
  {
    title: "Parts",
    description: "Garage door parts solutions",
    image: "/parts.png",
  },
  {
    title: "Storage Units",
    description: "Storage Units for easy slide in and out of your tubs. Keep your garage door organized.",
    image: "/units.png",
  },
  {
    title: "Storage Bin Racks",
    description: "Storage Bin Racks for easy slide in and out of your tubs. Keep your garage door organized.",
    image: "/bins.png",
  },
];

export function Gallery() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">Explore our comprehensive range of garage door services</p>
          </div>
        </div>
        <div className="mt-16">
          <Carousel className="w-full">
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card>
                    <CardContent className="flex aspect-square flex-col p-6">
                      <div className="relative flex-1">
                        <Image src={service.image} alt={`Gallery image ${index + 1}`} width={600} height={400} className="object-cover rounded-lg" />
                      </div>
                      <div className="mt-4">
                        <h3 className="text-xl font-bold">{service.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{service.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
