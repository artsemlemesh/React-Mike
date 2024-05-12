import { createContext, useState } from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./pages/home.jsx";
import Fav from "./pages/favorite.jsx";
import Detail from "./pages/detail.jsx";
import Navbar from "./components/navbar.jsx";

export const SmthContext = createContext();

function App() {
  const [hey, setHey] = useState(false);

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
      {/* <BrowserRouter>
        <Routes> */}
          <SmthContext.Provider value={[hey, setHey]}>
            <Navbar />
            {/* <Route path='/' element={<Home/>}/>
            <Route path='/fav' element={<Fav/>}/>
            <Route path='/item/:id' element={<Detail/>}/> */}


            <RouterProvider router={router} />
          </SmthContext.Provider>
        {/* </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
