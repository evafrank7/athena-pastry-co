import { useState } from "react";
import { type MenuItem, initialMenuItems } from "../Menu";

function formatPrice(priceInCents: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(priceInCents / 100);
}

const CheckoutPage = () => {
  const [cart, setCart] = useState<MenuItem[]>(initialMenuItems);

  const isEmpty = cart.length === 0;  // is cart empty? 

  const subtotalInCents = cart.reduce( // reducing the prices into total 
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  function increaseQuantity(id: string) {
    setCart((currentCart) =>               // Use the latest cart state
      currentCart.map((item) =>            // Create a new array by checking each item
        item.id === id                     // Is this the item being updated?
          ? {
            ...item,                     // Copy the item's existing properties
            quantity: item.quantity + 1, // Override quantity with the increased value
          }
          : item                           // Keep every non-matching item unchanged
      )
    );
  }

  function decreaseQuantity(id: string) {
    setCart((currentCart) =>               // Use the latest cart state
      currentCart.map((item) =>            // Create a new array by checking each item
        item.id === id                     // Is this the item being updated?
          ? {
            ...item,                     // Copy the item's existing properties
            quantity: item.quantity - 1, // Override quantity with the decreased value 
          }
          : item                           // Keep everything no-matching item unchanged
      )
    );
  }

  function removeItem(id: string) {
    setCart((currentCart) =>                        // Use the latest cart state
      currentCart.filter((item) => item.id !== id)  // Keep every item but the matching one.
    );
  }

  return (
    <div className="app">
      <div className="receipt">
        <h1> Receipt </h1>

        {isEmpty ? (<p> Cart is empty. Please add items to your cart.</p>)
          : (
            <ul className="cart-items">
              {cart.map((item) => (
                <li className="item" key={item.id}>
                  <p className="item-name"> {item.name} </p>
                  <p> {formatPrice(item.price)}</p>

                  <div className="quantity">
                    <button
                      type="button"
                      onClick={() => decreaseQuantity(item.id)}
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>

                    <span> {item.quantity} </span>

                    <button
                      type="button"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>


                    <button
                      type="button"
                      className="remove"
                      onClick={() => removeItem(item.id)}
                    >
                      X
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

        <div className="checkout">
          <p> Subtotal: {formatPrice(subtotalInCents)}</p>
          <button
            type="button"
            disabled={isEmpty}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>

  )


}

export default CheckoutPage;