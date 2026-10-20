/*
1. write a 'while' loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named 'sum'.
*/

let sum = 0;
let i = 1;

while (i <= 5) {
    sum += i; // sum = sum + i;
    i++;
}

// console.log(sum);


/*
2. write a 'while' loop that counts down from 5 to 1 and stores the numbers in an array named 'countdown'.
*/

let countdown = [];
let j = 5;

while (j > 0) {
    countdown.push(j);
    j--;
}
// console.log(countdown);


/*
3. write a 'do while' loop that prompts a user to enter their favorite tea type until they enter "stop". store each tea type in an array named 'teacollection'.
*/

// let teacollection = [];
// let tea;

// do {
//     tea = prompt('enter your favorite tea (type "stop" to finish.)');

// if (tea !== "stop") {
//     teacollection.push(tea);
// }

// } while (tea !== "stop");



/*
4. write a 'do while' loop that adds numbers from 1 to 3 and stores the result in a variable named 'total'.
*/

let total = 0;
let k = 1;

do {
    total += k;
    k++;

} while (k <= 3);
// console.log(total);
 

/*
5. write a 'for' loop that multiples each element in the array '[2, 4, 6]' by 2 and stores the results in a new array named 'multipliednumbers'.
*/
let multipliednumbers = [];
let numbers = [2, 4, 6];

for (let l = 0; l < numbers.length; l++) {
//    takennumber = numbers[l] * 2;
//    multipliednumbers.push(takennumber);

multipliednumbers.push(numbers[l] * 2);  

}
// console.log(multipliednumbers);

/*
6. write a 'for' loop that lists all the cities in the array ["paris", "new york", "tokyo", "london"] and stores each city in a new array named 'citylist'.
*/
let cities = ["paris", "new york", "tokyo", "london"];
let citylist = [];

for (let c = 0; c < cities.length; c++) {
    const mycity = cities[c];
    citylist.push(mycity);
}

console.log(citylist);


