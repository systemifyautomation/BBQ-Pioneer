import { Link } from "react-router-dom";

export default function PromoSection() {
  return (
    <section className="py-16 bg-coal-900" aria-label="Promotion">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-coal-800 border border-coal-700">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-fire-600 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-fire-500 rounded-full blur-2xl" />
          </div>

          <div className="relative grid md:grid-cols-2 gap-0">
            {/* Left — text */}
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <span className="inline-block text-fire-500 text-xs font-bold uppercase tracking-widest bg-fire-600/10 border border-fire-600/20 rounded-full px-3 py-1 mb-4 w-fit">
                🔥 Limited Time
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider leading-none mb-4">
                SAVE UP TO{" "}
                <span className="fire-text">20%</span>
                <br />
                THIS SEASON
              </h2>
              <p className="text-coal-300 text-base leading-relaxed mb-8 max-w-sm">
                Stock up before summer. Our biggest sale of the year is here —
                free shipping, extended warranty, and exclusive bundle deals.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/shop"
                  className="fire-gradient text-white font-bold px-8 py-4 rounded-xl text-sm uppercase tracking-wider hover:opacity-90 transition-opacity text-center fire-glow"
                >
                  Shop the Sale
                </Link>
                <Link
                  to="/shop?category=Pellet+Grill"
                  className="border border-coal-600 hover:border-fire-600 text-coal-300 hover:text-white font-semibold px-8 py-4 rounded-xl text-sm uppercase tracking-wider transition-all text-center"
                >
                  View Pellet Grills
                </Link>
              </div>

              {/* Urgency */}
              <p className="text-coal-500 text-xs mt-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-fire-500 rounded-full animate-pulse" />
                Sale ends soon — limited stock available
              </p>
            </div>

            {/* Right — image */}
            <div className="relative hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=700&q=80"
                alt="Premium grill on sale"
                className="w-full h-full object-cover rounded-r-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-coal-800/80 to-transparent rounded-r-3xl" />
              {/* Price badge */}
              <div className="absolute top-8 right-8 bg-fire-600 text-white rounded-2xl p-4 text-center shadow-xl fire-glow">
                <p className="text-xs font-semibold uppercase tracking-wide mb-1">Save</p>
                <p className="font-display text-4xl tracking-wider">20%</p>
                <p className="text-xs font-semibold uppercase tracking-wide">Off Select</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
