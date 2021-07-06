function Person({ name, age, stomach = [] } = {}) {
  this.name = name;
  this.age = age;
  this.stomach = stomach;
}
Person.prototype.eat = function (...food) {
  if (this.stomach.length < 10) {
    this.stomach = [...this.stomach, ...food];
  } else throw new Error("TOO MACH FOOD");
};
Person.prototype.poop = function () {
  this.stomach = [];
};
Person.prototype.toString = function () {
  return `Person: ${this.name} ${this.age}`;
};
