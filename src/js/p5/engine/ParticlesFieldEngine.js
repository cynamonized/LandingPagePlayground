import toxi from "toxiclibsjs";
import { getRandomVector } from "../helpers/ParticlesField";
import { createStream } from "../helpers/ParticlesField";

export const ParticlesField_Engine = (
  streams,
  offset,
  addOffsetCallback,
  p,
  ParticlesFieldOptions,
  lastPos,
  changeLastPosCallback,
  pt,
  changePtCallback,
  perlin,
  bounds,
  componentColor,
  componentWidth,
  componentHeight,
  compColorFortmatted
) => {
  // let i = 0;
  let l = streams.length;
  let stream;

  addOffsetCallback(ParticlesFieldOptions.distort);

  for (let i = 0; i < streams.length; i++) {
    stream = streams[i];

    changeLastPosCallback(stream);
    changePtCallback(stream, ParticlesFieldOptions.scalar, offset);

    let noise = perlin.noise(pt.x, pt.y) - 0.5;
    let angle = ParticlesFieldOptions.strength * noise;
    let dir = toxi.geom.Vec2D.fromTheta(angle);

    stream.addSelf(dir.normalize(ParticlesFieldOptions.step * 3));
    p.stroke(stream.color);
    p.strokeWeight(ParticlesFieldOptions.strokeWeight);
    p.line(lastPos.x, lastPos.y, stream.x, stream.y);

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

  p.blendMode(p.REMOVE);
  p.colorMode(p.RGB, 13, 21, 34);
  // WOW
  // p.blendMode(p.DIFFERENCE);

  p.background(
    `rgba(${compColorFortmatted},${ParticlesFieldOptions.tailLength})`
  );

  p.blendMode(p.BLEND);
};

// 3. Tail doesn't dissapear fully << bckg rendering issue
