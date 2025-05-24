import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-rentpe-secondary to-gray-800 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800" 
          alt="Modern city technology background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Rent Everything<br />
            <span className="text-rentpe-primary">You Need</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Access thousands of products without the commitment. From tech gadgets to home appliances - rent for days, weeks, or months.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-rentpe-primary text-white px-8 py-4 text-lg font-semibold hover:bg-rentpe-primary h-auto">
              Explore Rentals
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-rentpe-secondary h-auto"
            >
              List Your Items
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
