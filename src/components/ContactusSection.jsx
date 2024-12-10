import { Building2, Phone, Wrench } from "lucide-react";
import { ContactForm } from "./contact-form";

export default function ContactusSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get Your Free Estimate</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">Contact us today for a free consultation and estimate. Our team is ready to help you with all your garage door needs.</p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <div className="grid gap-4">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-green-600" />
                  <span className="text-sm">469-909-0956</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Dallas-Fort Worth Area</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wrench className="h-4 w-4 text-green-600" />
                  <span className="text-sm">24/7 Emergency Service</span>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
