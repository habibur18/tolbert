import { Card, CardContent } from "./ui/card";

export default function TestimonialSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say about our services.</p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 md:gap-8 mt-8">
          {[
            {
              quote: "Tolbert Garage Door provided exceptional service. They were prompt, professional, and fixed our garage door quickly. Highly recommended!",
              author: "John D.",
              location: "Dallas, TX",
            },
            {
              quote: "I've been using Tolbert for years, and they never disappoint. Their team is knowledgeable, friendly, and always goes above and beyond.",
              author: "Sarah M.",
              location: "Fort Worth, TX",
            },
          ].map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex flex-col space-y-4">
                  <p className="text-gray-500 italic">&quot;{testimonial.quote}&quot;</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
