import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto px-4">
        <Link to={"/"}>
          <div className="ml-5">
            <h1 className="text-xl md:text-3xl font-bold text-red-900">
              REACT REDUX SHOPPING CART
            </h1>
          </div>
        </Link>
        <ul className="flex space-x-6">
          <li className="cursor-pointer">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="cursor-pointer">
            <Link to={"/cart"}>Cart</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
 