import React from "react";
import AuroraBackground from "./components/AuroraBackground";
import LayoutGrid from "./components/TilesProjects";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./components/TextRevealCard";
import { TracingBeam } from "./components/TracingBeam";
import dummyContent from "./components/dummy";
// import LayoutGrid from "./components/LayoutGrid"; // Adjust the import path as needed
import { twMerge } from "tailwind-merge";
import TracingBeamDemo from "./components/TBDemo";
import GoogleGeminiEffectDemo from "./components/GoogleCompon";
import TextGenerateEffect from "./components/TextEffect";
import { Button } from "./components/Button";

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House in the woods</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    content: <div>Card 2 Content</div>,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <div>Card 3 Content</div>,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: <div>Card 3 Content</div>,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const words =
  "Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows";

function App() {
  return (
    <div className="flex h-screen overflow-hidden relative">
      {/* Left Static Side */}
      <AuroraBackground>
        <div className="w-1/2 text-black flex flex-col items-center justify-center p-8">
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
      <div className="w-1/2 bg-gray-100 overflow-y-scroll  relative">
        <div className="min-h-screen p-8 flex items-center justify-center ">
          <div>
            <TextGenerateEffect words={words} />
            {/* <TracingBeamDemo/> */}
            {/* <GoogleGeminiEffectDemo/> */}
            <TextRevealCard
              text="Hover me"
              revealText="Revealed the big secret!"
            >
              <TextRevealCardTitle>here is my title</TextRevealCardTitle>
              <TextRevealCardDescription>
                Description text goes here. very cool
              </TextRevealCardDescription>
            </TextRevealCard>
          </div>
        </div>
        <div className="min-h-screen p-8 flex items-center justify-center ">
          <div>
            <h2 className="text-2xl font-bold mb-2">About Me</h2>
            <p>
              I'm a self-taught developer with experience in various
              technologies including React, Node.js, and more.
            </p>
          </div>
        </div>
        <div className="min-h-screen p-8 flex items-center justify-center ">
          <div>
            <h2 className="text-2xl font-bold mb-2">Projects</h2>
            <p>Here are some of the projects I've worked on:</p>
            <ul className="list-disc list-inside">
              <li>Project 1: Description of project 1</li>
              <li>Project 2: Description of project 2</li>
              <li>Project 3: Description of project 3</li>
            </ul>
          </div>
        </div>

        <div className="min-h-screen p-8 flex items-center justify-center ">
          <div>
            <h2 className="text-2xl font-bold mb-2">Experience</h2>
            <p>I have worked at the following companies:</p>
            <ul className="list-disc list-inside">
              <li>Company 1: Description of your role</li>
              <li>Company 2: Description of your role</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
