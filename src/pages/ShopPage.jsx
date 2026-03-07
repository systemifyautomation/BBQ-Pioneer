import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SEO from "../components/SEO";
import ProductCard from "../components/ProductCard";
import { products, categories } from "../data/products";
import { FiFilter, FiX } from "react-icons/fi";

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "newest", label: "Newest" },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState("featured");
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const selectedCategory = searchParams.get("category") || "all";
  const searchQuery = searchParams.get("q") || "";

  const setCategory = (cat) => {
    const params = new URLSearchParams(searchParams);
    if (cat === "all") {
      params.delete("category");
    } else {
      params.set("category", cat);
    }
    setSearchParams(params);
  };

  const filtered = useMemo(() => {
    let list = [...products];
    if (selectedCategory !== "all") {
      list = list.filter((p) => p.category === selectedCategory);
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.tags.some((t) => t.includes(q))
      );
    }
    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount);
        break;
      default:
        break;
    }
    return list;
  }, [selectedCategory, searchQuery, sort]);

  const shopStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "BBQ Pioneer — Shop Premium Grills",
    "url": "https://bbqpioneer.com/shop",
    "description":
      "Browse BBQ Pioneer's full catalog of premium grills and smokers.",
    "numberOfItems": filtered.length,
    "itemListElement": filtered.map((p, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "url": `https://bbqpioneer.com/product/${p.slug}`,
      "name": p.name,
    })),
  };

  return (
    <>
      <SEO
        title="Shop Premium Grills & Smokers"
        description="Browse our full catalog of high-ticket grills, offset smokers, pellet grills, kamado grills and more. Free shipping on orders over $500."
        canonical="/shop"
        structuredData={shopStructuredData}
      />

      {/* Page Hero */}
      <div className="bg-coal-800 border-b border-coal-700 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl text-white tracking-wider mb-2">
            SHOP {selectedCategory !== "all" ? selectedCategory.toUpperCase() + "S" : "ALL GRILLS"}
          </h1>
          {searchQuery && (
            <p className="text-coal-400 text-sm">
              Showing results for{" "}
              <span className="text-fire-500 font-semibold">"{searchQuery}"</span>
            </p>
          )}
          <p className="text-coal-400 text-sm mt-1">
            {filtered.length} product{filtered.length !== 1 ? "s" : ""} found
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-8">
          {/* Category pills - desktop */}
          <div className="hidden sm:flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? "fire-gradient text-white"
                    : "bg-coal-700 text-coal-300 hover:bg-coal-600 hover:text-white"
                }`}
                aria-pressed={selectedCategory === cat.id}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Mobile filter button */}
          <button
            className="sm:hidden flex items-center gap-2 bg-coal-700 text-coal-300 hover:text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors"
            onClick={() => setShowMobileFilter(true)}
          >
            <FiFilter size={15} />
            Filter & Sort
          </button>

          {/* Sort */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="bg-coal-700 border border-coal-600 text-white text-sm rounded-lg px-4 py-2 focus:outline-none focus:border-fire-600 transition-colors"
            aria-label="Sort products"
          >
            {sortOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        {/* Mobile filter modal */}
        {showMobileFilter && (
          <div className="fixed inset-0 z-50 bg-coal-900/95 p-6 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-white font-bold text-xl">Filter & Sort</h2>
              <button
                onClick={() => setShowMobileFilter(false)}
                className="text-coal-400 hover:text-white"
                aria-label="Close filters"
              >
                <FiX size={24} />
              </button>
            </div>
            <div className="space-y-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setCategory(cat.id);
                    setShowMobileFilter(false);
                  }}
                  className={`w-full text-left px-5 py-3 rounded-xl font-semibold transition-all ${
                    selectedCategory === cat.id
                      ? "fire-gradient text-white"
                      : "bg-coal-700 text-coal-300"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-coal-400 text-2xl font-display tracking-wider mb-4">
              NO PRODUCTS FOUND
            </p>
            <p className="text-coal-500 mb-6">
              Try a different search or browse all categories.
            </p>
            <button
              onClick={() => {
                setCategory("all");
                setSearchParams({});
              }}
              className="fire-gradient text-white font-bold px-6 py-3 rounded-xl uppercase tracking-wide text-sm hover:opacity-90 transition-opacity"
            >
              View All Grills
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
