import { Link } from "react-router-dom";
import { FiShoppingCart, FiStar, FiEye } from "react-icons/fi";
import { useCart } from "../context/CartContext";

const badgeColors = {
  fire: "bg-fire-600 text-gray-900",
  green: "bg-emerald-500 text-gray-900",
  blue: "bg-blue-500 text-gray-900",
  purple: "bg-purple-500 text-gray-900",
};

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex text-amber-400" aria-label={`${rating} out of 5 stars`}>
        {[1, 2, 3, 4, 5].map((star) => (
          <FiStar
            key={star}
            size={13}
            className={star <= Math.round(rating) ? "fill-current" : ""}
          />
        ))}
      </div>
      <span className="text-gray-500 text-xs">({count.toLocaleString()})</span>
    </div>
  );
}

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <article className="group bg-gray-100 rounded-2xl overflow-hidden hover-lift border border-gray-300 hover:border-fire-600/50 transition-all duration-300">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3] bg-gray-200">
        <Link to={`/product/${product.slug}`} aria-label={`View ${product.name}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </Link>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link
            to={`/product/${product.slug}`}
            className="flex items-center gap-2 bg-white text-gray-900 font-semibold px-4 py-2 rounded-lg text-sm hover:bg-fire-500 hover:text-gray-900 transition-colors"
          >
            <FiEye size={15} />
            Quick View
          </Link>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.badge && (
            <span
              className={`text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide ${
                badgeColors[product.badgeColor] || badgeColors.fire
              }`}
            >
              {product.badge}
            </span>
          )}
          {discount > 0 && (
            <span className="bg-white/90 text-fire-500 text-xs font-bold px-2.5 py-1 rounded-full">
              -{discount}%
            </span>
          )}
        </div>

        {/* Stock warning */}
        {product.stockCount <= 10 && (
          <div className="absolute bottom-3 left-3 right-3">
            <p className="bg-white/90 text-fire-400 text-xs font-semibold px-3 py-1.5 rounded-lg text-center">
              🔥 Only {product.stockCount} left in stock
            </p>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-fire-600 text-xs font-semibold uppercase tracking-widest mb-1">
          {product.category}
        </p>
        <Link
          to={`/product/${product.slug}`}
          className="block font-bold text-gray-900 text-lg leading-tight mb-2 hover:text-fire-500 transition-colors line-clamp-2"
        >
          {product.name}
        </Link>

        <StarRating rating={product.rating} count={product.reviewCount} />

        {/* Price */}
        <div className="flex items-center gap-3 mt-3 mb-4">
          <span className="text-2xl font-extrabold text-gray-900">
            ${product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-gray-400 line-through text-sm font-medium">
              ${product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => addToCart(product)}
            disabled={!product.inStock}
            className="flex-1 flex items-center justify-center gap-2 fire-gradient text-gray-900 font-bold py-2.5 px-4 rounded-xl text-sm uppercase tracking-wide hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label={`Add ${product.name} to cart`}
          >
            <FiShoppingCart size={15} />
            Add to Cart
          </button>
          <Link
            to={`/product/${product.slug}`}
            className="px-4 py-2.5 rounded-xl border border-gray-400 hover:border-fire-600 text-gray-600 hover:text-fire-500 transition-all text-sm font-semibold"
          >
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}

export { StarRating };
