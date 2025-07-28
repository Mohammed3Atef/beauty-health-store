export const products = [
  // Skin Care Products
  {
    id: "1",
    name: "Hydrating Face Serum",
    description:
      "Advanced hydrating serum with hyaluronic acid and vitamin C for radiant, plump skin.",
    price: 29.99,
    originalPrice: 39.99,
    discountPercentage: 25,
    category: "Skin Care",
    subcategory: "Serums",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
    ],
    rating: 4.8,
    reviewCount: 1247,
    inStock: true,
    variations: [
      {
        id: "size",
        name: "Size",
        options: ["30ml", "50ml", "100ml"],
        selected: "50ml",
      },
    ],
    tags: ["hydrating", "vitamin-c", "hyaluronic-acid", "anti-aging"],
    featured: true,
    bestSeller: true,
  },
  {
    id: "2",
    name: "Gentle Foaming Cleanser",
    description:
      "pH-balanced foaming cleanser that removes impurities without stripping natural oils.",
    price: 18.99,
    category: "Skin Care",
    subcategory: "Cleansers",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop",
    ],
    rating: 4.6,
    reviewCount: 892,
    inStock: true,
    variations: [
      {
        id: "size",
        name: "Size",
        options: ["150ml", "300ml"],
        selected: "150ml",
      },
    ],
    tags: ["cleanser", "gentle", "foaming", "ph-balanced"],
    bestSeller: true,
  },
  {
    id: "3",
    name: "Retinol Night Cream",
    description:
      "Advanced anti-aging night cream with encapsulated retinol for visible results.",
    price: 45.99,
    originalPrice: 59.99,
    discountPercentage: 23,
    category: "Skin Care",
    subcategory: "Night Creams",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop",
    ],
    rating: 4.7,
    reviewCount: 567,
    inStock: true,
    variations: [
      {
        id: "size",
        name: "Size",
        options: ["30ml", "50ml"],
        selected: "30ml",
      },
    ],
    tags: ["retinol", "anti-aging", "night-cream", "wrinkle-reduction"],
    featured: true,
  },
  {
    id: "4",
    name: "SPF 50+ Sunscreen",
    description:
      "Broad-spectrum sunscreen with zinc oxide for maximum protection against UVA/UVB rays.",
    price: 24.99,
    category: "Skin Care",
    subcategory: "Sunscreen",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop",
    ],
    rating: 4.9,
    reviewCount: 2103,
    inStock: true,
    variations: [
      {
        id: "size",
        name: "Size",
        options: ["50ml", "100ml"],
        selected: "50ml",
      },
    ],
    tags: ["sunscreen", "spf50", "broad-spectrum", "zinc-oxide"],
    bestSeller: true,
  },
  {
    id: "5",
    name: "Vitamin C Brightening Toner",
    description:
      "Alcohol-free toner with vitamin C to brighten and even skin tone.",
    price: 22.99,
    category: "Skin Care",
    subcategory: "Toners",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop",
    ],
    rating: 4.5,
    reviewCount: 445,
    inStock: true,
    variations: [
      {
        id: "size",
        name: "Size",
        options: ["200ml", "400ml"],
        selected: "200ml",
      },
    ],
    tags: ["vitamin-c", "brightening", "toner", "alcohol-free"],
    newArrival: true,
  },

  // Makeup Products
  {
    id: "6",
    name: "Long-Wear Foundation",
    description:
      "24-hour long-wear foundation with buildable coverage and natural finish.",
    price: 34.99,
    originalPrice: 42.99,
    discountPercentage: 19,
    category: "Makeup",
    subcategory: "Foundation",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop",
    ],
    rating: 4.6,
    reviewCount: 1234,
    inStock: true,
    variations: [
      {
        id: "shade",
        name: "Shade",
        options: ["Porcelain", "Ivory", "Beige", "Golden", "Caramel", "Deep"],
        selected: "Beige",
      },
    ],
    tags: ["foundation", "long-wear", "buildable", "natural-finish"],
    featured: true,
  },
  {
    id: "7",
    name: "Matte Liquid Lipstick",
    description:
      "Transfer-proof matte lipstick with intense color payoff and comfortable wear.",
    price: 19.99,
    category: "Makeup",
    subcategory: "Lipstick",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop",
    ],
    rating: 4.8,
    reviewCount: 892,
    inStock: true,
    variations: [
      {
        id: "shade",
        name: "Shade",
        options: ["Nude", "Pink", "Red", "Berry", "Brown"],
        selected: "Red",
      },
    ],
    tags: ["lipstick", "matte", "transfer-proof", "long-lasting"],
    bestSeller: true,
  },
  {
    id: "8",
    name: "Volumizing Mascara",
    description:
      "Lengthening and volumizing mascara that creates dramatic lashes without clumping.",
    price: 24.99,
    category: "Makeup",
    subcategory: "Mascara",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop",
    ],
    rating: 4.7,
    reviewCount: 1567,
    inStock: true,
    variations: [
      {
        id: "shade",
        name: "Shade",
        options: ["Black", "Brown", "Blue"],
        selected: "Black",
      },
    ],
    tags: ["mascara", "volumizing", "lengthening", "dramatic"],
    bestSeller: true,
  },
  {
    id: "9",
    name: "Eyeshadow Palette",
    description:
      "18-pan eyeshadow palette with matte and shimmer finishes for endless looks.",
    price: 49.99,
    originalPrice: 65.99,
    discountPercentage: 24,
    category: "Makeup",
    subcategory: "Eyeshadow",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop",
    ],
    rating: 4.9,
    reviewCount: 2341,
    inStock: true,
    variations: [
      {
        id: "palette",
        name: "Palette",
        options: ["Nude", "Sunset", "Smokey", "Rainbow"],
        selected: "Nude",
      },
    ],
    tags: ["eyeshadow", "palette", "matte", "shimmer", "versatile"],
    featured: true,
  },
  {
    id: "10",
    name: "Concealer Stick",
    description:
      "Creamy concealer stick for spot coverage and under-eye brightening.",
    price: 16.99,
    category: "Makeup",
    subcategory: "Concealer",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop",
    ],
    rating: 4.5,
    reviewCount: 678,
    inStock: true,
    variations: [
      {
        id: "shade",
        name: "Shade",
        options: ["Light", "Medium", "Dark"],
        selected: "Medium",
      },
    ],
    tags: ["concealer", "stick", "creamy", "brightening"],
    newArrival: true,
  },

  // Medical Supplies
  {
    id: "11",
    name: "Digital Thermometer",
    description:
      "Fast and accurate digital thermometer with backlit display and fever alert.",
    price: 12.99,
    category: "Medical Supplies",
    subcategory: "Thermometers",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop",
    ],
    rating: 4.6,
    reviewCount: 445,
    inStock: true,
    variations: [
      {
        id: "color",
        name: "Color",
        options: ["White", "Blue", "Pink"],
        selected: "White",
      },
    ],
    tags: ["thermometer", "digital", "fever-alert", "backlit"],
    bestSeller: true,
  },
  {
    id: "12",
    name: "Blood Pressure Monitor",
    description:
      "Automatic blood pressure monitor with irregular heartbeat detection.",
    price: 89.99,
    originalPrice: 119.99,
    discountPercentage: 25,
    category: "Medical Supplies",
    subcategory: "Monitors",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop",
    ],
    rating: 4.8,
    reviewCount: 234,
    inStock: true,
    variations: [
      {
        id: "size",
        name: "Cuff Size",
        options: ["Standard", "Large", "Extra Large"],
        selected: "Standard",
      },
    ],
    tags: ["blood-pressure", "monitor", "automatic", "irregular-heartbeat"],
    featured: true,
  },
  {
    id: "13",
    name: "First Aid Kit",
    description:
      "Comprehensive first aid kit with bandages, antiseptics, and emergency supplies.",
    price: 29.99,
    category: "Medical Supplies",
    subcategory: "First Aid",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop",
    ],
    rating: 4.7,
    reviewCount: 156,
    inStock: true,
    variations: [
      {
        id: "size",
        name: "Size",
        options: ["Small", "Medium", "Large"],
        selected: "Medium",
      },
    ],
    tags: ["first-aid", "bandages", "antiseptics", "emergency"],
    bestSeller: true,
  },
  {
    id: "14",
    name: "Pulse Oximeter",
    description:
      "Finger pulse oximeter for measuring blood oxygen levels and heart rate.",
    price: 24.99,
    category: "Medical Supplies",
    subcategory: "Monitors",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop",
    ],
    rating: 4.5,
    reviewCount: 89,
    inStock: true,
    variations: [
      {
        id: "color",
        name: "Color",
        options: ["Black", "Blue", "White"],
        selected: "Black",
      },
    ],
    tags: ["pulse-oximeter", "blood-oxygen", "heart-rate", "finger"],
    newArrival: true,
  },
  {
    id: "15",
    name: "Glucose Monitor",
    description:
      "Accurate glucose monitoring system with test strips and lancets included.",
    price: 45.99,
    originalPrice: 59.99,
    discountPercentage: 23,
    category: "Medical Supplies",
    subcategory: "Diabetes Care",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop",
    ],
    rating: 4.6,
    reviewCount: 123,
    inStock: true,
    variations: [
      {
        id: "kit",
        name: "Kit",
        options: ["Basic", "Complete", "Travel"],
        selected: "Basic",
      },
    ],
    tags: ["glucose", "monitor", "diabetes", "test-strips"],
    featured: true,
  },
];

// Generate more products to reach 2000+
export const generateMoreProducts = () => {
  const categories = [
    "Skin Care",
    "Makeup",
    "Medical Supplies",
    "Hair Care",
    "Body Care",
    "Fragrances",
  ];
  const subcategories = {
    "Skin Care": [
      "Cleansers",
      "Toners",
      "Serums",
      "Moisturizers",
      "Sunscreen",
      "Masks",
      "Night Creams",
    ],
    Makeup: [
      "Foundation",
      "Concealer",
      "Powder",
      "Blush",
      "Bronzer",
      "Eyeshadow",
      "Eyeliner",
      "Mascara",
      "Lipstick",
      "Lip Gloss",
    ],
    "Medical Supplies": [
      "Thermometers",
      "Monitors",
      "First Aid",
      "Diabetes Care",
      "Respiratory",
      "Mobility",
    ],
    "Hair Care": [
      "Shampoo",
      "Conditioner",
      "Hair Masks",
      "Styling",
      "Hair Oils",
      "Hair Growth",
    ],
    "Body Care": [
      "Body Wash",
      "Body Lotion",
      "Hand Cream",
      "Foot Care",
      "Deodorant",
    ],
    Fragrances: ["Perfumes", "Body Sprays", "Essential Oils", "Candles"],
  };

  const additionalProducts = [];

  for (let i = 16; i <= 2000; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)];
    const subcategory =
      subcategories[category][
        Math.floor(Math.random() * subcategories[category].length)
      ];

    const hasDiscount = Math.random() > 0.7;
    const originalPrice = Math.floor(Math.random() * 100) + 10;
    const discountPercentage = hasDiscount
      ? Math.floor(Math.random() * 40) + 10
      : 0;
    const price = hasDiscount
      ? originalPrice * (1 - discountPercentage / 100)
      : originalPrice;

    additionalProducts.push({
      id: i.toString(),
      name: `Product ${i}`,
      description: `High-quality ${category.toLowerCase()} product for your daily needs.`,
      price: Math.round(price * 100) / 100,
      originalPrice: hasDiscount ? originalPrice : undefined,
      discountPercentage: hasDiscount ? discountPercentage : undefined,
      category,
      subcategory,
      images: [
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop",
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop",
      ],
      rating: Math.round((Math.random() * 2 + 3) * 10) / 10,
      reviewCount: Math.floor(Math.random() * 2000) + 10,
      inStock: Math.random() > 0.1,
      variations:
        Math.random() > 0.5
          ? [
              {
                id: "size",
                name: "Size",
                options: ["Small", "Medium", "Large"],
                selected: "Medium",
              },
            ]
          : undefined,
      tags: ["product", category.toLowerCase().replace(" ", "-")],
      featured: Math.random() > 0.95,
      bestSeller: Math.random() > 0.9,
      newArrival: Math.random() > 0.98,
    });
  }

  return additionalProducts;
};

export const allProducts = [...products, ...generateMoreProducts()];
