import { allProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Tag, Percent } from "lucide-react";

export default function OffersPage() {
  const discountedProducts = allProducts.filter(
    (product) => product.discountPercentage
  );
  const featuredOffers = discountedProducts.slice(0, 8);
  const allOffers = discountedProducts;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Tag className="w-8 h-8 text-primary-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Special Offers</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover amazing deals and discounts on premium beauty and health
            products. Limited time offers with incredible savings.
          </p>
        </div>

        {/* Featured Offers */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg p-8 text-white mb-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Featured Offers</h2>
              <p className="text-xl opacity-90">
                Up to{" "}
                {Math.max(
                  ...discountedProducts.map((p) => p.discountPercentage || 0)
                )}
                % off on selected items
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredOffers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* All Offers */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">All Offers</h2>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Percent className="w-4 h-4" />
              <span>{discountedProducts.length} products on sale</span>
            </div>
          </div>

          {allOffers.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Tag className="mx-auto h-12 w-12" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No offers available
              </h3>
              <p className="text-gray-500">
                Check back later for new deals and promotions.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {allOffers.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>

        {/* Promotional Banner */}
        <section className="mt-16">
          <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-lg p-8 text-white">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Flash Sale!</h2>
              <p className="text-xl mb-6 opacity-90">
                Limited time offer - Extra 10% off on orders over $50
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Shop Now
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
