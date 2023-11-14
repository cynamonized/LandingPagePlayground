import { HEXtoRGB } from "../Utilities/HEXtoRGB";

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

  // Initial canvas setup
  p.setup = function () {
    p.updateWithProps = (props) => {
      componentWidth = props.windowW;
      componentHeight = props.windowH;
      componentColor = HEXtoRGB(props.background);
    };
    p.createCanvas(componentWidth, componentHeight);
    currentCanvasWidth = componentWidth;
  };

  p.draw = function () {
    p.frameRate(30);

    if (!componentColor) {
      p.updateWithProps = (props) => {
        componentColor = HEXtoRGB(props.background);
      };
    }

    p.background(componentColor.red, componentColor.green, componentColor.blue);

    // If component width changes, then reboot canvas with proper width
    if (currentCanvasWidth != componentWidth) {
      console.log("CHANGING CANVAS SIZE TO:", componentWidth);
      p.resizeCanvas(componentWidth, componentHeight);
      currentCanvasWidth = componentWidth;
    }
  };
}

export default sketchMotionHero;
