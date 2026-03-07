import { useState, useEffect, useCallback } from "react";
import { FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
  {
    id: 1,
    name: "Marcus T.",
    location: "Austin, TX",
    rating: 5,
    date: "Jan 2025",
    product: "Titan Pro Offset Smoker 1000",
    text: "I've competed in 30+ BBQ championships and the Titan Pro is hands-down the best offset smoker I've ever used. The heat distribution is absolutely even — no hot spots. Worth every single penny.",
    avatar: "M",
  },
  {
    id: 2,
    name: "Sarah K.",
    location: "Nashville, TN",
    rating: 5,
    date: "Feb 2025",
    product: "Inferno Kamado XL",
    text: "From 225°F slow smokes to 750°F pizza nights — this kamado does it all. The ceramic holds temp through a 14-hour overnight brisket without me touching the vents. My guests are still talking about it.",
    avatar: "S",
  },
  {
    id: 3,
    name: "David R.",
    location: "Denver, CO",
    rating: 5,
    date: "Mar 2025",
    product: "Pioneer Pellet Pro 1200",
    text: "The WiFi connectivity is a game changer. I monitored my 18-hour pork shoulder from bed at 2AM, adjusted the temp from my phone. Wake up to perfect pulled pork every time. This grill is magic.",
    avatar: "D",
  },
  {
    id: 4,
    name: "Jennifer W.",
    location: "Houston, TX",
    rating: 5,
    date: "Dec 2024",
    product: "Blacksmith Gas Grill 6000",
    text: "Restaurant-quality steaks from my own backyard. The infrared sear burner gets searing hot in seconds. Full stainless construction looks amazing on my patio and cleans up effortlessly. Absolutely love it.",
    avatar: "J",
  },
  {
    id: 5,
    name: "Mike H.",
    location: "Kansas City, MO",
    rating: 5,
    date: "Jan 2025",
    product: "Vortex Charcoal Kettle XL",
    text: "The Vortex airflow technology is genius. I can sear at 700°F or slow smoke ribs all day with zero effort. Best charcoal grill I've ever owned — and I've owned a lot over 20 years.",
    avatar: "M",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const go = useCallback((dir) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 400);
  }, [isAnimating]);

  useEffect(() => {
    const timer = setInterval(() => go(1), 6000);
    return () => clearInterval(timer);
  }, [go]);

  const t = testimonials[current];

  return (
    <section className="py-20 bg-coal-800" aria-label="Customer testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-fire-500 text-sm font-bold uppercase tracking-widest">
            Real Pitmasters. Real Results.
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider mt-2">
            WHAT OUR CUSTOMERS SAY
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-3xl mx-auto">
          <div
            className={`bg-coal-700 rounded-3xl p-8 md:p-12 text-center transition-opacity duration-400 ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
          >
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((s) => (
                <FiStar
                  key={s}
                  size={22}
                  className="fill-amber-400 text-amber-400"
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-coal-100 text-lg md:text-xl leading-relaxed mb-8 italic">
              &ldquo;{t.text}&rdquo;
            </blockquote>

            {/* Reviewer info */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full fire-gradient flex items-center justify-center font-bold text-white text-lg">
                {t.avatar}
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">{t.name}</p>
                <p className="text-coal-400 text-sm">{t.location} · {t.date}</p>
                <p className="text-fire-500 text-xs font-medium mt-0.5">{t.product}</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <button
            onClick={() => go(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 w-10 h-10 rounded-full bg-coal-600 hover:bg-fire-600 text-white flex items-center justify-center transition-colors shadow-lg"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft size={20} />
          </button>
          <button
            onClick={() => go(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 w-10 h-10 rounded-full bg-coal-600 hover:bg-fire-600 text-white flex items-center justify-center transition-colors shadow-lg"
            aria-label="Next testimonial"
          >
            <FiChevronRight size={20} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-fire-600 w-6" : "bg-coal-600"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Summary stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { val: "4.9/5", sub: "Average Rating" },
            { val: "10,000+", sub: "Reviews" },
            { val: "98%", sub: "Would Recommend" },
            { val: "97%", sub: "5-Star Reviews" },
          ].map((s) => (
            <div
              key={s.sub}
              className="text-center bg-coal-700 rounded-2xl p-6"
            >
              <p className="font-display text-3xl text-fire-500 tracking-wider">
                {s.val}
              </p>
              <p className="text-coal-400 text-sm mt-1">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
