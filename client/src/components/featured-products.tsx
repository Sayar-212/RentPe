import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/product-card";
import type { Product } from "@shared/schema";

export default function FeaturedProducts() {
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products/featured"],
  });

  if (isLoading) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trending Rentals</h2>
            <p className="text-gray-600 text-lg">Most popular items being rented right now</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden animate-pulse">
                <div className="w-full h-48 bg-gray-200"></div>
                <div className="p-4">
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-6 bg-gray-200 rounded mb-1"></div>
                  <div className="h-4 bg-gray-200 rounded mb-3"></div>
                  <div className="space-y-2 mb-4">
                    {[...Array(3)].map((_, j) => (
                      <div key={j} className="flex justify-between">
                        <div className="h-4 bg-gray-200 rounded w-16"></div>
                        <div className="h-4 bg-gray-200 rounded w-12"></div>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <div className="h-8 bg-gray-200 rounded flex-1"></div>
                    <div className="h-8 bg-gray-200 rounded w-20"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trending Rentals</h2>
          <p className="text-gray-600 text-lg">Most popular items being rented right now</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="secondary" className="px-8 py-3">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
