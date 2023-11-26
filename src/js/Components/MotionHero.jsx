import "../../scss/main.scss";
import "../../scss/Components/motionHero.scss";
import sketchMotionHero from "../p5/sketchMotionHero";
import { ReactP5Wrapper } from "@p5-wrapper/react";
import { BasicNav } from "./BasicNav";
import { useState, useEffect } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import particlesImage from "../../../images/Particles_cropped.jpg";
import vehicle from "../p5/vehicle";
import particles from "../p5/particles";

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

      {/* Vehicle */}
      {/* <ReactP5Wrapper
        sketch={vehicle}
        windowW={size.width}
        windowH={600}
        // background={backgroundColor}
        background={"#0d1522"}
        image={particlesImage}
      /> */}

      {/* Particles */}
      <ReactP5Wrapper
        sketch={particles}
        windowW={size.width}
        windowH={600}
        // background={backgroundColor}
        background={"#0d1522"}
        image={particlesImage}
      />

      {/* Testing P5 wrapper width */}
      {/* <p style={{ color: "white", padding: "150px", display: "block" }}>
        THESE ARE P5 COMPONENT PARAMS: {size.width}, {size.height}
      </p> */}
    </div>
  );
};
