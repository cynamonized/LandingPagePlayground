import { useState } from "react";
import "../scss/main.scss";
import { CircleHero } from "./Components/CircleHero";

const menuElements = [
  { name: "Contact", link: "#" },
  { name: "Prices", link: "#" },
  { name: "About us", link: "#" },
  { name: "Hiring", link: "#" },
  { name: "More", link: "#" },
];

function App() {
  return (
    <>
      <CircleHero
        selfRotating={false}
        firstName={"Circle"}
        secondName={"Testing"}
        menuList={menuElements}
        circlePath={"/images/CircleMain.jpg"}
        mainColor={"#ffc400"}
        title={"Lorem ipsum dolor amet"}
        subtitle={"Lorem ipsum placeholder dolor amet"}
      />
    </>
  );
}

export default App;
