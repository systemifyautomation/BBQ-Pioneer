import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import {
  FiShoppingCart,
  FiMenu,
  FiX,
  FiSearch,
  FiPhone,
} from "react-icons/fi";
import CartDrawer from "./CartDrawer";
import { contactInfo, getPhoneLink } from "../data/contactInfo";

const navLinks = [
  { to: "/shop", label: "Shop Grills" },
  { to: "/shop?category=Pellet+Grill", label: "Pellet Grills" },
  { to: "/shop?category=Offset+Smoker", label: "Offset Smokers" },
  { to: "/shop?category=Kamado+Grill", label: "Kamado" },
  { to: "/about", label: "Our Story" },
];

export default function Header() {
  const { totalItems, setIsCartOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
      setMobileOpen(false);
    }
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="fire-gradient text-gray-900 text-center text-sm py-2 px-4 font-semibold tracking-wide">
        🔥 FREE SHIPPING on orders over $500 + Lifetime Warranty on Select Models
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-2xl border-b border-gray-200"
            : "bg-white"
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 group"
              aria-label="BBQ Pioneer Home"
            >
              <img src="/flame.svg" alt="" className="w-8 h-8" />
              <div>
                <span className="font-display text-2xl lg:text-3xl text-gray-900 tracking-wider group-hover:text-fire-600 transition-colors">
                  BBQ PIONEER
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-8"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-sm font-semibold uppercase tracking-wider transition-colors ${
                      isActive
                        ? "text-fire-600"
                        : "text-gray-700 hover:text-fire-500"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* Phone */}
              <a
                href={getPhoneLink()}
                className="hidden xl:flex items-center gap-1.5 text-sm text-gray-600 hover:text-fire-500 transition-colors"
                aria-label="Call us"
              >
                <FiPhone size={15} />
                <span className="font-medium">{contactInfo.phone.display}</span>
              </a>

              {/* Search */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-gray-600 hover:text-fire-500 transition-colors"
                aria-label="Search products"
              >
                <FiSearch size={20} />
              </button>

              {/* Cart */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-gray-600 hover:text-fire-500 transition-colors"
                aria-label={`Shopping cart with ${totalItems} items`}
              >
                <FiShoppingCart size={22} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-fire-600 text-gray-900 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center pulse-fire">
                    {totalItems > 99 ? "99+" : totalItems}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-fire-500 transition-colors"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>

          {/* Search bar */}
          {searchOpen && (
            <div className="pb-4">
              <form onSubmit={handleSearch} className="flex gap-2">
                <input
                  autoFocus
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search grills, smokers, brands..."
                  className="flex-1 bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-fire-600 transition-colors"
                />
                <button
                  type="submit"
                  className="fire-gradient text-gray-900 px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Search
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden bg-gray-50 border-t border-gray-200">
            <nav
              className="flex flex-col py-4"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-colors ${
                      isActive
                        ? "text-fire-600 bg-gray-100"
                        : "text-gray-700 hover:text-fire-500 hover:bg-gray-100"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="px-6 pt-4 border-t border-gray-200 mt-2">
                <form onSubmit={handleSearch} className="flex gap-2">
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="flex-1 bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-400 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-fire-600"
                  />
                  <button
                    type="submit"
                    className="fire-gradient text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold"
                  >
                    Go
                  </button>
                </form>
              </div>
            </nav>
          </div>
        )}
      </header>

      <CartDrawer />
    </>
  );
}
