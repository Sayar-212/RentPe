import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function StunningProducts() {
  const { data: products, isLoading } = useQuery({
    queryKey: ["/api/products/featured"],
  });

  const [selectedDuration, setSelectedDuration] = useState("weekly");

  if (isLoading) {
    return (
      <section className="py-24 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Featured Rentals</h2>
            <p className="text-xl text-white/70">Loading trending items...</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-effect rounded-3xl p-8 animate-pulse">
                <div className="w-full h-64 bg-white/10 rounded-2xl mb-6"></div>
                <div className="space-y-4">
                  <div className="h-6 bg-white/10 rounded"></div>
                  <div className="h-4 bg-white/10 rounded"></div>
                  <div className="h-12 bg-white/10 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const defaultProducts = [
    {
      id: 1,
      name: "MacBook Pro 16\" M3",
      description: "Latest Apple Silicon with 32GB RAM, perfect for creative work",
      imageUrl: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      dailyPrice: "45",
      weeklyPrice: "250",
      monthlyPrice: "900",
      available: true,
      availableQuantity: 3
    },
    {
      id: 2,
      name: "Canon EOS R5 Kit",
      description: "Professional mirrorless camera with 24-70mm lens",
      imageUrl: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      dailyPrice: "65",
      weeklyPrice: "350",
      monthlyPrice: "1200",
      available: true,
      availableQuantity: 2
    },
    {
      id: 3,
      name: "Tesla Model 3",
      description: "Electric luxury sedan with autopilot capabilities",
      imageUrl: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      dailyPrice: "120",
      weeklyPrice: "700",
      monthlyPrice: "2500",
      available: true,
      availableQuantity: 1
    }
  ];

  const displayProducts = products && products.length > 0 ? products : defaultProducts;

  const getPriceByDuration = (product, duration) => {
    switch(duration) {
      case 'daily': return product.dailyPrice;
      case 'weekly': return product.weeklyPrice;
      case 'monthly': return product.monthlyPrice;
      default: return product.weeklyPrice;
    }
  };

  const getDurationLabel = (duration) => {
    switch(duration) {
      case 'daily': return '/day';
      case 'weekly': return '/week';
      case 'monthly': return '/month';
      default: return '/week';
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Featured
            </span>{" "}
            Rentals
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Premium items available for instant rental. Quality guaranteed, delivered to your door.
          </p>
          
          {/* Duration Selector */}
          <div className="flex justify-center mb-12">
            <div className="glass-effect rounded-2xl p-2 flex space-x-2">
              {['daily', 'weekly', 'monthly'].map((duration) => (
                <button
                  key={duration}
                  onClick={() => setSelectedDuration(duration)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all ${
                    selectedDuration === duration
                      ? 'bg-white text-black'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {duration.charAt(0).toUpperCase() + duration.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProducts.map((product, index) => (
            <div 
              key={product.id}
              className="group relative glass-effect rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Availability Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  product.available 
                    ? 'bg-green-500/80 text-white' 
                    : 'bg-red-500/80 text-white'
                }`}>
                  {product.available ? `${product.availableQuantity} Available` : 'Unavailable'}
                </span>
              </div>

              {/* Favorite Button */}
              <button className="absolute top-4 right-4 z-10 w-10 h-10 glass-effect rounded-full flex items-center justify-center text-white/70 hover:text-red-400 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>

              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.imageUrl} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-white/70 text-sm mb-6">{product.description}</p>
                
                {/* Price Display */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-3xl font-bold text-white">
                      ${getPriceByDuration(product, selectedDuration)}
                    </span>
                    <span className="text-white/70 text-lg">
                      {getDurationLabel(selectedDuration)}
                    </span>
                  </div>
                  <div className="text-right text-sm text-white/50">
                    <div>Daily: ${product.dailyPrice}</div>
                    <div>Weekly: ${product.weeklyPrice}</div>
                    <div>Monthly: ${product.monthlyPrice}</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 py-3 gradient-bg text-white rounded-xl hover:neon-glow transition-all font-medium">
                    Rent Now
                  </button>
                  <button className="px-4 py-3 glass-effect text-white rounded-xl hover:bg-white/20 transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 gradient-bg text-white rounded-2xl hover:neon-glow transition-all duration-300 text-lg font-semibold">
            Explore All Products
          </button>
        </div>
      </div>
    </section>
  );
}