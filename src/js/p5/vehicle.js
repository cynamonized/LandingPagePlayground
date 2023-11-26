import { HEXtoRGB } from "../Utilities/HEXtoRGB";
import {
  VehicleFollowPath,
  PathOfVehicleFollow,
} from "./helpers/VehicleFollowPath";

function vehicle(p, props) {
  let componentWidth;
  let componentHeight;
  let componentColor;
  let currentCanvasWidth;
  let backgroundImagePath;
  let backgroundImage;
  let dotsCanvas;

  let vehicle;
  let path;

  // Reading background color and sizes from props
  p.updateWithProps = (props) => {
    componentWidth = props.windowW;
    componentHeight = props.windowH;
    componentColor = HEXtoRGB(props.background);
    backgroundImagePath = props.image;
  };

  p.setup = function () {
    p.updateWithProps = (props) => {
      componentWidth = props.windowW;
      componentHeight = props.windowH;
      componentColor = HEXtoRGB(props.background);
      backgroundImagePath = props.image;
    };
    p.createCanvas(componentWidth, componentHeight);
    currentCanvasWidth = componentWidth;

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
      console.log("CHANGING CANVAS SIZE TO:", componentWidth, componentHeight);
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

    p.background(...componentColor);
    // VehicleFollowPath_Engine(vehicle, path, p);

    // Actual engine starts here
    path.end.y = p.mouseY;
    path.show();
    let force = vehicle.follow(path);
    vehicle.applyForce(force);
    vehicle.edges();
    vehicle.update();
    vehicle.show();
  };
}

export default vehicle;
