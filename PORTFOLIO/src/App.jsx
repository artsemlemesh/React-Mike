// src/App.js
import React from "react";
import AuroraBackground from "./components/AuroraBackground";
import {
  TextRevealCard,
  TextRevealCardTitle,
  TextRevealCardDescription,
} from "./components/TextRevealCard";
import { HeroParallax } from './components/HeroParallax'; // Adjust the path as needed


const products = [
  // Add your product data here
  { title: 'one', link: 'http://localhost:3000/', thumbnail: '1.jpeg' },
  { title: 'two website', link: '#', thumbnail: '2.jpeg' },
  { title: 'three one', link: '#', thumbnail: '3.jpeg' },
  { title: 'four website', link: 'http://localhost:3000/', thumbnail: '1.jpeg' },
  { title: 'five website', link: '#', thumbnail: '2.jpeg' },
  { title: 'six one', link: '#', thumbnail: '3.jpeg' },
  { title: 'seven website', link: 'http://localhost:3000/', thumbnail: '1.jpeg' },
  { title: 'eight website', link: '#', thumbnail: '2.jpeg' },
  { title: 'nine one', link: '#', thumbnail: '3.jpeg' },
  // Add more products to reach the number you want to display
];


function App() {
  return (

    // <AuroraBackground>
    //   <h1 className="text-4xl font-bold text-center text-black">
    //     My name is mike

    //   </h1>

    //   <TextRevealCard text="Hover me" revealText="Revealed the big secret!">
    //     <TextRevealCardTitle>here is my title</TextRevealCardTitle>
    //     <TextRevealCardDescription>
    //       Description text goes here. very cool
    //     </TextRevealCardDescription>
    //   </TextRevealCard>
    // </AuroraBackground>
  
  <HeroParallax products={products} />

  
  );
}

export default App;
