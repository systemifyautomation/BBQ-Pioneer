import { Link } from "react-router-dom";

const categories = [
  {
    id: "Offset Smoker",
    label: "Offset Smokers",
    description: "Championship-grade low & slow",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
    count: 4,
  },
  {
    id: "Kamado Grill",
    label: "Kamado Grills",
    description: "Ancient ceramic. Modern perfection.",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80",
    count: 3,
  },
  {
    id: "Pellet Grill",
    label: "Pellet Grills",
    description: "Set it. Forget it. Dominate.",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80",
    count: 5,
  },
  {
    id: "Gas Grill",
    label: "Gas Grills",
    description: "Instant power. Zero compromise.",
    image: "https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=600&q=80",
    count: 3,
  },
];

export default function CategoryShowcase() {
  return (
    <section className="py-20 bg-gray-100" aria-label="Shop by category">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-fire-500 text-sm font-bold uppercase tracking-widest">
            Find Your Perfect Grill
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-gray-900 tracking-wider mt-2">
            SHOP BY CATEGORY
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/shop?category=${encodeURIComponent(cat.id)}`}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] block"
              aria-label={`Shop ${cat.label}`}
            >
              {/* Image */}
              <img
                src={cat.image}
                alt={cat.label}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent group-hover:from-gray-900/90 transition-all duration-300" />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-fire-400 text-xs font-semibold uppercase tracking-widest mb-1">
                  {cat.count} Models
                </p>
                <h3 className="text-white font-display text-2xl tracking-wider mb-1">
                  {cat.label.toUpperCase()}
                </h3>
                <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {cat.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
