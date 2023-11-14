import p5 from "p5";
import { findProjection } from "../../Utilities/findProjection";

export class VehicleFollowPath {
  constructor(x, y, p) {
    this.pos = p.createVector(x, y);
    this.vel = p.createVector(0, 0);
    this.acc = p.createVector(0, 0);
    this.maxForce = 0.1;
    this.maxSpeed = 2;
    this.r = 10;
    this.p = p;
  }

  follow(path) {
    //Step 1 calculate future position
    let future = this.vel.copy();
    future.mult(20);
    future.add(this.pos);

    this.p.fill(255, 0, 0);
    this.p.noStroke();
    this.p.ellipse(future.x, future.y, 8);

    //Step 2 Is future on path?
    let target = findProjection(path.start, future, path.end);

    // added from page custom
    let dir = p5.Vector.sub(path.end, path.start);
    dir.normalize();
    dir.mult(30);
    let target_2 = p5.Vector.add(target, dir);
    //------

    this.p.fill(0, 255, 0);
    this.p.noStroke();
    this.p.ellipse(target.x, target.y, 8);

    this.p.fill(0, 111, 255);
    this.p.noStroke();
    this.p.ellipse(target_2.x, target_2.y, 8);

    this.p.strokeWeight(1);
    this.p.stroke(255, 255, 0);
    this.p.line(future.x, future.y, target.x, target.y);
    this.p.line(this.pos.x, this.pos.y, future.x, future.y);

    let d = p5.Vector.dist(future, target);
    if (d > path.r) {
      this.p.fill(255, 30, 50);
      this.p.noStroke();
      return this.seek(target_2);
    }
  }

  arrive(target) {
    //2nd argument true enables the arrival behavior
    return this.seek(target, true);
  }

  evade(vehicle) {
    let pursuit = this.pursue(vehicle);
    pursuit.mult(-1);
    return pursuit;
  }

  pursue(vehicle) {
    let target = vehicle.pos.copy();
    let prediction = vehicle.vel.copy();
    prediction.mult(35);
    target.add(prediction);
    this.p.fill(0, 0, 122);
    this.p.circle(target.x, target.y, 16);
    return this.seek(target);
  }

  flee(target) {
    return this.seek(target).mult(-1);
  }

  seek(target, arrival) {
    let force = p5.Vector.sub(target, this.pos);
    if (arrival) {
      let desiredSpeed = this.maxSpeed;
      let slowRadius = 50;
      let distance = force.mag();

      if (distance < slowRadius) {
        desiredSpeed = map(distance, 0, slowRadius, 0, this.maxSpeed);
      }

      force.setMag(desiredSpeed);
    }

    force.sub(this.vel);
    force.limit(this.maxForce);
    return force;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    this.p.stroke(255);
    this.p.strokeWeight(2);
    this.p.fill(255);
    this.p.push();
    this.p.translate(this.pos.x, this.pos.y);
    this.p.rotate(this.vel.heading());
    this.p.triangle(-this.r, -this.r / 2, -this.r, this.r / 2, this.r, 0);
    this.p.pop();
  }

  edges() {
    if (this.pos.y >= this.p.height + this.r) {
      this.pos.y = -this.r;
    }

    if (this.pos.y < -this.r) {
      this.pos.y = this.p.height + this.r;
    }

    if (this.pos.x < -this.r) {
      this.pos.x = this.p.width;
    }

    if (this.pos.x >= this.p.width + this.r) {
      this.pos.x = -this.r;
    }
  }
}

export class TargetOfVehicleFollowPath extends VehicleFollowPath {
  constructor(x, y, p) {
    super(x, y, p);
    this.angle_circle = TWO_PI;
    this.vel = p5.Vector.random2D();
    this.vel.mult(5);
  }

  show() {
    this.p.stroke(255);
    this.p.strokeWeight(2);
    this.p.fill(255, 123, 80);
    this.p.push();
    this.p.translate(this.pos.x, this.pos.y);
    this.p.circle(0, 0, this.r * 2);
    this.p.pop();
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  edges() {
    if (this.pos.y >= this.p.height - this.r) {
      this.pos.y = this.p.height - this.r;
      this.vel.y *= -1;
    }

    if (this.pos.y <= 0) {
      this.pos.y = this.r;
      this.vel.y *= -1;
    }

    if (this.pos.x <= 0) {
      this.pos.x = this.r;
      this.vel.x *= -1;
    }

    if (this.pos.x >= this.p.width - this.r) {
      this.pos.x = this.p.width - this.r;
      this.vel.x *= -1;
    }
  }
}

export class PathOfVehicleFollow {
  constructor(x1, y1, x2, y2, p) {
    this.start = p.createVector(x1, y1);
    this.end = p.createVector(x2, y2);
    this.r = 20;
    this.p = p;
  }

  show() {
    this.p.stroke(255);
    this.p.strokeWeight(2);
    this.p.line(this.start.x, this.start.y, this.end.x, this.end.y);

    this.p.stroke(255, 100);
    this.p.strokeWeight(this.r * 2);
    this.p.line(this.start.x, this.start.y, this.end.x, this.end.y);
  }
}
