import {
  ParticlesFieldPalette,
  ParticlesFieldOptions,
} from "./ParticlesFieldSettings";

// let canvas = document.getElementById("example");
// let ctx = canvas.getContext("2d");

// P5 is my canvas and context;

let perlin = new toxi.math.noise.PerlinNoise();
let bounds = new toxi.geom.Rect();
let lastPos = new toxi.geom.Vec2D();
// let gui;
let offset = 0;
let options;
let streams = [];
let palette;

// setCanvasSize();
// ctx.fillStyle = "#000000";
// ctx.strokeStyle = "#ff0000";
// ctx.lineWidth = 1.5;

// GUI -> Irrelevant !!!

// gui = new dat.GUI();
// gui.add(options, "running").onChange(function () {
//   if (options.running) {
//     draw();
//   }
// });
// gui
//   .add(options, "numStreams", 1, 4500, 1.0)
//   .name("# Streams")
//   .onChange(throttleStreams);
// gui.add(options, "step", 0.25, 10, 0.25).name("Speed");
// gui.add(options, "distort", -0.5, 0.5, 0.001).name("Progression");
// gui.add(options, "strength", 0.01, Math.PI * 2, 0.01).name("Directional");
// gui.add(options, "scalar", 0.01, 0.25, 0.01).name("Scalar");

// function throttleStreams() {
//   while (options.numStreams > streams.length) {
//     streams.push(createStream());
//   }
//   while (options.numStreams < streams.length) {
//     streams.shift();
//   }
// }

// throttleStreams();

// function setCanvasSize(){
//     canvas.width = window.innerWidth;
//     canvas.height= 500;
//     bounds.set( 0, 0, canvas.width, canvas.height );
// }
