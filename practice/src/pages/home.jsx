import { useContext } from "react";
import { SmthContext } from "../App";
import Scroll from "../scroll-to-section/scroll";
import GitProfile from "../github-profile";
import MyFeatureFlag from "../feature-flag";
import MyFlagGlobal from "../feature-flag/context";

export default function Home() {
  const hey = useContext(SmthContext);

  console.log(hey, "hey");
  return (
    <div>
      home
      {/* <Scroll/> */}
      {/* <GitProfile /> */}
      <MyFlagGlobal>
        <MyFeatureFlag />
      </MyFlagGlobal>
    </div>
  );
}
