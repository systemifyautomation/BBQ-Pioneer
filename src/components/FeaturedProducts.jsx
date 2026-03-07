import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  const featured = products.slice(0, 3);

  return (
    <section className="py-20 bg-coal-900" aria-label="Featured products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-fire-500 text-sm font-bold uppercase tracking-widest">
              Handpicked by Pitmasters
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider mt-1">
              FEATURED GRILLS
            </h2>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-fire-500 hover:text-fire-400 font-semibold transition-colors group text-sm uppercase tracking-wider"
          >
            View All Grills
            <FiArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
