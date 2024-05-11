import { createContext, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home.jsx";
import Fav from "./pages/favorite.jsx";
import Detail from "./pages/detail.jsx";
import Navbar from "./components/navbar.jsx";


export const SmthContext = createContext();



function App() {

  const [hey, setHey] = useState(false)


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/fav",
      element: <Fav />,
    },
    {
      path: "/item/:id",
      element: <Detail />,
    },
  ]);

  return (
    <div>
      <SmthContext.Provider value={[hey, setHey]}>
      <Navbar />
      
      <RouterProvider router={router} />
      </SmthContext.Provider>
    </div>
  );
}

export default App;
