import toxi from "toxiclibsjs";

export const ParticlesFieldPalette = [
  toxi.color.TColor.newHex("ED306C"),
  toxi.color.TColor.newHex("00002B"),
  toxi.color.TColor.newHex("44E3DF"),
  toxi.color.TColor.newHex("FBA9CF").setBrightness(0.9),
  toxi.color.TColor.newHex("308C9B"),
  toxi.color.TColor.newHex("22AEAD"),
  toxi.color.TColor.newHex("D979A5"),
  toxi.color.TColor.newHex("2D7187"),
  toxi.color.TColor.newHex("3E537A"),
];

export const ParticlesFieldOptions = {
  running: true,
  numStreams: 500,
  distort: 0.8,
  strength: Math.PI,
  scalar: 0.01,
  step: 2,
  tailLength: 0.08,
  strokeWeight: 3,
};
