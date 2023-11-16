import { HEXtoRGB } from "../Utilities/HEXtoRGB";
import {
  VehicleFollowPath,
  TargetOfVehicleFollowPath,
  PathOfVehicleFollow,
} from "./helpers/VehicleFollowPath";
import { VehicleFollowPath_Engine } from "./engine/VehicleFollowPath_Engine";
import { ParticlesField_Engine } from "./engine/ParticlesFieldEngine.js";
import {
  ParticlesFieldPalette,
  ParticlesFieldOptions,
} from "./helpers/ParticlesFieldSettings";
import toxi from "toxiclibsjs";
import { throttleStreams } from "./helpers/ParticlesField.js";

function sketchMotionHero(p, props) {
  ////////////////////////////////////////////////////
  // 1. Define global variables here
  //    (Instances that will be initialized in setup()
  //    but also visible in draw())
  ////////////////////////////////////////////////////

  // General canvas variables - should be always available
  let componentWidth;
  let componentHeight;
  let componentColor;
  let currentCanvasWidth;

  // A. Variables for vehicle - if not using, comment it
  let vehicle;
  let path;

  // B. Variables for particle fields - if not using, comment it
  let perlin = new toxi.math.noise.PerlinNoise();
  let bounds = new toxi.geom.Rect();
  let lastPos = new toxi.geom.Vec2D();
  let offset = 0;
  let streams = [];
  let pt = new toxi.geom.Vec2D();

  // Callbacks to manipulate above variables in draw() function
  function addOffset(addition) {
    offset += addition;
  }

  function changeLastPos(update) {
    lastPos.set(update);
  }

  function changePt(currentStream, currentScalar, currentOffset) {
    pt.set(currentStream).scaleSelf(currentScalar).addSelf(0, currentOffset);
  }

  ///////////////////////////////////////////////////

  // Reading background color and sizes from props
  p.updateWithProps = (props) => {
    componentWidth = props.windowW;
    componentHeight = props.windowH;
    componentColor = HEXtoRGB(props.background);
  };

  ////////////////////////////////////////////////////
  ////////////////////////////////////////////////////
  // Initial canvas setup
  ////////////////////////////////////////////////////
  ////////////////////////////////////////////////////

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

    // A. Vehicle setup
    // vehicle = new VehicleFollowPath(100, componentHeight / 4, p);
    // path = new PathOfVehicleFollow(
    //   0,
    //   componentHeight / 2,
    //   componentWidth,
    //   componentHeight / 2,
    //   p
    // );

    // B. ParticlesField setup
    streams = throttleStreams(componentWidth, componentHeight);
  };

  ////////////////////////////////////////////////////
  ////////////////////////////////////////////////////
  // Draw function
  ////////////////////////////////////////////////////
  ////////////////////////////////////////////////////

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

    const compColorFortmatted = componentColor.join(", ").toString();
    ////////////////////////////////////////////////////
    // 3. Put actual draw below (engine)
    ///////////////////////////////////////////////////

    // A. Run Vehicle visual
    // p.background(...componentColor);
    // VehicleFollowPath_Engine(vehicle, path, p);

    // B. Run ParticlesField visual
    ParticlesField_Engine(
      streams,
      offset,
      addOffset,
      p,
      ParticlesFieldOptions,
      lastPos,
      changeLastPos,
      pt,
      changePt,
      perlin,
      bounds,
      componentColor
    );

    p.background(
      `rgba(${compColorFortmatted},${ParticlesFieldOptions.tailLength})`
    );
  };
}

export default sketchMotionHero;
