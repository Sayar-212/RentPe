export default function StunningHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 gradient-bg"></div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-animation absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="floating-animation absolute top-40 right-20 w-48 h-48 bg-purple-400/20 rounded-full blur-2xl" style={{animationDelay: '2s'}}></div>
        <div className="floating-animation absolute bottom-40 left-20 w-64 h-64 bg-blue-400/15 rounded-full blur-3xl" style={{animationDelay: '4s'}}></div>
        <div className="floating-animation absolute bottom-20 right-10 w-40 h-40 bg-pink-400/20 rounded-full blur-xl" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
        <div className="space-y-8">
          {/* Main Headline */}
          <div className="stagger-animation">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-tight">
              <span className="block">Rent</span>
              <span className="block bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Everything
              </span>
              <span className="block text-5xl md:text-7xl lg:text-8xl text-white/90">
                You Need
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="stagger-animation" style={{animationDelay: '0.2s'}}>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Skip the purchase, embrace the experience. From cutting-edge tech to everyday essentials - 
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text font-semibold"> access everything instantly</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="stagger-animation flex flex-col sm:flex-row gap-6 justify-center pt-8" style={{animationDelay: '0.4s'}}>
            <button className="group relative px-12 py-6 bg-white text-black rounded-2xl font-bold text-xl hover:scale-105 transition-all duration-300 neon-glow">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
              <span className="relative">Start Exploring</span>
            </button>
            
            <button className="px-12 py-6 glass-effect text-white rounded-2xl font-bold text-xl hover:scale-105 hover:bg-white/20 transition-all duration-300">
              How It Works
            </button>
          </div>

          {/* Stats */}
          <div className="stagger-animation grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto" style={{animationDelay: '0.6s'}}>
            <div className="glass-effect p-8 rounded-2xl text-center">
              <div className="text-4xl font-bold text-white mb-2">10K+</div>
              <div className="text-white/60">Products Available</div>
            </div>
            <div className="glass-effect p-8 rounded-2xl text-center">
              <div className="text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-white/60">Happy Renters</div>
            </div>
            <div className="glass-effect p-8 rounded-2xl text-center">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-white/60">Cities Covered</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}