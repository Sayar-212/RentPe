import { Shield, Truck, Clock, Headphones } from "lucide-react";

export default function TrustIndicators() {
  const indicators = [
    {
      icon: Shield,
      title: "Secure Rentals",
      description: "Protected by insurance"
    },
    {
      icon: Truck,
      title: "Free Delivery",
      description: "On rentals over $50"
    },
    {
      icon: Clock,
      title: "Flexible Duration",
      description: "Rent for any period"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Always here to help"
    }
  ];

  return (
    <section className="bg-white py-12 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {indicators.map((indicator, index) => {
            const Icon = indicator.icon;
            return (
              <div key={index}>
                <Icon className="h-8 w-8 text-rentpe-accent mb-4 mx-auto" />
                <h3 className="font-semibold text-gray-900">{indicator.title}</h3>
                <p className="text-gray-600 text-sm">{indicator.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
