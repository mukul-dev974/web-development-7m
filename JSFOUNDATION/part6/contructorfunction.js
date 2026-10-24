function person(name, age){
  this.name = name;
  this.age = age;
}


function car(make, model){
  this.make = make;
  this.model = model;
}

let mycar = new car ("toyota", "sequoia");
// console.log(mycar);

let mynewcar = new car ("mahindra", "scorpio");
// console.log(mynewcar);


function tea(type){
  this.type = type;
  this.describe = function(){
    return `this is a cup of ${this.type}`;
  }
  
}
let lemontea = new tea("lemontea");
// console.log(lemontea.describe());


function Animal(species){
  this.species = species;
}

Animal.prototype.sound = function(){
  return `${this.species} makes a sound`;
}
let dog = new Animal("dog");
// console.log(dog.sound());

let cat = new Animal("cat");
// console.log(cat.sound());

function drink(name){
  if (!new.target) {
    throw new Error("drink must be called with new error");
    
  }
  this.name = name;
}
let tea = new drink("tea");
let coffee =  drink("coffee");