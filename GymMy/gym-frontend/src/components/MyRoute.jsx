import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ClassSchedule from "../pages/ClassSchedule";
import MembershipPlans from "../pages/MemberPlan";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import Dashboard from "../pages/DashBoard";
import EnrolledClasses from "./EnrolledClasses";

const MyRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/class-schedule" element={<ClassSchedule />} />
      <Route path="/membership-plans" element={<MembershipPlans />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/dashboard/enrolled-classes" element={<EnrolledClasses />} />

    </Routes>
  );
};

export default MyRoute;
