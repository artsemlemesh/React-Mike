import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";
import ErrorPage from "./error-page";
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from "./routes/contact";
import EditContact, {
  action as editAction
} from './routes/edit'
import {action as destroyAction} from './routes/destroy'
import Index from "./routes/index";


// routes can be configured this way: 
  // createRoutesFromElements(
  //     <Route
  //     path="/",
  //     ...
  //but there is no difference, just stylistic preference

  
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        //when any errors are thrown in child routes, our new pathless route will catch it and render, preserving the root route's UI
        errorElement: <ErrorPage/>,
        children:[
          {index: true, element: <Index/>},
          {
            path: 'contacts/:contactId',
            element: <Contact/>,
            loader: contactLoader,
            action: contactAction,
          }
        ]
      },
      {
        index: true, element: <Index/>  // (eliminates blank page if no links are active) index: true instead of path:''. this tells the router to match and render this route when the user is at the parent route's exact path, so there are no other child to render in the <Outlet/>
      },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
        action: contactAction, //seemingly for toggling favorites true/false
      },
      {
        path: 'contacts/:contactId/edit',
        element: <EditContact/>,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: 'contacts/:contactId/destroy',
        action: destroyAction,
        errorElement: <div>Oops. ther was an error</div>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
