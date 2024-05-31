import { useEffect, useState } from "react";
import CarContent from "../components/CarTabs/car-content";
import FAQ from "../components/FAQ/FAQ";
import Items from "../components/FAQ/items";
import InfoHome from "../components/InfoHome";
import RentForm from "../components/RentForm";
import Separator from "../components/Separator";
import TopSlider from "../components/UI/TopSlider";

const Home = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScrollPercent = () => {
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercent((howMuchScrolled / height) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercent);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });

  return (
    <>
      <div className="fixed top-0 left-0 w-full  ">
        <div className="bg-green-500 h-1" style={{width: `${scrollPercent}%`}}></div>
      </div>
      {/* <TopSlider/> */}
      {/* <InfoHome/> */}
      {/* <RentForm/> */}
      <Separator />
      <Items />

      {/* <CarContent/> */}
    </>
  );
};

export default Home;
