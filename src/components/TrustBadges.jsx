import {
  FiShield,
  FiTruck,
  FiRefreshCw,
  FiPhone,
  FiAward,
  FiLock,
} from "react-icons/fi";

const badges = [
  {
    Icon: FiShield,
    title: "Lifetime Warranty",
    desc: "On select frames & fireboxes",
  },
  {
    Icon: FiTruck,
    title: "Free Shipping",
    desc: "On orders over $500",
  },
  {
    Icon: FiRefreshCw,
    title: "30-Day Returns",
    desc: "Hassle-free, no questions asked",
  },
  {
    Icon: FiPhone,
    title: "Expert Support",
    desc: "Mon–Sat 8AM–8PM CST",
  },
  {
    Icon: FiAward,
    title: "Award-Winning",
    desc: "Best BBQ brand 2023 & 2024",
  },
  {
    Icon: FiLock,
    title: "Secure Checkout",
    desc: "256-bit SSL encryption",
  },
];

export default function TrustBadges() {
  return (
    <section
      className="bg-white border-y border-gray-300 py-10"
      aria-label="Trust and quality badges"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center gap-2 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-200 group-hover:bg-fire-600/20 flex items-center justify-center transition-colors border border-gray-400 group-hover:border-fire-600/50">
                <Icon
                  size={20}
                  className="text-fire-500 group-hover:text-fire-400 transition-colors"
                />
              </div>
              <div>
                <p className="text-gray-900 font-semibold text-xs uppercase tracking-wide">
                  {title}
                </p>
                <p className="text-gray-500 text-xs mt-0.5 leading-tight">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
