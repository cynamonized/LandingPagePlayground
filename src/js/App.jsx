import { useState } from "react";
import "../scss/main.scss";
import { CircleHero } from "./Components/CircleHero";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ParallaxProvider>
        <CircleHero />
      </ParallaxProvider>
    </>
  );
}

export default App;
