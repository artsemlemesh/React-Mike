import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favList, setFavList] = useState([])//after we worked with our detail page, we need to set up favorite funciton

  // const navigate = useNavigate()//whenever we search smth on other pages, we get redirected to the homepage navigate('/')

  async function handleSubmit(e) {
    e.preventDefault(); //bcz form gets submitted initially, so we have to remove this property
    try {
      setLoading(true);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await res.json();

      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        setSearchParam("");
        // navigate('/')
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
      setSearchParam("");
    }
  }

  function handleAddtoFav(getCurrItem){
    console.log(getCurrItem)
    let copyFavList = [...favList]; //shallow copy of favList array, ensures that modifications to it do not affect the original 'favList'
    const index = copyFavList.findIndex(item => item.id === getCurrItem.id) 
    //finds the index of the item with the same '===' 'id' as 'getCurrentItem' in the 'copyFaveList'
    //findIndex returns the index of the first element in the array that satisfies the provided test function. if no such element, it returns '-1'
    if(index === -1){ // -1 means that item isnt present in the list
      copyFavList.push(getCurrItem)//adds
    } else {
      copyFavList.splice(index)//removes
    }
    setFavList(copyFavList)
  }
  console.log(favList, 'favList')


  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        loading,
        recipeList,
        setSearchParam,
        handleSubmit,
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddtoFav,
        favList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
// GlobalContext.Provider, this provider component accepts value prop, which is an object containing the searchParam state and setSearchParam funciton as its props
//any component that is a   DESCENDANT of "GlobalState" will have access to these [search.., set..] values through the context
//define handleSubmit func passed to navbar
