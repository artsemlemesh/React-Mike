import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { makeStyles } from "@mui/styles";

import "./App.css";
import HomePage from "./pages/HomePage";

const myStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = myStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Routes>
        {/* <Header/> */}
        <Route path="/" element={<HomePage/> } exact />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
