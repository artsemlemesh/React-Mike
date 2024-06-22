import React from "react";
import AuroraBackground from "./components/AuroraBackground";
import LayoutGrid from "./components/TilesProjects";
import {
  TextRevealCard,
  // TextRevealCardDescription,
  // TextRevealCardTitle,
} from "./components/TextRevealCard";
import { TracingBeam } from "./components/TracingBeam";
import dummyContent from "./components/dummy";
// import LayoutGrid from "./components/LayoutGrid"; // Adjust the import path as needed
import { twMerge } from "tailwind-merge";
import TracingBeamDemo from "./components/TBDemo";
import GoogleGeminiEffectDemo from "./components/GoogleCompon";
import TextGenerateEffect from "./components/TextEffect";
import { Button } from "./components/Button";
import MySkills from "./components/MySkills";
import { LinkPreviewDemo } from "./components/ContactMeComp";
import { FaArrowLeft } from "react-icons/fa";
import ContactMe from "./components/ContactEmailMy";

import {
  SkeletonOne,
  SkeletonTwo,
  SkeletonThree,
  SkeletonFour,
} from "./components/skeletons/Skeleton";

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "1.png",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const words =
  " I'm a self-taught developer with experience in various technologies including React, Node.js, and more.";

function App() {
  return (
    <div className="flex h-screen  overflow-hidden relative justify-center ">
      {/* Left Static Side */}
      <AuroraBackground>
        <div className="w-1/2 text-black flex flex-col items-center justify-center p-8 min-w-[350px]">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-lg mb-8">
            Hi, I'm [Your Name], a Full Stack Developer with a passion for
            creating amazing web applications.
          </p>

          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Contact Me
          </Button>
        </div>
        <LayoutGrid cards={cards} />
      </AuroraBackground>

      {/* Right Scrollable Side */}
      <div className="w-1/2 bg-gray-100 overflow-y-scroll  relative min-w-[350px]">
        <div className="min-h-screen   p-8 flex items-center justify-center ">
          <div>
            <h2 className="text-2xl font-bold mb-2">About Me</h2>

            <TextGenerateEffect words={words} />
          </div>
        </div>

        <div className="min-h-screen p-8 flex items-center justify-center ">
          <FaArrowLeft size={40} />
          <TextRevealCard text="Look!" revealText="at my projects" />
        </div>

        {/* <ContactMe/> */}

        <MySkills />

        <div className="container mx-auto p-8 items-center justify-center">
          <LinkPreviewDemo />
        </div>
      </div>
    </div>
  );
}

export default App;
