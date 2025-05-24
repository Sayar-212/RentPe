import { Search, Calendar, Truck } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "1. Browse & Select",
      description: "Search through thousands of products and choose your rental duration"
    },
    {
      icon: Calendar,
      title: "2. Book & Pay",
      description: "Secure your rental with instant booking and flexible payment options"
    },
    {
      icon: Truck,
      title: "3. Delivered & Enjoy",
      description: "We deliver to your doorstep and pick up when you're done"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How RentPe Works</h2>
          <p className="text-gray-600 text-lg">Renting made simple in just a few steps</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-rentpe-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
