import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/cart-slice";

export default function CartItem({ cartItem }) {
    const dispatch =useDispatch()

    function handleRemoveFromCart(){
     dispatch(removeFromCart(cartItem.id))
    }
  return (
    <div>
      <div>
        <img
          src={cartItem?.image}
          className="h-28 rounded-lg"
          alt={cartItem?.title}
        />
        <div>
          <h1>{cartItem?.title}</h1>
          <p>{cartItem?.price}</p>
        </div>
      </div>
      <div>
        <button
          onClick={
           
               handleRemoveFromCart
              
          }
          className="bg-red-950 text-white border-2 rounded-lg font-bold p-4"
        >
          Remove From Cart
        </button>
      </div>
    </div>
  );
}
