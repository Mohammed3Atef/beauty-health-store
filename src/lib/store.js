import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set, get) => ({
      // Cart
      cart: [],
      addToCart: (product, quantity = 1, variations) => {
        const { cart } = get();
        const existingItem = cart.find(
          (item) =>
            item.product.id === product.id &&
            JSON.stringify(item.selectedVariations) ===
              JSON.stringify(variations)
        );

        if (existingItem) {
          set({
            cart: cart.map((item) =>
              item === existingItem
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          });
        } else {
          set({
            cart: [
              ...cart,
              { product, quantity, selectedVariations: variations },
            ],
          });
        }
      },
      removeFromCart: (productId) => {
        const { cart } = get();
        set({
          cart: cart.filter((item) => item.product.id !== productId),
        });
      },
      updateCartItemQuantity: (productId, quantity) => {
        const { cart } = get();
        set({
          cart: cart
            .map((item) =>
              item.product.id === productId
                ? { ...item, quantity: Math.max(0, quantity) }
                : item
            )
            .filter((item) => item.quantity > 0),
        });
      },
      clearCart: () => set({ cart: [] }),
      getCartTotal: () => {
        const { cart } = get();
        return cart.reduce((total, item) => {
          const price = item.product.originalPrice || item.product.price;
          return total + price * item.quantity;
        }, 0);
      },
      getCartItemCount: () => {
        const { cart } = get();
        return cart.reduce((count, item) => count + item.quantity, 0);
      },

      // Wishlist
      wishlist: [],
      addToWishlist: (product) => {
        const { wishlist } = get();
        if (!wishlist.find((item) => item.product.id === product.id)) {
          set({
            wishlist: [
              ...wishlist,
              { product, addedAt: new Date().toISOString() },
            ],
          });
        }
      },
      removeFromWishlist: (productId) => {
        const { wishlist } = get();
        set({
          wishlist: wishlist.filter((item) => item.product.id !== productId),
        });
      },
      clearWishlist: () => set({ wishlist: [] }),
      isInWishlist: (productId) => {
        const { wishlist } = get();
        return wishlist.some((item) => item.product.id === productId);
      },

      // Coupons
      appliedCoupon: null,
      applyCoupon: (code) => {
        // Mock coupon validation - in real app, this would check against backend
        const mockCoupons = [
          {
            code: "SAVE20",
            discountType: "percentage",
            discountValue: 20,
            minPurchase: 50,
            validUntil: "2024-12-31",
            usedCount: 0,
          },
          {
            code: "FREESHIP",
            discountType: "fixed",
            discountValue: 10,
            minPurchase: 100,
            validUntil: "2024-12-31",
            usedCount: 0,
          },
        ];

        const coupon = mockCoupons.find((c) => c.code === code.toUpperCase());
        if (coupon) {
          set({ appliedCoupon: coupon });
          return true;
        }
        return false;
      },
      removeCoupon: () => set({ appliedCoupon: null }),
      getDiscountAmount: (subtotal) => {
        const { appliedCoupon } = get();
        if (!appliedCoupon) return 0;

        if (appliedCoupon.minPurchase && subtotal < appliedCoupon.minPurchase) {
          return 0;
        }

        if (appliedCoupon.discountType === "percentage") {
          const discount = (subtotal * appliedCoupon.discountValue) / 100;
          return appliedCoupon.maxDiscount
            ? Math.min(discount, appliedCoupon.maxDiscount)
            : discount;
        } else {
          return appliedCoupon.discountValue;
        }
      },

      // UI State
      isCartOpen: false,
      toggleCart: () => {
        const { isCartOpen } = get();
        set({ isCartOpen: !isCartOpen });
      },
      closeCart: () => set({ isCartOpen: false }),
    }),
    {
      name: "cosmetics-store",
      partialize: (state) => ({
        cart: state.cart,
        wishlist: state.wishlist,
        appliedCoupon: state.appliedCoupon,
      }),
    }
  )
);
