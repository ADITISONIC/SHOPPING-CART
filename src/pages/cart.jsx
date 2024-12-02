import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);
  const { cart } = useSelector((state) => state);
  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  console.log(cart, totalCart);
  return (
    <div>
      {cart && cart.length ? (
        <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
         <div className="flex flex-col justify-center items-center p-3">
           {
            cart.map(cartItem)
           } 
            </div>
        </div>
      ) : (
        <div>
          <h1>Your cart is empty</h1>
          <Link to={"/"}>
            <button>Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
}
