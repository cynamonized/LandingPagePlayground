import { useState } from "react";
import "../scss/main.scss";
import { CircleHero } from "./Components/CircleHero";
import { CircleAnimationBanner } from "./Components/CircleAnimationBanner";
import { CircleMockupBoth } from "./Components/CircleMockupBoth";
import { PhoneMockCenterDuo } from "./Components/PhoneMockCenterDuo";
import { PhoneMockLeftDuo } from "./Components/PhoneMockLeftDuo";

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
        circlePath={"/images/CircleMain.png"}
        mainColor={"#ffc400"}
        title={"Lorem ipsum dolor amet"}
        subtitle={"Lorem ipsum placeholder dolor amet"}
      />

      <div
        style={{
          marginBottom: "50px",
          display: "flex",
          flexDirection: "column",
          gap: "100px",
        }}
      >
        <CircleMockupBoth
          circlePath={"/images/CircleMainMobile.png"}
          mainTitle={"Technology Report 2023"}
          subtitle={"This is subtitle"}
          mainColor={"#CC0000"}
        />
        <PhoneMockCenterDuo
          circlePath={"/images/CircleMainMobile.png"}
          mainTitle={"Technology Report 2023"}
          subtitle={"This is subtitle"}
          mainColor={"#CC0000"}
        />
        <PhoneMockLeftDuo
          circlePath={"/images/CircleMainMobile.png"}
          mainTitle={"Technology Report 2023"}
          subtitle={"This is subtitle"}
          mainColor={"#CC0000"}
        />
      </div>

      {/* WIP */}
      <CircleAnimationBanner />
    </>
  );
}

export default App;
