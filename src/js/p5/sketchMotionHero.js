function sketchMotionHero(p, props) {
  let rotation = 0;
  let windowWidth = 1024;

  p.setup = function () {
    p.createCanvas(windowWidth, 500);
  };

  // p.updateWithProps = (props) => {
  //   // windowWidth = Object.assign(windowWidth, props);
  //   windowWidth = props.windowW;
  // };

  p.draw = function () {
    let currentCanvasWidth = windowWidth;

    p.frameRate(2);
    if (p.mouseIsPressed) {
      p.fill(0);
    } else {
      p.fill(255);
    }
    p.ellipse(p.mouseX, p.mouseY, 80, 80);
    // console.log(windowWidth);

    ///////////////////////////////////////

    p.updateWithProps = (props) => {
      // windowWidth = Object.assign(windowWidth, props);
      windowWidth = props.windowW;
    };
    console.log("ULTIMATE TEST:", windowWidth);

    /////////////////////////////////////
    p.textSize(50);
    p.fill("white");
    p.text(`THIS IS WORKING: ${windowWidth}`, 0, 300);

    if (currentCanvasWidth != windowWidth) {
      console.log("CHANGING CANVAS SIZE");
      // IT DOESN"T WORK SO WELL YET
      // IT WORKS JUST ONCE

      // FUNCTION ONLY UPDATES windowWidth once
      // p.updateWidthProps function
      // maybe it should be played here?

      // so only when width changes it takes prop.windoW a
      // and adds it to draw function/canvas

      // AOBOVE METHOD ALEADY WORKS IN ////////////////
      // NOW JUST ADD IT TO THIS IF SO IT RESIZES CANVAS PROPERLY

      // AND ONCE IT's DONE, store canvas.w and .h seprately?
      // for visuals calculations - measure when offscrean etc.

      resizeCanvas(windowWidth, 500);
      currentCanvasWidth = windowWidth;
    }
  };
}

export default sketchMotionHero;
