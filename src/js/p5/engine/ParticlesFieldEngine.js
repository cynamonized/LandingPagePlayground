import toxi from "toxiclibsjs";
import { getRandomVector } from "../helpers/ParticlesField";
import { createStream } from "../helpers/ParticlesField";

export const ParticlesField_Engine = (
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
  componentColor,
  componentWidth,
  componentHeight,
  compColorFortmatted,
  backgroundImage,
  dotsCanvas
) => {
  let l = streams.length;
  let stream;

  p.image(backgroundImage, 0, 0);
  // backgroundImage.resize(componentWidth, 0);

  addOffset(ParticlesFieldOptions.distort);

  for (let i = 0; i < streams.length; i++) {
    stream = streams[i];

    changeLastPos(stream);
    changePt(stream, ParticlesFieldOptions.scalar, offset);

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

  // To use if no image - comment below if image is not here
  ////////////////////////////////////////////////////////////
  // p.background(13, 21, 34, 50);
  ///////////////////////////////////////////////////////////

  dotsCanvas.image(backgroundImage, 0, 0);
  // backgroundImage.resize(componentWidth, 0);
  dotsCanvas.tint(255, 40);
  p.image(dotsCanvas, 0, 0);
};
