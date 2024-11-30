import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div>
        <p className="text-center text-lg mt-4">Loading... Please wait!</p>
      </div>
    );
  }

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-4">
      {recipeList?.length > 0 ? (
        recipeList.map((item, index) => <RecipeItem key={index} item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-gray-500 font-bold">
            Nothing to show. Please search something.
          </p>
        </div>
      )}
    </div>
  );
}
