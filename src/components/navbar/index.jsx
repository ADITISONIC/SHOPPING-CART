import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5">
      <h2 className="text-2xl font-semibold">FoodRecipe</h2>
      <form>
        <input
          type="text"
          name="search"
          placeholder="Enter Items..."
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="text-black hover:text-gray-700 duration-300"
          >
            {" "}
            Home
          </NavLink>
          <NavLink
            to={"/favourites"}
            className="text-black hover:text-gray-700 duration-300"
          >
            {" "}
            Favourites
          </NavLink>
        </li>
        <NavLink
          to={"/recipe-item/:id"}
          className="text-black hover:text-gray-700 duration-300"
        >
          {" "}
          Recipe
        </NavLink>
      </ul>
    </nav>
  );
}
