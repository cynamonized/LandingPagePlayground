import { HEXtoRGB } from "../Utilities/HEXtoRGB";

function sketchMotionHero(p, props) {
  let componentWidth;
  let componentHeight;
  let componentColor;
  let currentCanvasWidth;

  ///////////////////////////////////////////////////

  // 1. MAJOR BUG -> It loads without canvas at first
  // bc we don't have immediate info about height/width
  // how to fix that? how to load that on 1st render

  ////////////////////////////////////////////////////

  ///////////////////////////////////////////////////

  // 2. Apply NatureOfCode example (mine from other VSC)

  ////////////////////////////////////////////////////

  // Reading background and sizes color from props
  p.updateWithProps = (props) => {
    componentWidth = props.windowW;
    componentHeight = props.windowH;
    componentColor = HEXtoRGB(props.background);
    console.log("ENGAGE ONCE");
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
    p.frameRate(5);

    // console.log(componentColor);
    p.background(componentColor.red, componentColor.green, componentColor.blue);
    // console.log(componentColor);
    // console.log(componentColor.join(", "));

    // p.updateWithProps = (props) => {
    //   componentWidth = props.windowW;
    //   componentColor = HEXtoRGB(props.background);
    //   console.log("AM I HERE?");
    // };

    if (!componentColor) {
      p.updateWithProps = (props) => {
        console.log("ENGAGING....");
        componentColor = HEXtoRGB(props.background);
      };
    }

    // If component width changes, then reboot canvas
    if (currentCanvasWidth != componentWidth) {
      console.log("CHANGING CANVAS SIZE TO:", componentWidth);
      p.resizeCanvas(componentWidth, componentHeight);
      currentCanvasWidth = componentWidth;
    }
  };
}

export default sketchMotionHero;

/////////////////////////////////////
// LEGACY TEST - TO BE REMOVED
/////////////////////////////////////
// if (p.mouseIsPressed) {
//   p.fill(0);
// } else {
//   p.fill(255);
// }
// p.ellipse(p.mouseX, p.mouseY, 80, 80);

///////////////////////////////////////

// p.updateWithProps = (props) => {
//   // componentWidth = Object.assign(componentWidth, props);
//   componentWidth = props.windowW;
// };

// p.background(props.background);

// p.textSize(50);
// p.fill("white");
// p.text(`THIS IS WORKING: ${componentWidth}`, 0, 300);
