import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; //for applying styles to reactstrap components (Container, Row, Col)
import GlobalState from "./GlobalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalState>
  </React.StrictMode>
);
