export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating circles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full animate-bounce"></div>
      <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-gradient-to-r from-green-400/20 to-teal-400/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full animate-bounce"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-1/3 left-1/2 w-12 h-12 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rotate-45 animate-spin"></div>
      <div className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-gradient-to-r from-pink-400/20 to-red-400/20 rotate-12 animate-pulse"></div>
      
      {/* Animated lines */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent animate-pulse"></div>
      <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
    </div>
  );
}