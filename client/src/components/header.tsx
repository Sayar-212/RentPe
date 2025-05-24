import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, User, LogOut } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const { isAuthenticated, isLoading, user } = useAuth();

  const handleSearch = () => {
    console.log("Search for:", searchQuery);
  };

  const handleLogin = () => {
    window.location.href = "/api/login";
  };

  const handleLogout = () => {
    window.location.href = "/api/logout";
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-rentpe-secondary">
                Rent<span className="text-rentpe-primary">Pe</span>
              </span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Input
                type="text"
                className="w-full pl-12 pr-20 border-gray-300 focus:ring-2 focus:ring-rentpe-primary focus:border-transparent"
                placeholder="Search for rentals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Button 
                onClick={handleSearch}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-rentpe-primary text-white px-4 py-1 h-8 hover:bg-rentpe-primary"
              >
                Search
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#categories" className="text-gray-700 hover:text-rentpe-primary transition-colors">
              Categories
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-rentpe-primary transition-colors">
              How it Works
            </a>
            
            {isLoading ? (
              <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse"></div>
            ) : isAuthenticated && user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.profileImageUrl || undefined} alt={user.firstName || "User"} />
                      <AvatarFallback>
                        {user.firstName?.[0] || user.email?.[0] || "U"}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      {user.firstName && (
                        <p className="font-medium">{user.firstName} {user.lastName}</p>
                      )}
                      {user.email && (
                        <p className="w-[200px] truncate text-sm text-muted-foreground">
                          {user.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>My Rentals</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="ghost" onClick={handleLogin} className="text-gray-700 hover:text-rentpe-primary">
                  Sign In
                </Button>
                <Button className="bg-rentpe-primary text-white hover:bg-rentpe-primary" onClick={handleLogin}>
                  Start Renting
                </Button>
              </>
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6 text-gray-700" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
