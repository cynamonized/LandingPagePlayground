import "../../scss/main.scss";
import "../../scss/Components/motionHero.scss";
import sketchMotionHero from "../p5/sketchMotionHero";
import { ReactP5Wrapper } from "@p5-wrapper/react";
import { BasicNav } from "./BasicNav";
import { useState, useEffect } from "react";
import { useWindowSize } from "@uidotdev/usehooks";

export const Motionhero = ({
  menuList,
  firstName,
  secondName,
  mainColor,
  backgroundColor,
}) => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const size = useWindowSize();

  useEffect(() => {}, []);

  return (
    <div className="nav-hero">
      <BasicNav
        menuList={menuList}
        firstName={firstName}
        secondName={secondName}
        mainColor={mainColor}
      />

      <ReactP5Wrapper
        sketch={sketchMotionHero}
        windowW={size.width}
        windowH={600}
        // background={backgroundColor}
        background={backgroundColor}
      />

      <p style={{ color: "white", padding: "150px", display: "block" }}>
        THESE ARE YOUR COMPONENT PARAMS: {size.width}, {size.height}
      </p>
    </div>
  );
};
