import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { useCart } from "../context/CartContext";
import { FiTrash2, FiPlus, FiMinus, FiShoppingBag, FiLock } from "react-icons/fi";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, subtotal, totalItems } = useCart();

  const shipping = subtotal >= 500 ? 0 : 75;
  const total = subtotal + shipping;

  return (
    <>
      <SEO
        title="Your Cart"
        description="Review your cart and checkout securely."
        canonical="/cart"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="font-display text-4xl text-gray-900 tracking-wider mb-8">
          YOUR CART
          {totalItems > 0 && (
            <span className="text-fire-500 ml-4 text-2xl">
              ({totalItems} {totalItems === 1 ? "item" : "items"})
            </span>
          )}
        </h1>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-20">
            <FiShoppingBag size={72} className="text-gray-300 mb-6" />
            <p className="text-gray-900 font-bold text-2xl mb-3">Your cart is empty</p>
            <p className="text-gray-500 mb-8">
              Discover our premium grills and find your perfect match.
            </p>
            <Link
              to="/shop"
              className="fire-gradient text-gray-900 font-bold px-8 py-4 rounded-xl uppercase tracking-wider text-sm hover:opacity-90 transition-opacity"
            >
              Shop All Grills
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-5 bg-gray-100 rounded-2xl p-5 border border-gray-300"
                >
                  <Link to={`/product/${item.slug}`} className="flex-shrink-0">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-24 h-20 object-cover rounded-xl"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.slug}`}
                      className="text-gray-900 font-bold text-lg hover:text-fire-500 transition-colors block leading-tight mb-1"
                    >
                      {item.name}
                    </Link>
                    <p className="text-gray-500 text-sm mb-3">{item.category}</p>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      {/* Qty */}
                      <div className="flex items-center bg-gray-200 rounded-xl border border-gray-400">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="w-10 h-10 flex items-center justify-center text-gray-900 hover:text-fire-500 transition-colors disabled:opacity-50"
                          aria-label="Decrease quantity"
                        >
                          <FiMinus size={14} />
                        </button>
                        <span className="w-8 text-center text-gray-900 font-bold text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-10 h-10 flex items-center justify-center text-gray-900 hover:text-fire-500 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <FiPlus size={14} />
                        </button>
                      </div>
                      {/* Price */}
                      <span className="text-gray-900 font-extrabold text-xl">
                        ${(item.price * item.quantity).toLocaleString()}
                      </span>
                      {/* Remove */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-500 hover:text-red-400 transition-colors"
                        aria-label={`Remove ${item.name}`}
                      >
                        <FiTrash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div>
              <div className="bg-gray-100 rounded-2xl p-6 border border-gray-300 sticky top-24">
                <h2 className="font-display text-2xl text-gray-900 tracking-wider mb-6">
                  ORDER SUMMARY
                </h2>
                <div className="space-y-3 mb-5">
                  <div className="flex justify-between text-gray-600 text-sm">
                    <span>Subtotal</span>
                    <span className="text-gray-900 font-semibold">
                      ${subtotal.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-600 text-sm">
                    <span>Shipping</span>
                    <span className={shipping === 0 ? "text-emerald-400 font-semibold" : "text-gray-900 font-semibold"}>
                      {shipping === 0 ? "FREE" : `$${shipping}`}
                    </span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-gray-400 text-xs">
                      Add ${(500 - subtotal).toLocaleString()} more for free shipping
                    </p>
                  )}
                </div>
                <div className="border-t border-gray-300 pt-4 mb-6">
                  <div className="flex justify-between text-gray-900 font-bold text-xl">
                    <span>Total</span>
                    <span>${total.toLocaleString()}</span>
                  </div>
                </div>
                <Link
                  to="/checkout"
                  className="block w-full text-center fire-gradient text-gray-900 font-bold py-4 rounded-xl uppercase tracking-wider text-sm hover:opacity-90 transition-opacity fire-glow mb-3"
                >
                  Proceed to Checkout
                </Link>
                <p className="flex items-center justify-center gap-2 text-gray-400 text-xs">
                  <FiLock size={12} />
                  Secure SSL encrypted checkout
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
