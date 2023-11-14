export const VehicleFollowPath_Engine = (vehicle, path, p) => {
  path.end.y = p.mouseY;
  path.show();
  let force = vehicle.follow(path);
  vehicle.applyForce(force);
  vehicle.edges();
  vehicle.update();
  vehicle.show();
};
