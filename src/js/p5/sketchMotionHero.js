import { HEXtoRGB } from "../Utilities/HEXtoRGB";
// Temp imports
import {
  VehicleFollowPath,
  TargetOfVehicleFollowPath,
  PathOfVehicleFollow,
} from "./helpers/VehicleFollowPath";
import { VehicleFollowPath_Engine } from "./engine/VehicleFollowPath_Engine";

function sketchMotionHero(p, props) {
  let componentWidth;
  let componentHeight;
  let componentColor;
  let currentCanvasWidth;

  // Reading background color and sizes from props
  p.updateWithProps = (props) => {
    componentWidth = props.windowW;
    componentHeight = props.windowH;
    componentColor = HEXtoRGB(props.background);
  };

  ////////////////////////////////////////////////////
  // 1. Define global variables here
  //    (Instances that will be initialized in setup()
  //    but also visible in draw())
  ////////////////////////////////////////////////////
  let vehicle;
  let path;

  // Initial canvas setup
  p.setup = function () {
    p.updateWithProps = (props) => {
      componentWidth = props.windowW;
      componentHeight = props.windowH;
      componentColor = HEXtoRGB(props.background);
    };
    p.createCanvas(componentWidth, componentHeight);
    currentCanvasWidth = componentWidth;

    ////////////////////////////////////////////////////
    // 2. Put actual instancel setup below
    ////////////////////////////////////////////////////
    vehicle = new VehicleFollowPath(100, componentHeight / 4, p);
    path = new PathOfVehicleFollow(
      0,
      componentHeight / 2,
      componentWidth,
      componentHeight / 2,
      p
    );
  };

  p.draw = function () {
    // If component width changes, then reboot canvas with proper width
    if (currentCanvasWidth != componentWidth) {
      console.log("CHANGING CANVAS SIZE TO:", componentWidth);
      p.resizeCanvas(componentWidth, componentHeight);
      currentCanvasWidth = componentWidth;
    }

    // Setting frame rate
    p.frameRate(30);

    if (!componentColor) {
      p.updateWithProps = (props) => {
        componentColor = HEXtoRGB(props.background);
      };
    }

    // Setting background color from props
    p.background(...componentColor);

    ////////////////////////////////////////////////////
    // 3. Put actual draw below (engine)
    ///////////////////////////////////////////////////

    // Engine
    VehicleFollowPath_Engine(vehicle, path, p);
  };
}

export default sketchMotionHero;
