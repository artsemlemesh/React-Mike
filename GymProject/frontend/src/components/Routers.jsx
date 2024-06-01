import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

const MyRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
export default MyRoute;
