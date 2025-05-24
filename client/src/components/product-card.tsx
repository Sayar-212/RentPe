import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import type { Product } from "@shared/schema";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [duration, setDuration] = useState("1-week");
  const [isLiked, setIsLiked] = useState(false);

  const getAvailabilityBadge = () => {
    if (!product.available) {
      return <Badge variant="destructive">Unavailable</Badge>;
    }
    if ((product.availableQuantity || 0) <= 2) {
      return <Badge className="bg-rentpe-warning text-white">{product.availableQuantity} Left</Badge>;
    }
    return <Badge className="bg-rentpe-success text-white">Available</Badge>;
  };

  const handleRentNow = () => {
    console.log(`Rent ${product.name} for ${duration}`);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
      <img 
        src={product.imageUrl} 
        alt={product.name} 
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          {getAvailabilityBadge()}
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
          >
            <Heart 
              className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-500'}`}
            />
          </Button>
        </div>
        
        <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{product.description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Daily:</span>
            <span className="font-semibold text-rentpe-primary">${product.dailyPrice}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Weekly:</span>
            <span className="font-semibold text-rentpe-primary">${product.weeklyPrice}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Monthly:</span>
            <span className="font-semibold text-rentpe-primary">${product.monthlyPrice}</span>
          </div>
        </div>

        <div className="flex gap-2">
          <Select value={duration} onValueChange={setDuration}>
            <SelectTrigger className="flex-1 h-8 text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-day">1 Day</SelectItem>
              <SelectItem value="3-days">3 Days</SelectItem>
              <SelectItem value="1-week">1 Week</SelectItem>
              <SelectItem value="2-weeks">2 Weeks</SelectItem>
              <SelectItem value="1-month">1 Month</SelectItem>
              <SelectItem value="custom">Custom</SelectItem>
            </SelectContent>
          </Select>
          <Button 
            onClick={handleRentNow}
            className="bg-rentpe-primary text-white px-4 h-8 text-sm hover:bg-rentpe-primary"
          >
            Rent Now
          </Button>
        </div>
      </div>
    </div>
  );
}
