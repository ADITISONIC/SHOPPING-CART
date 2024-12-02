import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/card-tile";
// Import CartTile component (assume it's defined elsewhere)


export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);
  const { cart } = useSelector((state) => state);

  useEffect(() => {
    if (cart && cart.length) {
      const total = cart.reduce((acc, curr) => acc + (curr.price || 0), 0);
      setTotalCart(total);
    }
  }, [cart]);

  return (
    <div>
      {cart && cart.length ? (
        <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
          <div className="flex flex-col justify-center items-center p-3">
            {cart.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))}
          </div>
          <div>
            <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
              <h1 className="font-bold text-lg text-red-800">
                Your Cart Summary
              </h1>
              <p>
                <span className="text-gray-800 font-bold">Total Items:</span>
                <span> {cart.length}</span>
              </p>
              <p>
                <span className="text-gray-800 font-bold">Total Amount:</span>
                <span> ${totalCart.toFixed(2)}</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-xl font-bold mb-4">Your cart is empty</h1>
          <Link to={"/"}>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
