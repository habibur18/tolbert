import { Clock, PenTool, Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export default function FeatureSection() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <Clock className="mb-4 h-12 w-12 text-green-600" />
              <h3 className="mb-2 text-xl font-bold">24/7 Service</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Emergency repairs available around the clock</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <Star className="mb-4 h-12 w-12 text-green-600" />
              <h3 className="mb-2 text-xl font-bold">5-Star Service</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Consistently rated 5 stars by our satisfied customers</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center p-6 text-center">
              <PenTool className="mb-4 h-12 w-12 text-green-600" />
              <h3 className="mb-2 text-xl font-bold">Expert Team</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Licensed and insured professional technicians</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
