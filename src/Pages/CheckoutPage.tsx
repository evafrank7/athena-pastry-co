import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function formatPrice(priceInCents: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(priceInCents / 100);
}

const CheckoutPage = () => {
  const { cart, subtotalInCents, updateQuantity, removeFromCart, clearCart } = useCart();
  const hasUnpricedItems = cart.some((item) => item.price === 0);

  return (
    <main className="min-h-[60vh] bg-cream px-6 py-16 text-navy sm:px-10">
      <div className="mx-auto max-w-6xl">
        <header className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-navy/60">Your Order</p>
          <h1 className="mt-3 font-heading text-5xl sm:text-6xl">Shopping Cart</h1>
        </header>

        {cart.length === 0 ? (
          <section className="mx-auto mt-10 max-w-2xl border border-navy/10 bg-white px-6 py-16 text-center shadow-[0_8px_30px_rgba(15,53,88,0.08)]">
            <h2 className="font-heading text-3xl">Your cart is empty</h2>
            <p className="mt-3 text-lg text-navy/65">Browse the menu and add a few handmade favorites.</p>
            <Link to="/menu" className="mt-7 inline-flex bg-navy px-8 py-3 text-cream hover:bg-navy-dark">View the Menu</Link>
          </section>
        ) : (
          <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1fr_22rem]">
            <section className="border border-navy/10 bg-white p-5 shadow-[0_8px_30px_rgba(15,53,88,0.08)] sm:p-8">
              <div className="flex items-center justify-between border-b border-navy/10 pb-5">
                <h2 className="font-heading text-3xl">Cart Items</h2>
                <button type="button" onClick={clearCart} className="text-sm text-navy/60 underline-offset-4 hover:text-navy hover:underline">Clear cart</button>
              </div>

              <ul className="divide-y divide-navy/10">
                {cart.map((item) => (
                  <li key={`${item.id}-${item.selectedFlavor ?? "standard"}`} className="grid gap-5 py-6 sm:grid-cols-[7rem_1fr_auto]">
                    <img src={item.image} alt={item.name} className="h-28 w-full object-cover sm:w-28" />
                    <div>
                      <h3 className="font-heading text-2xl">{item.name}</h3>
                      <p className="mt-1 text-sm text-navy/60">
                        {item.selectedFlavor && `${item.selectedFlavor} · `}Per {item.unit}
                      </p>
                      <p className="mt-3 font-semibold">{item.price > 0 ? formatPrice(item.price) : "Pricing available soon"}</p>
                      <button type="button" onClick={() => removeFromCart(item.id, item.selectedFlavor)} className="mt-3 text-sm text-navy/55 underline-offset-4 hover:text-navy hover:underline">Remove</button>
                    </div>
                    <div className="self-center">
                      <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em]">Quantity</p>
                      <div className="inline-flex items-center border border-navy/20 bg-white">
                        <button type="button" aria-label={`Decrease ${item.name} quantity`} onClick={() => updateQuantity(item.id, item.selectedFlavor, item.quantity - 1)} className="px-4 py-2 text-xl hover:bg-cream-dark">&minus;</button>
                        <span className="min-w-10 text-center">{item.quantity}</span>
                        <button type="button" aria-label={`Increase ${item.name} quantity`} onClick={() => updateQuantity(item.id, item.selectedFlavor, item.quantity + 1)} className="px-4 py-2 text-xl hover:bg-cream-dark">+</button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <Link to="/menu" className="inline-flex pt-5 text-sm font-bold hover:underline">&larr; Continue Shopping</Link>
            </section>

            <aside className="border border-navy/10 bg-white p-6 shadow-[0_8px_30px_rgba(15,53,88,0.08)] lg:sticky lg:top-6">
              <h2 className="font-heading text-3xl">Order Summary</h2>
              <div className="mt-6 space-y-3 border-b border-navy/10 pb-5">
                <div className="flex justify-between gap-4"><span className="text-navy/65">Subtotal</span><span>{hasUnpricedItems ? "Pending" : formatPrice(subtotalInCents)}</span></div>
                <div className="flex justify-between gap-4"><span className="text-navy/65">Pickup</span><span>Free</span></div>
              </div>
              <div className="mt-5 flex justify-between gap-4 text-lg font-bold"><span>Total</span><span>{hasUnpricedItems ? "Pending" : formatPrice(subtotalInCents)}</span></div>
              {hasUnpricedItems && (
                <p className="mt-5 border-l-4 border-gold bg-cream px-4 py-3 text-sm leading-relaxed text-navy/70">
                  Add product prices in the menu data before enabling payment checkout.
                </p>
              )}
              <button type="button" disabled={hasUnpricedItems} className="mt-6 w-full bg-navy px-6 py-3.5 text-cream hover:bg-navy-dark disabled:cursor-not-allowed disabled:bg-navy/35">Continue to Checkout</button>
              <p className="mt-3 text-center text-xs text-navy/50">Pickup details and payment come next.</p>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
};

export default CheckoutPage;
