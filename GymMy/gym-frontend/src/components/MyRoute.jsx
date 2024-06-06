import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ClassSchedule from "../pages/ClassSchedule";
import MembershipPlans from "../pages/MemberPlan";

const MyRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/class-schedule" element={<ClassSchedule />} />
      <Route path="/membership-plans" element={<MembershipPlans />} />
    </Routes>
  );
};

export default MyRoute;
