import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SEO from "../components/SEO";
import { useCart } from "../context/CartContext";
import { FiLock, FiCheck, FiChevronDown } from "react-icons/fi";

const states = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
  "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
  "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire",
  "New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma",
  "Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee",
  "Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming",
];

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1=info, 2=success
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    address: "", city: "", state: "", zip: "",
    cardNumber: "", cardName: "", expiry: "", cvv: "",
  });
  const [errors, setErrors] = useState({});

  const shipping = subtotal >= 500 ? 0 : 75;
  const total = subtotal + shipping;

  const validate = () => {
    const errs = {};
    if (!form.firstName) errs.firstName = "Required";
    if (!form.lastName) errs.lastName = "Required";
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) errs.email = "Valid email required";
    if (!form.address) errs.address = "Required";
    if (!form.city) errs.city = "Required";
    if (!form.state) errs.state = "Required";
    if (!form.zip || !/^\d{5}/.test(form.zip)) errs.zip = "Valid ZIP required";
    if (!form.cardNumber || form.cardNumber.replace(/\s/g, "").length < 16)
      errs.cardNumber = "Valid card number required";
    if (!form.cardName) errs.cardName = "Required";
    if (!form.expiry) errs.expiry = "Required";
    if (!form.cvv || form.cvv.length < 3) errs.cvv = "Valid CVV required";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let v = value;
    if (name === "cardNumber") {
      v = value.replace(/\D/g, "").replace(/(\d{4})/g, "$1 ").trim().slice(0, 19);
    }
    if (name === "expiry") {
      v = value.replace(/\D/g, "").replace(/(\d{2})(\d)/, "$1/$2").slice(0, 5);
    }
    if (name === "cvv") v = value.replace(/\D/g, "").slice(0, 4);
    setForm((prev) => ({ ...prev, [name]: v }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    // Simulate order placed
    clearCart();
    setStep(2);
    window.scrollTo(0, 0);
  };

  const inputClass = (field) =>
    `w-full bg-coal-700 border ${
      errors[field] ? "border-red-500" : "border-coal-600"
    } text-white placeholder-coal-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-fire-600 transition-colors`;

  if (step === 2) {
    return (
      <>
        <SEO title="Order Confirmed" description="Your order has been placed." canonical="/checkout" />
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-lg w-full text-center bg-coal-800 rounded-3xl p-10 border border-coal-700">
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
              <FiCheck size={40} className="text-emerald-400" />
            </div>
            <h1 className="font-display text-4xl text-white tracking-wider mb-3">
              ORDER CONFIRMED!
            </h1>
            <p className="text-coal-300 mb-2">
              Thank you, <strong className="text-white">{form.firstName}</strong>! Your order has been
              placed successfully.
            </p>
            <p className="text-coal-400 text-sm mb-8">
              A confirmation email will be sent to{" "}
              <span className="text-fire-500">{form.email}</span>. Your grill will ship within 2–5
              business days.
            </p>
            <div className="bg-coal-700 rounded-2xl p-5 mb-8 text-left">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-coal-400">Estimated delivery</span>
                <span className="text-white font-semibold">5–10 business days</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-coal-400">Order total</span>
                <span className="text-fire-500 font-bold">${total.toLocaleString()}</span>
              </div>
            </div>
            <Link
              to="/"
              className="fire-gradient text-white font-bold px-8 py-4 rounded-xl uppercase tracking-wider text-sm hover:opacity-90 transition-opacity inline-block"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <p className="text-white font-display text-4xl tracking-wider mb-4">NOTHING TO CHECK OUT</p>
        <Link
          to="/shop"
          className="fire-gradient text-white font-bold px-6 py-3 rounded-xl uppercase tracking-wide text-sm hover:opacity-90 transition-opacity"
        >
          Shop Grills
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Checkout"
        description="Secure checkout for your premium BBQ Pioneer grills."
        canonical="/checkout"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center gap-3 mb-8">
          <img src="/flame.svg" alt="" className="w-7 h-7" />
          <h1 className="font-display text-3xl text-white tracking-wider">SECURE CHECKOUT</h1>
          <FiLock size={16} className="text-fire-500 ml-1" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="lg:col-span-3 space-y-8"
          >
            {/* Contact */}
            <div className="bg-coal-800 rounded-2xl p-6 border border-coal-700">
              <h2 className="font-display text-xl text-white tracking-wider mb-5">CONTACT INFO</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "firstName", label: "First Name", placeholder: "John" },
                  { name: "lastName", label: "Last Name", placeholder: "Smith" },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block text-coal-400 text-xs font-semibold uppercase tracking-wider mb-1.5">
                      {f.label}
                    </label>
                    <input
                      type="text"
                      name={f.name}
                      placeholder={f.placeholder}
                      value={form[f.name]}
                      onChange={handleChange}
                      className={inputClass(f.name)}
                    />
                    {errors[f.name] && (
                      <p className="text-red-400 text-xs mt-1">{errors[f.name]}</p>
                    )}
                  </div>
                ))}
                <div>
                  <label className="block text-coal-400 text-xs font-semibold uppercase tracking-wider mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass("email")}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-coal-400 text-xs font-semibold uppercase tracking-wider mb-1.5">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass("phone")}
                  />
                </div>
              </div>
            </div>

            {/* Shipping */}
            <div className="bg-coal-800 rounded-2xl p-6 border border-coal-700">
              <h2 className="font-display text-xl text-white tracking-wider mb-5">SHIPPING ADDRESS</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-coal-400 text-xs font-semibold uppercase tracking-wider mb-1.5">
                    Street Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    placeholder="123 Pitmaster Lane"
                    value={form.address}
                    onChange={handleChange}
                    className={inputClass("address")}
                  />
                  {errors.address && <p className="text-red-400 text-xs mt-1">{errors.address}</p>}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-coal-400 text-xs font-semibold uppercase tracking-wider mb-1.5">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      placeholder="Austin"
                      value={form.city}
                      onChange={handleChange}
                      className={inputClass("city")}
                    />
                    {errors.city && <p className="text-red-400 text-xs mt-1">{errors.city}</p>}
                  </div>
                  <div>
                    <label className="block text-coal-400 text-xs font-semibold uppercase tracking-wider mb-1.5">
                      State
                    </label>
                    <select
                      name="state"
                      value={form.state}
                      onChange={handleChange}
                      className={`${inputClass("state")} appearance-none`}
                    >
                      <option value="">Select…</option>
                      {states.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {errors.state && <p className="text-red-400 text-xs mt-1">{errors.state}</p>}
                  </div>
                  <div>
                    <label className="block text-coal-400 text-xs font-semibold uppercase tracking-wider mb-1.5">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      name="zip"
                      placeholder="78701"
                      value={form.zip}
                      onChange={handleChange}
                      className={inputClass("zip")}
                      maxLength={10}
                    />
                    {errors.zip && <p className="text-red-400 text-xs mt-1">{errors.zip}</p>}
                  </div>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="bg-coal-800 rounded-2xl p-6 border border-coal-700">
              <h2 className="font-display text-xl text-white tracking-wider mb-1">PAYMENT</h2>
              <p className="text-coal-500 text-xs mb-5 flex items-center gap-1.5">
                <FiLock size={11} /> 256-bit SSL encrypted
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-coal-400 text-xs font-semibold uppercase tracking-wider mb-1.5">
                    Card Number
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={form.cardNumber}
                    onChange={handleChange}
                    className={inputClass("cardNumber")}
                    inputMode="numeric"
                  />
                  {errors.cardNumber && (
                    <p className="text-red-400 text-xs mt-1">{errors.cardNumber}</p>
                  )}
                </div>
                <div>
                  <label className="block text-coal-400 text-xs font-semibold uppercase tracking-wider mb-1.5">
                    Name on Card
                  </label>
                  <input
                    type="text"
                    name="cardName"
                    placeholder="John Smith"
                    value={form.cardName}
                    onChange={handleChange}
                    className={inputClass("cardName")}
                  />
                  {errors.cardName && (
                    <p className="text-red-400 text-xs mt-1">{errors.cardName}</p>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-coal-400 text-xs font-semibold uppercase tracking-wider mb-1.5">
                      Expiry
                    </label>
                    <input
                      type="text"
                      name="expiry"
                      placeholder="MM/YY"
                      value={form.expiry}
                      onChange={handleChange}
                      className={inputClass("expiry")}
                      inputMode="numeric"
                    />
                    {errors.expiry && (
                      <p className="text-red-400 text-xs mt-1">{errors.expiry}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-coal-400 text-xs font-semibold uppercase tracking-wider mb-1.5">
                      CVV
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      placeholder="123"
                      value={form.cvv}
                      onChange={handleChange}
                      className={inputClass("cvv")}
                      inputMode="numeric"
                    />
                    {errors.cvv && <p className="text-red-400 text-xs mt-1">{errors.cvv}</p>}
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full fire-gradient text-white font-bold py-4 rounded-xl uppercase tracking-wider text-base hover:opacity-90 transition-opacity fire-glow"
            >
              Place Order — ${total.toLocaleString()}
            </button>
          </form>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-2">
            <div className="bg-coal-800 rounded-2xl p-6 border border-coal-700 sticky top-24">
              <h2 className="font-display text-xl text-white tracking-wider mb-5">ORDER SUMMARY</h2>
              <div className="space-y-3 mb-5">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3 text-sm">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-14 h-12 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-semibold leading-tight line-clamp-2 mb-1">
                        {item.name}
                      </p>
                      <p className="text-coal-400">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-white font-bold flex-shrink-0">
                      ${(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t border-coal-700 pt-4 space-y-2">
                <div className="flex justify-between text-sm text-coal-400">
                  <span>Subtotal</span>
                  <span className="text-white">${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-coal-400">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? "text-emerald-400" : "text-white"}>
                    {shipping === 0 ? "FREE" : `$${shipping}`}
                  </span>
                </div>
                <div className="flex justify-between font-bold text-white pt-2 border-t border-coal-700 text-lg">
                  <span>Total</span>
                  <span className="text-fire-500">${total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
