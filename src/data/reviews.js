export const reviews = [
  {
    id: "1",
    productId: "1",
    userId: "user1",
    userName: "Sarah M.",
    rating: 5,
    comment:
      "This serum is absolutely amazing! My skin feels so hydrated and plump. I can see a noticeable difference in just a week of use.",
    date: "2024-01-15",
    helpful: 24,
  },
  {
    id: "2",
    productId: "1",
    userId: "user2",
    userName: "Jennifer L.",
    rating: 4,
    comment:
      "Great product, really helps with hydration. The texture is nice and it absorbs quickly. Would definitely recommend!",
    date: "2024-01-10",
    helpful: 18,
  },
  {
    id: "3",
    productId: "1",
    userId: "user3",
    userName: "Maria K.",
    rating: 5,
    comment:
      "I've been using this for 3 months now and my skin has never looked better. The hyaluronic acid really works wonders!",
    date: "2024-01-05",
    helpful: 31,
  },
  {
    id: "4",
    productId: "2",
    userId: "user4",
    userName: "Emma R.",
    rating: 4,
    comment:
      "Gentle but effective cleanser. Doesn't strip my skin and leaves it feeling clean and soft.",
    date: "2024-01-12",
    helpful: 15,
  },
  {
    id: "5",
    productId: "2",
    userId: "user5",
    userName: "Lisa T.",
    rating: 5,
    comment:
      "Perfect for my sensitive skin. No irritation and it removes all my makeup effectively.",
    date: "2024-01-08",
    helpful: 22,
  },
  {
    id: "6",
    productId: "3",
    userId: "user6",
    userName: "Amanda P.",
    rating: 4,
    comment:
      "Great retinol product. I started with this and it's been gentle on my skin while showing results.",
    date: "2024-01-14",
    helpful: 19,
  },
  {
    id: "7",
    productId: "4",
    userId: "user7",
    userName: "Rachel S.",
    rating: 5,
    comment:
      "Best sunscreen I've ever used! No white cast and it feels like a moisturizer. Perfect for daily use.",
    date: "2024-01-11",
    helpful: 28,
  },
  {
    id: "8",
    productId: "6",
    userId: "user8",
    userName: "Jessica M.",
    rating: 4,
    comment:
      "Long-lasting foundation that doesn't feel heavy. Great coverage and natural finish.",
    date: "2024-01-13",
    helpful: 16,
  },
  {
    id: "9",
    productId: "7",
    userId: "user9",
    userName: "Nicole L.",
    rating: 5,
    comment:
      "This lipstick is incredible! Stays on all day without drying out my lips. The color is vibrant and beautiful.",
    date: "2024-01-09",
    helpful: 25,
  },
  {
    id: "10",
    productId: "8",
    userId: "user10",
    userName: "Ashley K.",
    rating: 4,
    comment:
      "Great mascara that gives volume without clumping. Easy to apply and remove.",
    date: "2024-01-07",
    helpful: 14,
  },
  {
    id: "11",
    productId: "9",
    userId: "user11",
    userName: "Brittany R.",
    rating: 5,
    comment:
      "Amazing palette! The colors are pigmented and blend beautifully. Perfect for both everyday and glam looks.",
    date: "2024-01-16",
    helpful: 33,
  },
  {
    id: "12",
    productId: "11",
    userId: "user12",
    userName: "Michelle T.",
    rating: 4,
    comment:
      "Accurate and fast thermometer. The backlit display is helpful and the fever alert is a nice feature.",
    date: "2024-01-12",
    helpful: 11,
  },
  {
    id: "13",
    productId: "12",
    userId: "user13",
    userName: "Patricia M.",
    rating: 5,
    comment:
      "Excellent blood pressure monitor. Easy to use and very accurate. The irregular heartbeat detection is reassuring.",
    date: "2024-01-10",
    helpful: 8,
  },
  {
    id: "14",
    productId: "13",
    userId: "user14",
    userName: "Nancy L.",
    rating: 4,
    comment:
      "Comprehensive first aid kit with everything you need. Well organized and good quality supplies.",
    date: "2024-01-08",
    helpful: 6,
  },
  {
    id: "15",
    productId: "14",
    userId: "user15",
    userName: "Helen K.",
    rating: 4,
    comment:
      "Reliable pulse oximeter. Easy to use and gives consistent readings. Perfect for monitoring oxygen levels.",
    date: "2024-01-06",
    helpful: 4,
  },
];

// Generate more reviews for other products
export const generateMoreReviews = () => {
  const additionalReviews = [];
  const userNames = [
    "Alex Johnson",
    "Taylor Smith",
    "Jordan Lee",
    "Casey Brown",
    "Morgan Davis",
    "Riley Wilson",
    "Quinn Miller",
    "Avery Garcia",
    "Parker Rodriguez",
    "Drew Martinez",
  ];

  for (let i = 16; i <= 500; i++) {
    const productId = Math.floor(Math.random() * 2000) + 1;
    const rating = Math.floor(Math.random() * 2) + 4; // 4-5 stars
    const userName = userNames[Math.floor(Math.random() * userNames.length)];

    const comments = [
      "Great product, highly recommend!",
      "Excellent quality and fast shipping.",
      "This exceeded my expectations.",
      "Perfect for my needs.",
      "High-quality product, worth the price.",
      "Amazing results, will buy again.",
      "Very satisfied with this purchase.",
      "Great value for money.",
      "Exactly what I was looking for.",
      "Outstanding product quality.",
    ];

    additionalReviews.push({
      id: i.toString(),
      productId: productId.toString(),
      userId: `user${i}`,
      userName,
      rating,
      comment: comments[Math.floor(Math.random() * comments.length)],
      date: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0],
      helpful: Math.floor(Math.random() * 20),
    });
  }

  return additionalReviews;
};

export const allReviews = [...reviews, ...generateMoreReviews()];
