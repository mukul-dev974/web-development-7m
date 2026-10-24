let car = {
    make: "toyota",
    model: "camry",
    year: "2026",
    start:function () {
        return `${this.make} car got started in ${this.year}`;
},
};
// console.log(car.start());

function Person(name, age){
    this.name = name;
    this.age = age;
    }
    let john = new Person("john doe", 20);
    // console.log(john.name);


    function Animal(type){
        this.type = type;
    }
    Animal.prototype.speak = function(){
        return `${this.type} makes a sound`;
};

Array.prototype.mukul = function(){
return `custom method ${this}`
};
let myArray = [1, 2, 3 ];
// console.log(myArray.mukul());

let newarray = [1, 2, 3, 4, 5, 6];
// console.log(newarray.mukul());


class  vehicle{
    constructor(make, model){
        this.make = make;
    this.model = model;
    }
    start(){
        return `${this.model} is a car from ${this.make}`;
    }   
}
    class Car extends vehicle{
        drive(){
            return `${this.make} :this is an example of inheritance`;

        }
    }
let myCar = new Car("toyota", "cromaly");
// console.log(myCar.start());
    //  console.log(myCar.drive());
     
    let vehOne = new vehicle("toyota", "corolla");
    console.log(vehOne.make);
    