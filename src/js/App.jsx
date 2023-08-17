import { useState } from "react";
import "../scss/main.scss";
import { CircleHero } from "./Components/CircleHero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CircleHero />
    </>
  );
}

export default App;
