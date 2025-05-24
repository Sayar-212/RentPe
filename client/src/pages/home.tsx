import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import TrustIndicators from "@/components/trust-indicators";
import FeaturedCategories from "@/components/featured-categories";
import FeaturedProducts from "@/components/featured-products";
import HowItWorks from "@/components/how-it-works";
import Testimonials from "@/components/testimonials";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <TrustIndicators />
      <FeaturedCategories />
      <FeaturedProducts />
      <HowItWorks />
      <Testimonials />
      <CtaSection />
      <Footer />
    </div>
  );
}
