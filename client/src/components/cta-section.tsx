import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-rentpe-primary to-orange-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Renting?</h2>
        <p className="text-xl mb-8 opacity-90">Join thousands of smart renters and access everything you need</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-rentpe-primary px-8 py-4 text-lg font-semibold hover:bg-gray-100 h-auto">
            Browse Products
          </Button>
          <Button 
            variant="outline" 
            className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-rentpe-primary h-auto"
          >
            List Your Items
          </Button>
        </div>
      </div>
    </section>
  );
}
