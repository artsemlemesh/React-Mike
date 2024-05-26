import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import GlobalState from "./GlobalContext.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-goqom4r8u4bdonvi.us.auth0.com"
      clientId="3bdUMZhTFkZzvERDmmUwKkpmVEDW7nAt"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <GlobalState>
        <App />
      </GlobalState>
    </Auth0Provider>
  </React.StrictMode>
);
