import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import SEO from "../components/SEO";
import { StarRating } from "../components/ProductCard";
import ProductCard from "../components/ProductCard";
import { getProductBySlug, getRelatedProducts } from "../data/products";
import { useCart } from "../context/CartContext";
import {
  FiShoppingCart,
  FiHeart,
  FiShare2,
  FiCheck,
  FiTruck,
  FiShield,
  FiArrowLeft,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

function AccordionItem({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-coal-700">
      <button
        className="w-full flex justify-between items-center py-4 text-left text-white font-semibold hover:text-fire-500 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {title}
        {open ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
      </button>
      {open && (
        <div className="pb-4 text-coal-300 text-sm leading-relaxed">
          {children}
        </div>
      )}
    </div>
  );
}

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <p className="font-display text-5xl text-white tracking-wider mb-4">
          PRODUCT NOT FOUND
        </p>
        <Link
          to="/shop"
          className="fire-gradient text-white font-bold px-6 py-3 rounded-xl uppercase tracking-wide text-sm hover:opacity-90 transition-opacity"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  const related = getRelatedProducts(product, 3);

  const handleAddToCart = () => {
    addToCart(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const productStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "sku": product.sku,
    "brand": {
      "@type": "Brand",
      "name": product.brand,
    },
    "image": product.images,
    "offers": {
      "@type": "Offer",
      "url": `https://bbqpioneer.com/product/${product.slug}`,
      "priceCurrency": "USD",
      "price": product.price,
      "availability": product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      "seller": {
        "@type": "Organization",
        "name": "BBQ Pioneer",
      },
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": product.reviewCount,
      "bestRating": 5,
    },
  };

  return (
    <>
      <SEO
        title={product.name}
        description={product.description.slice(0, 160)}
        canonical={`/product/${product.slug}`}
        image={product.images[0]}
        type="product"
        structuredData={productStructuredData}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-coal-400 mb-8" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-fire-500 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-fire-500 transition-colors">
            Shop
          </Link>
          <span>/</span>
          <Link
            to={`/shop?category=${encodeURIComponent(product.category)}`}
            className="hover:text-fire-500 transition-colors"
          >
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-coal-200 truncate">{product.name}</span>
        </nav>

        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-coal-400 hover:text-fire-500 transition-colors text-sm mb-6 group"
        >
          <FiArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back
        </button>

        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Images */}
          <div>
            <div className="relative rounded-2xl overflow-hidden bg-coal-700 mb-4 aspect-[4/3]">
              <img
                src={product.images[activeImg]}
                alt={`${product.name} - view ${activeImg + 1}`}
                className="w-full h-full object-cover"
              />
              {discount > 0 && (
                <div className="absolute top-4 left-4 bg-fire-600 text-white font-bold px-3 py-1.5 rounded-full text-sm">
                  -{discount}%
                </div>
              )}
            </div>
            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`w-20 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                      i === activeImg
                        ? "border-fire-600"
                        : "border-coal-600 hover:border-coal-400"
                    }`}
                    aria-label={`View image ${i + 1}`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} thumbnail ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            {/* Category & badge */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-fire-500 text-xs font-bold uppercase tracking-widest">
                {product.category}
              </span>
              {product.badge && (
                <span className="bg-fire-600 text-white text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide">
                  {product.badge}
                </span>
              )}
            </div>

            <h1 className="font-display text-4xl md:text-5xl text-white tracking-wide leading-tight mb-4">
              {product.name.toUpperCase()}
            </h1>

            {/* Rating */}
            <div className="mb-4">
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-4xl font-extrabold text-white">
                ${product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-coal-500 line-through">
                    ${product.originalPrice.toLocaleString()}
                  </span>
                  <span className="text-fire-500 font-bold text-lg">
                    Save ${(product.originalPrice - product.price).toLocaleString()}
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-coal-300 text-base leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Stock */}
            {product.stockCount <= 10 && (
              <div className="flex items-center gap-2 mb-5 bg-fire-600/10 border border-fire-600/20 rounded-xl px-4 py-3">
                <span className="w-2 h-2 bg-fire-500 rounded-full animate-pulse" />
                <span className="text-fire-400 text-sm font-semibold">
                  Only {product.stockCount} left in stock — order soon!
                </span>
              </div>
            )}

            {/* Qty + Add to cart */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              {/* Qty selector */}
              <div className="flex items-center bg-coal-700 rounded-xl border border-coal-600">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-12 h-12 flex items-center justify-center text-white hover:text-fire-500 transition-colors"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="w-10 text-center text-white font-bold">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="w-12 h-12 flex items-center justify-center text-white hover:text-fire-500 transition-colors"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`flex-1 flex items-center justify-center gap-2 font-bold py-3.5 px-6 rounded-xl text-sm uppercase tracking-wider transition-all ${
                  added
                    ? "bg-emerald-500 text-white"
                    : "fire-gradient text-white hover:opacity-90 fire-glow"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {added ? (
                  <>
                    <FiCheck size={18} />
                    Added to Cart!
                  </>
                ) : (
                  <>
                    <FiShoppingCart size={18} />
                    Add to Cart
                  </>
                )}
              </button>

              <button
                className="w-12 h-12 flex items-center justify-center rounded-xl border border-coal-600 hover:border-fire-600 text-coal-400 hover:text-fire-500 transition-all"
                aria-label="Add to wishlist"
              >
                <FiHeart size={18} />
              </button>
              <button
                className="w-12 h-12 flex items-center justify-center rounded-xl border border-coal-600 hover:border-fire-600 text-coal-400 hover:text-fire-500 transition-all"
                aria-label="Share product"
              >
                <FiShare2 size={18} />
              </button>
            </div>

            {/* Delivery/trust micro-info */}
            <div className="space-y-2.5 pt-4 border-t border-coal-700">
              <div className="flex items-center gap-3 text-sm text-coal-300">
                <FiTruck size={16} className="text-fire-500 flex-shrink-0" />
                <span>Free shipping on this order (over $500)</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-coal-300">
                <FiShield size={16} className="text-fire-500 flex-shrink-0" />
                <span>Lifetime warranty on firebox and frame</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-coal-300">
                <FiCheck size={16} className="text-fire-500 flex-shrink-0" />
                <span>30-day hassle-free return policy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="font-display text-2xl text-white tracking-wider mb-4">
              KEY FEATURES
            </h2>
            <ul className="space-y-2">
              {product.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-coal-300 text-sm">
                  <FiCheck size={16} className="text-fire-500 flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl text-white tracking-wider mb-4">
              SPECIFICATIONS
            </h2>
            <dl className="space-y-2">
              {Object.entries(product.specs).map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between text-sm py-2 border-b border-coal-700"
                >
                  <dt className="text-coal-400 font-medium">{k}</dt>
                  <dd className="text-white font-semibold text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div>
            <h2 className="font-display text-3xl text-white tracking-wider mb-8">
              YOU MAY ALSO LIKE
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
