import { useEffect, useState } from 'react';

const accessories = [
  {
    id: 1,
    name: "Gaming Headset",
    price: "$15/day",
    image: "🎧",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 2,
    name: "Smartwatch",
    price: "$12/day", 
    image: "⌚",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 3,
    name: "Wireless Earbuds",
    price: "$8/day",
    image: "🎵",
    gradient: "from-green-500 to-teal-500"
  },
  {
    id: 4,
    name: "VR Headset",
    price: "$25/day",
    image: "🥽",
    gradient: "from-red-500 to-orange-500"
  },
  {
    id: 5,
    name: "Action Camera",
    price: "$18/day",
    image: "📹",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    id: 6,
    name: "Fitness Tracker",
    price: "$10/day",
    image: "💪",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    price: "$14/day",
    image: "🔊",
    gradient: "from-pink-500 to-red-500"
  },
  {
    id: 8,
    name: "Phone Stand",
    price: "$5/day",
    image: "📱",
    gradient: "from-cyan-500 to-blue-500"
  }
];

export default function AnimatedAccessories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % accessories.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16 bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Popular Accessories
          </h2>
          <p className="text-xl text-gray-300">Trending tech accessories available for rent</p>
        </div>

        {/* Moving flashcards bar */}
        <div className="relative h-64 overflow-hidden">
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 320}px)`,
              width: `${accessories.length * 320}px`
            }}
          >
            {accessories.map((accessory, index) => (
              <div
                key={accessory.id}
                className={`w-80 h-56 mx-2 rounded-2xl bg-gradient-to-br ${accessory.gradient} p-1 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-purple-500/25 shimmer-effect glow-pulse`}
              >
                <div className="w-full h-full bg-black/20 backdrop-blur-sm rounded-2xl p-6 flex flex-col justify-between border border-white/10 floating-animation">
                  <div className="text-center">
                    <div className="text-6xl mb-4 filter drop-shadow-lg">
                      {accessory.image}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {accessory.name}
                    </h3>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-3">
                      {accessory.price}
                    </div>
                    <button className="w-full py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white font-semibold hover:bg-white/30 transition-all duration-300 border border-white/20">
                      Rent Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-purple-900/40 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-blue-900/40 to-transparent pointer-events-none"></div>
        </div>

        {/* Animated dots indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {accessories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-gradient-to-r from-purple-400 to-pink-400 scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}