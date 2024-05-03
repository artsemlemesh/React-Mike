import { useContext } from "react";
import RecipeItem from "../../components/recipe-item";

import { GlobalContext } from "../../context";


export default function Favourites(){

    const { favList } = useContext(GlobalContext);
  //from context folder invoke our globalContext and pass whatever variables we need from it
    console.log(favList, 'FavoritesfavList' )

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favList && favList.length > 0 ? (
        favList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing is added in fav
          </p>
        </div>
      )}
    </div>
  );
}