import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ClassSchedule from "../pages/ClassSchedule";
import MembershipPlans from "../pages/MemberPlan";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import Dashboard from "../pages/DashBoard";
import EnrolledClasses from "./EnrolledClasses";
import ProtectedRoute from "./ProtectedRoute";

const MyRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/class-schedule" element={<ClassSchedule />} />
      <Route path="/membership-plans" element={<MembershipPlans />} />
      <Route path="/contact" element={<Contact />} />
     
     
      <Route
        path="/dashboard/*"
        element={
          <ProtectedRoute>
            {" "}
            <Dashboard />{" "}
          </ProtectedRoute>
        }
      >
      <Route index element={<Navigate to='enrolled-classes' replace/>}/>
      <Route path="enrolled-classes" element={<EnrolledClasses/>}/>
      {/* <Route path='profile' element={<Profile/>}/> */}
      {/* <Route path='settings' element={<Settings/>}/> */}
      {/* <Route path="/dashboard/enrolled-classes" element={<EnrolledClasses />} /> */}
        </Route>
    </Routes>
  );
};

export default MyRoute;
