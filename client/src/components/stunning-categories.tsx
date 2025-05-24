import { useQuery } from "@tanstack/react-query";

export default function StunningCategories() {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["/api/categories"],
  });

  if (isLoading) {
    return (
      <section className="py-24 bg-black/95">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Explore Categories</h2>
            <p className="text-xl text-white/70">Loading amazing rental options...</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="glass-effect rounded-3xl p-8 animate-pulse">
                <div className="w-full h-48 bg-white/10 rounded-2xl mb-6"></div>
                <div className="h-6 bg-white/10 rounded mb-4"></div>
                <div className="h-4 bg-white/10 rounded mb-4"></div>
                <div className="h-4 bg-white/10 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const defaultCategories = [
    {
      id: 1,
      name: "Electronics",
      description: "Latest tech gadgets, laptops, cameras, and gaming gear",
      imageUrl: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      startingPrice: "15"
    },
    {
      id: 2,
      name: "Home & Living",
      description: "Furniture, appliances, and home improvement tools",
      imageUrl: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      startingPrice: "25"
    },
    {
      id: 3,
      name: "Outdoor Adventure",
      description: "Camping gear, sports equipment, and adventure tools",
      imageUrl: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      startingPrice: "20"
    },
    {
      id: 4,
      name: "Transportation",
      description: "Cars, bikes, scooters, and travel accessories",
      imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      startingPrice: "30"
    }
  ];

  const displayCategories = categories && categories.length > 0 ? categories : defaultCategories;

  return (
    <section id="categories" className="py-24 bg-black/95">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Explore <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Categories</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            From everyday essentials to luxury experiences - find exactly what you need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayCategories.map((category, index) => (
            <div 
              key={category.id}
              className="group relative glass-effect rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Background Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={category.imageUrl} 
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-white/70 text-sm mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-purple-400">
                      From ${category.startingPrice}/day
                    </span>
                    <svg className="w-6 h-6 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all" 
                         fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 glass-effect text-white rounded-2xl hover:bg-white/20 transition-all duration-300 text-lg font-semibold">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
}