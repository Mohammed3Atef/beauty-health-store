"use client";

import { useState } from "react";
import { X, Trash2, Plus, Minus, Tag } from "lucide-react";
import { useStore } from "@/lib/store";

export default function CartSidebar() {
  const [couponCode, setCouponCode] = useState("");
  const [couponMessage, setCouponMessage] = useState("");
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateCartItemQuantity,
    clearCart,
    getCartTotal,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    getDiscountAmount,
  } = useStore();

  const subtotal = getCartTotal();
  const discount = getDiscountAmount(subtotal);
  const total = subtotal - discount;

  const handleApplyCoupon = () => {
    if (couponCode.trim()) {
      const success = applyCoupon(couponCode);
      if (success) {
        setCouponMessage("Coupon applied successfully!");
        setCouponCode("");
      } else {
        setCouponMessage("Invalid coupon code");
      }
    }
  };

  const handleRemoveCoupon = () => {
    removeCoupon();
    setCouponMessage("");
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={closeCart}
        />

        <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
          <div className="w-screen max-w-md">
            <div className="h-full flex flex-col bg-white shadow-xl">
              {/* Header */}
              <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                <div className="flex items-start justify-between">
                  <h2 className="text-lg font-medium text-gray-900">
                    Shopping Cart
                  </h2>
                  <button
                    onClick={closeCart}
                    className="ml-3 h-7 flex items-center"
                  >
                    <X className="h-6 w-6 text-gray-400 hover:text-gray-500" />
                  </button>
                </div>

                {cart.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="text-gray-400 mb-4">
                      <svg
                        className="mx-auto h-12 w-12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-500">Your cart is empty</p>
                    <p className="text-sm text-gray-400 mt-1">
                      Add some products to get started
                    </p>
                  </div>
                ) : (
                  <div className="mt-8">
                    <div className="flow-root">
                      <ul className="-my-6 divide-y divide-gray-200">
                        {cart.map((item) => (
                          <li
                            key={`${item.product.id}-${JSON.stringify(
                              item.selectedVariations
                            )}`}
                            className="py-6 flex"
                          >
                            <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                              <img
                                src={item.product.images[0]}
                                alt={item.product.name}
                                className="w-full h-full object-center object-cover"
                              />
                            </div>

                            <div className="ml-4 flex-1 flex flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>{item.product.name}</h3>
                                  <p className="ml-4">
                                    $
                                    {(
                                      (item.product.originalPrice ||
                                        item.product.price) * item.quantity
                                    ).toFixed(2)}
                                  </p>
                                </div>
                                {item.product.originalPrice && (
                                  <p className="text-sm text-gray-500 line-through">
                                    $
                                    {(
                                      item.product.originalPrice * item.quantity
                                    ).toFixed(2)}
                                  </p>
                                )}
                                {item.selectedVariations &&
                                  Object.keys(item.selectedVariations).length >
                                    0 && (
                                    <div className="text-sm text-gray-500 mt-1">
                                      {Object.entries(
                                        item.selectedVariations
                                      ).map(([key, value]) => (
                                        <span key={key} className="block">
                                          {key}: {value}
                                        </span>
                                      ))}
                                    </div>
                                  )}
                              </div>
                              <div className="flex-1 flex items-end justify-between text-sm">
                                <div className="flex items-center space-x-2">
                                  <button
                                    onClick={() =>
                                      updateCartItemQuantity(
                                        item.product.id,
                                        item.quantity - 1
                                      )
                                    }
                                    className="p-1 rounded-full hover:bg-gray-100"
                                  >
                                    <Minus className="w-4 h-4" />
                                  </button>
                                  <span className="w-8 text-center">
                                    {item.quantity}
                                  </span>
                                  <button
                                    onClick={() =>
                                      updateCartItemQuantity(
                                        item.product.id,
                                        item.quantity + 1
                                      )
                                    }
                                    className="p-1 rounded-full hover:bg-gray-100"
                                  >
                                    <Plus className="w-4 h-4" />
                                  </button>
                                </div>

                                <button
                                  onClick={() =>
                                    removeFromCart(item.product.id)
                                  }
                                  className="text-gray-400 hover:text-gray-500"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* Coupon Section */}
              {cart.length > 0 && (
                <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="coupon"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Coupon Code
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          id="coupon"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          className="flex-1 min-w-0 block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                          placeholder="Enter coupon code"
                        />
                        <button
                          onClick={handleApplyCoupon}
                          className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                        >
                          Apply
                        </button>
                      </div>
                      {couponMessage && (
                        <p
                          className={`mt-2 text-sm ${
                            couponMessage.includes("successfully")
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {couponMessage}
                        </p>
                      )}
                    </div>

                    {appliedCoupon && (
                      <div className="bg-green-50 border border-green-200 rounded-md p-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Tag className="w-4 h-4 text-green-600 mr-2" />
                            <span className="text-sm font-medium text-green-800">
                              {appliedCoupon.code} -{" "}
                              {appliedCoupon.discountType === "percentage"
                                ? `${appliedCoupon.discountValue}% off`
                                : `$${appliedCoupon.discountValue} off`}
                            </span>
                          </div>
                          <button
                            onClick={handleRemoveCoupon}
                            className="text-green-600 hover:text-green-800"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Order Summary */}
              {cart.length > 0 && (
                <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                  <div className="space-y-4">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>${subtotal.toFixed(2)}</p>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-sm text-green-600">
                        <p>Discount</p>
                        <p>-${discount.toFixed(2)}</p>
                      </div>
                    )}
                    <div className="flex justify-between text-lg font-medium text-gray-900">
                      <p>Total</p>
                      <p>${total.toFixed(2)}</p>
                    </div>
                    <p className="text-sm text-gray-500">
                      Shipping and taxes will be calculated at checkout.
                    </p>
                  </div>

                  <div className="mt-6 space-y-3">
                    <button className="w-full bg-primary-600 border border-transparent rounded-md py-3 px-4 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                      Checkout
                    </button>
                    <button
                      onClick={clearCart}
                      className="w-full bg-gray-200 border border-transparent rounded-md py-3 px-4 text-base font-medium text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    >
                      Clear Cart
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
