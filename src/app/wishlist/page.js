"use client";

import { useStore } from "@/lib/store";
import ProductCard from "@/components/ProductCard";
import { Heart, Trash2 } from "lucide-react";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, clearWishlist } = useStore();

  const handleRemoveFromWishlist = (productId) => {
    removeFromWishlist(productId);
  };

  const handleClearWishlist = () => {
    if (confirm("Are you sure you want to clear your wishlist?")) {
      clearWishlist();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-8 h-8 text-red-500 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">My Wishlist</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Save your favorite products for later. Add items to your wishlist
            and come back to them anytime.
          </p>
        </div>

        {/* Wishlist Content */}
        {wishlist.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Heart className="mx-auto h-12 w-12" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Your wishlist is empty
            </h3>
            <p className="text-gray-500 mb-6">
              Start adding products to your wishlist by browsing our collection
            </p>
            <a
              href="/products"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Browse Products
            </a>
          </div>
        ) : (
          <div>
            {/* Actions */}
            <div className="flex justify-between items-center mb-8">
              <div className="text-gray-600">
                {wishlist.length} item{wishlist.length !== 1 ? "s" : ""} in your
                wishlist
              </div>
              <button
                onClick={handleClearWishlist}
                className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                <span>Clear All</span>
              </button>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wishlist.map((item) => (
                <div key={item.product.id} className="relative">
                  <ProductCard product={item.product} />
                  <button
                    onClick={() => handleRemoveFromWishlist(item.product.id)}
                    className="absolute top-2 right-2 z-20 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="mt-12 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Wishlist Summary
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600 mb-1">
                    {wishlist.length}
                  </div>
                  <div className="text-gray-600">Total Items</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600 mb-1">
                    $
                    {wishlist
                      .reduce((total, item) => total + item.product.price, 0)
                      .toFixed(2)}
                  </div>
                  <div className="text-gray-600">Total Value</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600 mb-1">
                    {
                      Array.from(
                        new Set(wishlist.map((item) => item.product.category))
                      ).length
                    }
                  </div>
                  <div className="text-gray-600">Categories</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
