import StunningHeader from "@/components/stunning-header";
import StunningHero from "@/components/stunning-hero";
import StunningCategories from "@/components/stunning-categories";
import StunningProducts from "@/components/stunning-products";
import AnimatedAccessories from "@/components/animated-accessories";
import FloatingElements from "@/components/floating-elements";

export default function StunningHome() {
  return (
    <div className="min-h-screen bg-black relative">
      <FloatingElements />
      <StunningHeader />
      <StunningHero />
      <StunningCategories />
      <AnimatedAccessories />
      <StunningProducts />
      
      {/* Modern Footer */}
      <footer className="py-16 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <span className="text-2xl font-bold">
                  <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Rent
                  </span>
                  <span className="text-white">Pe</span>
                </span>
              </div>
              <p className="text-white/70 text-lg mb-6 max-w-md">
                The future of ownership is access. Rent everything you need, when you need it, 
                without the commitment of buying.
              </p>
              <div className="flex space-x-4">
                {/* Social Icons */}
                <button className="w-10 h-10 glass-effect rounded-xl flex items-center justify-center text-white/70 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 glass-effect rounded-xl flex items-center justify-center text-white/70 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.219-.359-1.219c0-1.142.662-1.995 1.482-1.995.699 0 1.037.219 1.037 1.142 0 .696-.442 1.737-.669 2.699-.188.793.398 1.44 1.183 1.44 1.421 0 2.512-1.497 2.512-3.662 0-1.91-1.375-3.249-3.341-3.249-2.277 0-3.61 1.71-3.61 3.47 0 .688.263 1.425.592 1.826.065.078.074.147.055.228-.061.256-.196.798-.223.908-.035.146-.116.177-.268.107-1.002-.465-1.628-1.925-1.628-3.106 0-2.519 1.834-4.84 5.287-4.84 2.781 0 4.943 1.98 4.943 4.628 0 2.757-1.739 4.976-4.151 4.976-.81 0-1.573-.421-1.834-.924l-.498 1.902c-.181.695-.669 1.566-.995 2.097.751.233 1.547.357 2.372.357 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.012.001z.017 0z"/>
                  </svg>
                </button>
                <button className="w-10 h-10 glass-effect rounded-xl flex items-center justify-center text-white/70 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.2.3c6.6 0 11.9 5.3 11.9 11.9s-5.3 11.9-11.9 11.9S.3 18.8.3 12.2 5.6.3 12.2.3zm0 21.8c5.5 0 9.9-4.4 9.9-9.9s-4.4-9.9-9.9-9.9-9.9 4.4-9.9 9.9 4.4 9.9 9.9 9.9zM8.8 17.3l7.9-5.1-7.9-5.1v10.2z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <div className="space-y-3">
                <a href="#" className="block text-white/70 hover:text-white transition-colors">Browse</a>
                <a href="#" className="block text-white/70 hover:text-white transition-colors">List Items</a>
                <a href="#" className="block text-white/70 hover:text-white transition-colors">How it Works</a>
                <a href="#" className="block text-white/70 hover:text-white transition-colors">Pricing</a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <div className="space-y-3">
                <a href="#" className="block text-white/70 hover:text-white transition-colors">Help Center</a>
                <a href="#" className="block text-white/70 hover:text-white transition-colors">Safety</a>
                <a href="#" className="block text-white/70 hover:text-white transition-colors">Insurance</a>
                <a href="#" className="block text-white/70 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2024 RentPe. All rights reserved. Built for the future of access.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Privacy</a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Terms</a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}