import { useState } from "react";
import SEO from "../components/SEO";
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from "react-icons/fi";
import { contactInfo, getPhoneLink, getEmailLink, getFullAddress } from "../data/contactInfo";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would send to your backend
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  const contactCards = [
    {
      icon: FiPhone,
      title: "Phone",
      details: contactInfo.phone.display,
      link: getPhoneLink(),
      linkText: "Call Now",
    },
    {
      icon: FiMail,
      title: "Email",
      details: contactInfo.email.main,
      link: getEmailLink('main'),
      linkText: "Send Email",
    },
    {
      icon: FiMapPin,
      title: "Address",
      details: getFullAddress(),
      link: null,
    },
    {
      icon: FiClock,
      title: "Business Hours",
      details: `${contactInfo.hours.weekdays}, ${contactInfo.hours.saturday}, ${contactInfo.hours.sunday}`,
      link: null,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-700">
      <SEO
        title="Contact Us"
        description="Get in touch with BBQ Pioneer. Contact our team for product inquiries, support, or custom orders. Call 1-888-BBQ-FIRE or email hello@bbqpioneer.com"
        canonical="/contact"
      />

      {/* Hero Section */}
      <div className="fire-gradient py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-6xl text-gray-900 tracking-wider mb-4">
            GET IN TOUCH
          </h1>
          <p className="text-orange-100 text-lg max-w-2xl mx-auto">
            Have questions about our products? Need assistance with an order? 
            Our team of BBQ experts is here to help.
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-white border border-gray-300 rounded-xl p-6 hover:border-fire-600 transition-colors"
              >
                <div className="w-12 h-12 bg-fire-600/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-fire-500" size={24} />
                </div>
                <h3 className="text-gray-900 font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{item.details}</p>
                {item.link && (
                  <a
                    href={item.link}
                    className="text-fire-500 hover:text-fire-400 text-sm font-semibold"
                  >
                    {item.linkText} →
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact Form & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-300 rounded-xl p-8">
              <h2 className="font-display text-3xl text-gray-900 tracking-wider mb-6">
                SEND US A MESSAGE
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-gray-600 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-fire-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-600 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-fire-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-600 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-fire-500 transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-gray-600 mb-2"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-fire-500 transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="order-status">Order Status</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="warranty-claim">Warranty Claim</option>
                      <option value="return-exchange">Return/Exchange</option>
                      <option value="custom-order">Custom Order</option>
                      <option value="dealer-inquiry">Dealer Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-600 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-fire-500 transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full fire-gradient text-gray-900 font-bold px-8 py-4 rounded-xl uppercase tracking-wider text-sm hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {submitted ? (
                    <>✓ Message Sent!</>
                  ) : (
                    <>
                      <FiSend size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Additional Info */}
          <div className="space-y-8">
            {/* FAQ Link */}
            <div className="bg-white border border-gray-300 rounded-xl p-6">
              <h3 className="font-display text-xl text-gray-900 tracking-wider mb-3">
                QUICK ANSWERS
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Looking for immediate answers? Check out our frequently asked questions.
              </p>
              <a
                href="/about#faq"
                className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                View FAQ
              </a>
            </div>

            {/* Support Resources */}
            <div className="bg-white border border-gray-300 rounded-xl p-6">
              <h3 className="font-display text-xl text-gray-900 tracking-wider mb-4">
                SUPPORT RESOURCES
              </h3>
              <ul className="space-y-3">
                {[
                  { label: "Shipping Policy", link: "/shipping-policy" },
                  { label: "Return & Refund Policy", link: "/refund-policy" },
                  { label: "Warranty Information", link: "/about#warranty" },
                  { label: "Product Manuals", link: "/about#manuals" },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.link}
                      className="text-gray-600 hover:text-fire-500 transition-colors text-sm flex items-center gap-2"
                    >
                      <span className="text-fire-600">→</span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Emergency Support */}
            <div className="bg-fire-950 border border-fire-900 rounded-xl p-6">
              <h3 className="font-display text-xl text-gray-900 tracking-wider mb-3">
                NEED IMMEDIATE HELP?
              </h3>
              <p className="text-orange-200 text-sm mb-4">
                For urgent matters during business hours, call us directly:
              </p>
              <a
                href="tel:+18888882473"
                className="block text-center fire-gradient text-gray-900 font-bold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm"
              >
                📞 1-888-BBQ-FIRE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
