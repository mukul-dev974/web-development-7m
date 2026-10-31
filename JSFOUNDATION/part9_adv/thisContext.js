const Person = {
    name: "mukul",
    greet(){
        console.log(`Hi, I am ${this.name}`);
        },
};

Person.greet();

const greetFunction = Person.greet;
greetFunction();

const boundGreet = Person.greet.bind({name: "radhe" });
boundGreet();

//bind, call and apply