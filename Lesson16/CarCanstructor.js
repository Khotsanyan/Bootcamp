function Car(model, milesPelGallon) {
  (this.model = model), (this.milesPelGallon = milesPelGallon);
  this.tank = 0;
  this.odometer = 0;
}
Car.prototype.fill = function (gallons) {
  this.tank += gallons;
};
Car.prototype.drive = function (distance) {
  let maxDistance = distance;
};
