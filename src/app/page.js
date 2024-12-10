import AboutusSection from "@/components/AboutusSection";
import ContactusSection from "@/components/ContactusSection";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import { Gallery } from "@/components/gallery";
import { Header } from "@/components/header";
import HeroSection from "@/components/HeroSection";
import { ProductGrid } from "@/components/product-grid";
import { RandomImageGallery } from "@/components/random-image-gallery";
import TestimonialSection from "@/components/TestimonialSection";
import { VideoSection } from "@/components/video-section";

export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen flex-col">
        <Header />
        <HeroSection />
        <FeatureSection />
        <AboutusSection />
        <Gallery />
        <VideoSection />
        <ProductGrid />
        <RandomImageGallery />
        <TestimonialSection />
        <ContactusSection />
      </div>
      <Footer />
    </main>
  );
}
