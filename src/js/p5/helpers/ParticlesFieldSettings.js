import toxi from "toxiclibsjs";

export const ParticlesFieldPalette = [
  toxi.color.TColor.newHex("1c0f17"),
  toxi.color.TColor.newHex("271d2e"),
  toxi.color.TColor.newHex("2c3857"),
  toxi.color.TColor.newHex("155e73").setBrightness(0.9),
  toxi.color.TColor.newHex("e8ca59"),
  toxi.color.TColor.newHex("891b1b"),
];

export const ParticlesFieldOptions = {
  running: true,
  numStreams: 500,
  distort: 0.8,
  strength: Math.PI,
  scalar: 0.01,
  step: 2,
  tailLength: 0.1,
  strokeWeight: 2,
};
