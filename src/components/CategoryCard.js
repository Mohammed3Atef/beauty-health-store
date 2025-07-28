import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CategoryCard({ category }) {
  return (
    <Link
      href={`/categories/${category.id}`}
      className="group block bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
    >
      <div className="relative">
        <div className="aspect-video overflow-hidden">
          <Image
            src={category.image}
            alt={category.name}
            width={400}
            height={225}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
          <h3 className="text-xl font-bold mb-2 text-center">
            {category.name}
          </h3>
          <p className="text-sm text-center mb-4 opacity-90">
            {category.description}
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-sm">{category.productCount} products</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}
