import {
  ParticlesFieldPalette,
  ParticlesFieldOptions,
} from "./ParticlesFieldSettings";
import toxi from "toxiclibsjs";

export const throttleStreams = (width, height) => {
  let streamsTemp = [];

  while (ParticlesFieldOptions.numStreams > streamsTemp.length) {
    streamsTemp.push(createStream(width, height));
  }
  while (ParticlesFieldOptions.numStreams < streamsTemp.length) {
    streamsTemp.shift();
  }

  return streamsTemp;
};

export const createStream = (width, height) => {
  var vec = getRandomVector(width, height);
  vec.color =
    ParticlesFieldPalette[
      Math.floor(Math.random() * ParticlesFieldPalette.length)
    ].toRGBACSS();
  return vec;
};

export const getRandomVector = (width, height) => {
  return new toxi.geom.Vec2D(Math.random(), Math.random()).scaleSelf(
    width,
    height
  );
};
