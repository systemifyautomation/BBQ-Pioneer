import { Link } from "react-router-dom";
import {
  FiFacebook,
  FiInstagram,
  FiYoutube,
  FiTwitter,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";
import { contactInfo, getPhoneLink, getEmailLink, getShortAddress } from "../data/contactInfo";

const footerLinks = {
  "Shop": [
    { to: "/shop?category=Pellet+Grill", label: "Pellet Grills" },
    { to: "/shop?category=Offset+Smoker", label: "Offset Smokers" },
    { to: "/shop?category=Kamado+Grill", label: "Kamado Grills" },
    { to: "/shop?category=Gas+Grill", label: "Gas Grills" },
    { to: "/shop?category=Charcoal+Grill", label: "Charcoal Grills" },
  ],
  "Support": [
    { to: "/contact", label: "Contact Us" },
    { to: "/shipping-policy", label: "Shipping Policy" },
    { to: "/refund-policy", label: "Returns & Refunds" },
    { to: "/about#warranty", label: "Warranty Info" },
    { to: "/about#faq", label: "FAQ" },
  ],
  "Company": [
    { to: "/about", label: "About Us" },
    { to: "/about#press", label: "Press & Media" },
    { to: "/about#careers", label: "Careers" },
    { to: "/about#affiliate", label: "Affiliate Program" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-700" role="contentinfo">
      {/* Newsletter Band */}
      <div className="fire-gradient py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white tracking-wider mb-2">
            JOIN THE PIONEER CREW
          </h2>
          <p className="text-orange-100 mb-6 text-sm md:text-base max-w-md mx-auto">
            Get exclusive deals, pitmaster tips & first access to new releases.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 rounded-lg bg-white/20 border border-white/40 text-white placeholder-orange-100 focus:outline-none focus:bg-white/30 transition-colors text-sm"
            />
            <button
              type="submit"
              className="bg-gray-900 text-white font-bold px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors text-sm uppercase tracking-wider"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/flame.svg" alt="" className="w-8 h-8" />
              <span className="font-display text-2xl text-white tracking-wider">
                BBQ PIONEER
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Premium grills and smokers for those who refuse to settle. Every
              product built to last a lifetime and perform at championship level.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: FiFacebook, href: "#", label: "Facebook" },
                { Icon: FiInstagram, href: "#", label: "Instagram" },
                { Icon: FiYoutube, href: "#", label: "YouTube" },
                { Icon: FiTwitter, href: "#", label: "Twitter" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 hover:bg-fire-600 hover:text-white transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            {/* Contact */}
            <div className="mt-6 space-y-2">
              <a
                href={getPhoneLink()}
                className="flex items-center gap-2 text-gray-400 hover:text-fire-500 transition-colors text-sm"
              >
                <FiPhone size={14} />
                {contactInfo.phone.display}
              </a>
              <a
                href={getEmailLink('main')}
                className="flex items-center gap-2 text-gray-400 hover:text-fire-500 transition-colors text-sm"
              >
                <FiMail size={14} />
                {contactInfo.email.main}
              </a>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <FiMapPin size={14} />
                {getShortAddress()}
              </div>
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-white font-semibold uppercase tracking-wider text-xs mb-4 border-b border-gray-700 pb-2">
                {section}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-gray-400 hover:text-fire-500 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} BBQ Pioneer LLC. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact" className="hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
