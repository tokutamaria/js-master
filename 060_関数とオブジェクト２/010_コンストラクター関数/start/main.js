function Person(name, age) {
  this.name = name;
  this.age = age;
  this.hello =function() {
  console.log('hello' + this.name);
}
}


const bob = new Person('Bod' , 18);
const Tom = new Person('Tom' , 18);
const Sun = new Person('Sun' , 18);
console.log(bob);
console.log(Tom);
console.log(Sun);

bob.hello();
Tom.hello();
