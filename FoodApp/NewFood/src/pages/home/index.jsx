import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";

export default function Home() {
  const { loading, recipeList } = useContext(GlobalContext);
  //from context folder invoke our globalContext and pass whatever variables we need from it

  if (loading) return <div>Loading... wait please</div>;

  console.log(recipeList)
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem key={item.id}  item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing to show. Search smth
          </p>
        </div>
      )}
    </div>
  );
}
