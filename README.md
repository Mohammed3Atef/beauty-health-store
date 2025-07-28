# Beauty & Health E-Commerce Store

A modern, frontend-only e-commerce website built with Next.js, TypeScript, and Tailwind CSS. This store specializes in cosmetics and healthcare products with over 2000 products.

## 🚀 Features

### Core Functionality

- **Home Page** - Featured products, categories, and promotional content
- **Categories Page** - Browse products by category
- **Products Listing Page** - Advanced filtering and search functionality
- **Product Details Page** - Image gallery, variations, reviews, and ratings
- **Offers Page** - Special discounts and promotional products
- **Customer Reviews Page** - Customer feedback and ratings
- **Cart Page** - Shopping cart with coupon functionality
- **Wishlist** - Save favorite products for later

### Product Features

- Product name, description, original price, discounted price
- Customer ratings (star-based) and text reviews
- Multiple images per product with image gallery
- Product variations (size, color, form)
- Quantity selector for each item
- Stock status indicators

### Shopping Features

- **Coupon System** - Apply promo codes (SAVE20, FREESHIP)
- **Smart Filters** - Price range, rating, category, availability
- **Wishlist** - Add/remove products from wishlist
- **Cart Management** - Add, remove, update quantities
- **Responsive Design** - Works on all devices

### Technical Features

- **State Management** - Zustand for global state
- **TypeScript** - Full type safety
- **Tailwind CSS** - Modern, responsive styling
- **Next.js App Router** - Latest Next.js features
- **Persistent Storage** - Cart and wishlist persist across sessions

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Icons**: Lucide React
- **Images**: Next.js Image Optimization

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd cosmetics-store
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── categories/        # Categories page
│   ├── products/          # Products listing page
│   ├── product/[id]/      # Product detail page
│   ├── offers/            # Offers page
│   ├── reviews/           # Reviews page
│   └── wishlist/          # Wishlist page
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── CartSidebar.tsx    # Shopping cart sidebar
│   ├── ProductCard.tsx    # Product card component
│   └── CategoryCard.tsx   # Category card component
├── data/                  # Static data
│   ├── products.ts        # Product data (2000+ products)
│   ├── categories.ts      # Category data
│   └── reviews.ts         # Review data
├── lib/                   # Utilities and configurations
│   └── store.ts          # Zustand store
└── types/                 # TypeScript type definitions
    └── index.ts          # Type definitions
```

## 🎨 Design Features

- **Modern UI** - Clean, professional design
- **Responsive** - Mobile-first approach
- **Accessible** - WCAG compliant
- **Fast Loading** - Optimized images and code splitting
- **Smooth Animations** - Hover effects and transitions

## 🛍 Shopping Experience

### Product Discovery

- Browse by categories
- Advanced search and filtering
- Featured products on homepage
- Best sellers and new arrivals

### Shopping Cart

- Add products with variations
- Quantity management
- Coupon code application
- Persistent cart state

### Wishlist

- Save products for later
- Quick add/remove functionality
- Wishlist summary

## 💳 Coupon Codes

For testing purposes, the following coupon codes are available:

- **SAVE20** - 20% off (minimum $50 purchase)
- **FREESHIP** - $10 off shipping (minimum $100 purchase)

## 📱 Responsive Design

The website is fully responsive and optimized for:

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:

- Primary: Purple gradient
- Secondary: Blue gradient
- Accent: Red for discounts

### Products

Add or modify products in `src/data/products.ts`

### Categories

Update categories in `src/data/categories.ts`

## 🚀 Deployment

The application can be deployed to:

- Vercel (recommended)
- Netlify
- Any static hosting service

## 📈 Future Enhancements

- Backend integration
- Payment gateway integration
- User authentication
- Order management
- Admin dashboard
- Real-time inventory
- Email notifications
- Advanced analytics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support or questions, please open an issue in the repository.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
