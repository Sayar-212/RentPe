import { useState, useEffect } from "react";
import { signInWithGoogle, logOut, onAuthStateChanged, auth } from "../firebase.js";

export default function StunningHeader() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
  };

  return (
    <header className="relative z-50">
      {/* Glassmorphism Header */}
      <div className="fixed top-0 left-0 right-0 glass-effect backdrop-blur-xl border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo with Gradient */}
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-12 h-12 gradient-bg rounded-2xl flex items-center justify-center neon-glow">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-bold">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Rent
                </span>
                <span className="text-white">Pe</span>
              </div>
            </div>

            {/* Futuristic Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full group">
                <div className="absolute inset-0 gradient-bg rounded-2xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative flex items-center">
                  <svg className="absolute left-6 w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    className="w-full pl-16 pr-32 py-4 bg-black/20 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
                    placeholder="Search for anything to rent..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                  <button 
                    onClick={handleSearch}
                    className="absolute right-2 px-6 py-2 gradient-bg text-white rounded-xl hover:neon-glow transition-all font-medium"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation & Auth */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#categories" className="text-white/80 hover:text-white transition-colors font-medium">
                Categories
              </a>
              <a href="#how-it-works" className="text-white/80 hover:text-white transition-colors font-medium">
                How it Works
              </a>
              
              {loading ? (
                <div className="w-10 h-10 rounded-full bg-white/20 animate-pulse"></div>
              ) : user ? (
                <div className="flex items-center space-x-4">
                  <div className="relative group">
                    <button className="flex items-center space-x-3 p-2 rounded-xl hover:bg-white/10 transition-all">
                      <img 
                        src={user.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.displayName || user.email)}&background=8b5cf6&color=fff`}
                        alt={user.displayName || "User"}
                        className="w-10 h-10 rounded-full border-2 border-purple-400"
                      />
                      <div className="text-left">
                        <p className="text-white font-medium text-sm">{user.displayName || "User"}</p>
                        <p className="text-white/60 text-xs">{user.email}</p>
                      </div>
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div className="absolute right-0 top-full mt-2 w-64 glass-effect rounded-2xl border border-white/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      <div className="p-4 space-y-3">
                        <button className="w-full text-left px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all">
                          Profile Settings
                        </button>
                        <button className="w-full text-left px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all">
                          My Rentals
                        </button>
                        <button className="w-full text-left px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all">
                          Billing
                        </button>
                        <hr className="border-white/20" />
                        <button 
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-3 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl transition-all"
                        >
                          Sign Out
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={handleGoogleSignIn}
                    className="flex items-center space-x-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 rounded-xl text-white transition-all font-medium"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span>Sign In</span>
                  </button>
                  <button className="px-6 py-3 gradient-bg text-white rounded-xl hover:neon-glow transition-all font-medium">
                    Start Renting
                  </button>
                </div>
              )}
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden glass-effect border-t border-white/20">
            <div className="px-6 py-4 space-y-4">
              <div className="relative">
                <input
                  type="text"
                  className="w-full pl-12 pr-4 py-3 bg-black/20 backdrop-blur-xl border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div className="space-y-2">
                <a href="#categories" className="block py-3 text-white/80 hover:text-white transition-colors">Categories</a>
                <a href="#how-it-works" className="block py-3 text-white/80 hover:text-white transition-colors">How it Works</a>
                {!loading && !user && (
                  <button 
                    onClick={handleGoogleSignIn}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-3 gradient-bg text-white rounded-xl mt-4"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span>Sign In with Google</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}