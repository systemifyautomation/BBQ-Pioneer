import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FiX, FiTrash2, FiPlus, FiMinus, FiShoppingBag } from "react-icons/fi";

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, subtotal, totalItems } =
    useCart();
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsCartOpen(false);
    };
    if (isCartOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isCartOpen, setIsCartOpen]);

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm"
          onClick={() => setIsCartOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <aside
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-gray-100 z-50 flex flex-col shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-300">
          <div>
            <h2 className="text-gray-900 font-bold text-xl">Your Cart</h2>
            <p className="text-gray-500 text-sm">
              {totalItems} {totalItems === 1 ? "item" : "items"}
            </p>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-gray-500 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-200"
            aria-label="Close cart"
          >
            <FiX size={22} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-8">
              <FiShoppingBag size={56} className="text-gray-300 mb-4" />
              <p className="text-gray-900 font-semibold text-lg mb-2">Your cart is empty</p>
              <p className="text-gray-500 text-sm mb-6">
                Discover our premium grills and elevate your BBQ game.
              </p>
              <Link
                to="/shop"
                onClick={() => setIsCartOpen(false)}
                className="fire-gradient text-gray-900 font-bold px-6 py-3 rounded-xl uppercase tracking-wide text-sm hover:opacity-90 transition-opacity"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="space-y-1 px-4">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-4 p-4 bg-gray-200/50 rounded-xl"
                >
                  <Link to={`/product/${item.slug}`} onClick={() => setIsCartOpen(false)}>
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-20 h-16 object-cover rounded-lg"
                    />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.slug}`}
                      onClick={() => setIsCartOpen(false)}
                      className="text-gray-900 font-semibold text-sm leading-tight hover:text-fire-500 transition-colors block line-clamp-2 mb-2"
                    >
                      {item.name}
                    </Link>
                    <p className="text-fire-500 font-bold text-base">
                      ${(item.price * item.quantity).toLocaleString()}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      {/* Qty */}
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="w-7 h-7 rounded-lg bg-gray-300 hover:bg-gray-400 flex items-center justify-center text-gray-900 transition-colors disabled:opacity-50"
                          aria-label="Decrease quantity"
                        >
                          <FiMinus size={12} />
                        </button>
                        <span className="w-8 text-center text-gray-900 font-semibold text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 rounded-lg bg-gray-300 hover:bg-gray-400 flex items-center justify-center text-gray-900 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <FiPlus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-500 hover:text-red-400 transition-colors"
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        <FiTrash2 size={15} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-300 p-6 space-y-4">
            <div className="flex justify-between text-sm text-gray-500">
              <span>Subtotal</span>
              <span className="text-gray-900 font-semibold">
                ${subtotal.toLocaleString()}
              </span>
            </div>
            {subtotal >= 500 && (
              <p className="text-emerald-400 text-xs font-semibold text-center bg-emerald-500/10 rounded-lg py-2">
                ✓ You qualify for FREE shipping!
              </p>
            )}
            <Link
              to="/cart"
              onClick={() => setIsCartOpen(false)}
              className="block w-full text-center border border-gray-400 hover:border-fire-600 text-gray-900 font-semibold py-3 rounded-xl transition-colors text-sm"
            >
              View Cart
            </Link>
            <Link
              to="/checkout"
              onClick={() => setIsCartOpen(false)}
              className="block w-full text-center fire-gradient text-gray-900 font-bold py-3.5 rounded-xl uppercase tracking-wider text-sm hover:opacity-90 transition-opacity fire-glow"
            >
              Checkout — ${subtotal.toLocaleString()}
            </Link>
            <p className="text-gray-400 text-xs text-center">
              🔒 Secure checkout · SSL encrypted
            </p>
          </div>
        )}
      </aside>
    </>
  );
}
