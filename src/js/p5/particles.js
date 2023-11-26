import { HEXtoRGB } from "../Utilities/HEXtoRGB";
import {
  ParticlesFieldPalette,
  ParticlesFieldOptions,
} from "./helpers/ParticlesFieldSettings";
import toxi from "toxiclibsjs";
import { throttleStreams } from "./helpers/ParticlesField.js";
import { createStream } from "./helpers/ParticlesField.js";

function particles(p, props) {
  // General canvas variables
  let componentWidth;
  let componentHeight;
  let componentColor;
  let currentCanvasWidth;
  let backgroundImagePath;
  let backgroundImage;
  let dotsCanvas;

  // Particles variables
  let perlin = new toxi.math.noise.PerlinNoise();
  let bounds = new toxi.geom.Rect();
  let lastPos = new toxi.geom.Vec2D();
  let offset = 0;
  let streams = [];
  let pt = new toxi.geom.Vec2D();
  let compColorFortmatted;

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

    streams = throttleStreams(componentWidth, componentHeight);
    backgroundImage = p.loadImage(backgroundImagePath);
    p.pixelDensity(1);
    compColorFortmatted = componentColor.join(", ").toString();
    console.log(compColorFortmatted);
    dotsCanvas = p.createGraphics(componentWidth, componentHeight);
  };

  p.draw = function () {
    let l = streams.length;
    let stream;

    // If component width changes, then reboot canvas with proper width
    if (currentCanvasWidth != componentWidth) {
      console.log("CHANGING CANVAS SIZE TO:", componentWidth, componentHeight);
      p.resizeCanvas(componentWidth, componentHeight);
      //   dotsCanvas.width = componentWidth;
      //   dotsCanvas.height = componentHeight;
      dotsCanvas = p.createGraphics(componentWidth, componentHeight);
      currentCanvasWidth = componentWidth;
      console.log("CHANGING GRAPHICS TO:", dotsCanvas.width, dotsCanvas.height);
    }

    // Setting frame rate
    p.frameRate(30);
    if (!componentColor) {
      p.updateWithProps = (props) => {
        componentColor = HEXtoRGB(props.background);
      };
    }

    // Background image placement
    p.image(backgroundImage, 0, 0);
    // backgroundImage.resize(componentWidth, 0);

    // Actual particles engine
    offset += ParticlesFieldOptions.distort;

    for (let i = 0; i < streams.length; i++) {
      stream = streams[i];

      lastPos.set(stream);
      pt.set(stream).scaleSelf(ParticlesFieldOptions.scalar).addSelf(0, offset);

      let noise = perlin.noise(pt.x, pt.y) - 0.5;
      let angle = ParticlesFieldOptions.strength * noise;
      let dir = toxi.geom.Vec2D.fromTheta(angle);

      stream.addSelf(dir.normalize(ParticlesFieldOptions.step * 3));
      dotsCanvas.stroke(stream.color);
      dotsCanvas.strokeWeight(ParticlesFieldOptions.strokeWeight);
      dotsCanvas.line(lastPos.x, lastPos.y, stream.x, stream.y);

      if (!bounds.containsPoint(stream)) {
        stream.set(getRandomVector());
      }
    }

    if (ParticlesFieldOptions.numStreams >= streams.length) {
      streams.push(createStream(componentWidth, componentHeight));
    }
    if (ParticlesFieldOptions.numStreams < streams.length) {
      streams.shift();
    }

    dotsCanvas.image(backgroundImage, 0, 0);
    // backgroundImage.resize(componentWidth, 0);
    dotsCanvas.tint(255, 40);
    p.image(dotsCanvas, 0, 0);
  };
}

export default particles;
