import { Link } from "react-router-dom";
import { FiArrowRight, FiShield, FiZap, FiAward } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      className="relative min-h-[92vh] flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&q=85"
          alt="Premium BBQ grill with glowing embers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-coal-900 via-coal-900/80 to-coal-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-coal-900/90 via-transparent to-coal-900/30" />
      </div>

      {/* Animated fire particles */}
      <div className="absolute bottom-0 left-1/4 w-1 h-24 bg-gradient-to-t from-fire-600 to-transparent opacity-60 animate-pulse" />
      <div className="absolute bottom-0 left-1/3 w-0.5 h-16 bg-gradient-to-t from-fire-500 to-transparent opacity-40 animate-pulse delay-300" />
      <div className="absolute bottom-0 left-2/5 w-1 h-20 bg-gradient-to-t from-orange-500 to-transparent opacity-50 animate-pulse delay-700" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-5">
            <span className="w-8 h-0.5 bg-fire-600" />
            <span className="text-fire-500 text-sm font-bold uppercase tracking-widest">
              Built for Legends
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white tracking-wider leading-none mb-6">
            MASTER THE{" "}
            <span className="fire-text fire-glow-text">FIRE.</span>
            <br />
            OWN THE{" "}
            <span className="fire-text">PIT.</span>
          </h1>

          <p className="text-coal-200 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
            Premium grills and smokers engineered for those who refuse to
            compromise. Competition-grade craftsmanship. Legendary flavor.
            Delivered to your door.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2 fire-gradient text-white font-bold px-8 py-4 rounded-xl text-base uppercase tracking-wider hover:opacity-90 transition-opacity fire-glow group"
            >
              Shop All Grills
              <FiArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              to="/product/titan-pro-offset-smoker-1000"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/30 hover:border-fire-600 text-white font-bold px-8 py-4 rounded-xl text-base uppercase tracking-wider transition-all hover:bg-fire-600/10"
            >
              View Best Seller
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-6 text-sm text-coal-300">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-fire-600/20 flex items-center justify-center">
                <FiShield className="text-fire-500" size={14} />
              </div>
              <span>Lifetime Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-fire-600/20 flex items-center justify-center">
                <FiZap className="text-fire-500" size={14} />
              </div>
              <span>Free Shipping $500+</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-fire-600/20 flex items-center justify-center">
                <FiAward className="text-fire-500" size={14} />
              </div>
              <span>10,000+ Pitmasters Trust Us</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats band */}
      <div className="absolute bottom-0 left-0 right-0 bg-coal-900/80 backdrop-blur-sm border-t border-coal-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: "10,000+", label: "Happy Pitmasters" },
              { value: "4.9★", label: "Average Rating" },
              { value: "15+", label: "Years of Craftsmanship" },
              { value: "Lifetime", label: "Warranty on Select Models" },
            ].map((stat) => (
              <div key={stat.label} className="py-2">
                <p className="font-display text-2xl md:text-3xl text-fire-500 tracking-wide">
                  {stat.value}
                </p>
                <p className="text-coal-400 text-xs uppercase tracking-wider mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
