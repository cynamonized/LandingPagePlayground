import toxi from "toxiclibsjs";
import { getRandomVector } from "../helpers/ParticlesField";

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
  componentColor
) => {
  // let i = 0;
  let l = streams.length;
  let stream;

  addOffsetCallback(ParticlesFieldOptions.distort);

  for (let i = 0; i < streams.length; i++) {
    p.background(...componentColor, 0.05);
    stream = streams[i];

    changeLastPosCallback(stream);
    changePtCallback(stream, ParticlesFieldOptions.scalar, offset);

    let noise = perlin.noise(pt.x, pt.y) - 0.5;
    let angle = ParticlesFieldOptions.strength * noise;
    let dir = toxi.geom.Vec2D.fromTheta(angle);

    stream.addSelf(dir.normalize(ParticlesFieldOptions.step * 3));
    p.stroke(stream.color);
    p.line(lastPos.x, lastPos.y, stream.x, stream.y);

    if (!bounds.containsPoint(stream)) {
      stream.set(getRandomVector());
    }
  }
};

// 1. Throttle doesn't work -> it could be added as callback here?
//    not sure how it works, it should work all the time (???)

// LHS < throttleStreams should be run once in the setup? no!
// It should be running contantly where it switched loops from
// one to another << org works like this TBD

// 2. >> Background color is changing because of alpha bckg()

// 3. Tail doesn't dissapear fully << bckg rendering issue
