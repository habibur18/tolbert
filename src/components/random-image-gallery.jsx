"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const images = ["/1.png", "/2.png", "/3.png", "/4.png", "/5.png", "/6.png"];

export function RandomImageGallery() {
  const [shuffledImages, setShuffledImages] = useState(images);

  useEffect(() => {
    setShuffledImages([...images].sort(() => Math.random() - 0.5));
  }, []);

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Work</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">Take a look at some of our recent projects and installations</p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl mt-8">
          <Carousel>
            <CarouselContent>
              {shuffledImages.map((src, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Image src={src} alt={`Gallery image ${index + 1}`} width={600} height={400} className="rounded-lg object-cover" />
                  </div>
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
