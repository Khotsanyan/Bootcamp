function Person(name, age) {
  this.name = name;
  this.age = age;
  this.compareAge = function (person) {
    if (this.age > person.age) {
      return `${person.name} is younger than me`;
    } else if (this.age < person.age) {
      return `${person.name} is older than me`;
    } else return `${person.name} is the same age as me`;
  };
  return {
    compareAge,
    name: this.name,
    age: this.age,
  };
}
// Person.prototype.compareAge = function (person) {
//   if (this.age > person.age) {
//     return `${person.name} is younger than me`;
//   } else if (this.age < person.age) {
//     return `${person.name} is older than me`;
//   } else return `${person.name} is the same age as me`;
// };
const p1 = Person("Samuel", 24);
const p2 = Person("Joel", 36);
const p3 = Person("Lily", 24);
console.log(p1.compareAge(p3));
