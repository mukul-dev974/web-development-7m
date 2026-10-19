/*
1. write a 'for' loop that loops through the array  '["green tea", "black tea", "chai", "oolong tea"] and stops the loop when it finds "chai". store all teas before "chai" in a new array name 'selectedteas'.
*/

let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedteas = [];

for (let i = 0; i < teas.length; i++) {
    if (teas[i] === "chai") {
        break;
    }
    selectedteas.push(teas[i]); 

}
// console.log(selectedteas);

  
/*
2. write a 'for' loop that loops through the array ["london", "new york", "paris", "berlin"] and skips "paris". store the other cities in a new array named 'visitedcities'.
*/
let cities = ["london", "new york", "paris", "berlin"];
let visitedcities = [];

for (let i = 0; i < cities.length; i++) {
   if (cities[i] === "paris") {
    continue;
   }


    visitedcities.push(cities[i]);
}
// console.log(visitedcities);

/*
3. use a 'for-of' loop to iterate through the array [1, 2, 3, 4, 5] and stop when the number '4' is found. store the numbers before '4' in an arrat named 'smallnumbers'.
*/

let numbers = [1, 2, 3, 4, 5];
let smallnumbers = [];

for (const num of numbers) {
    if (num === 4) {
        break;
    }

    smallnumbers.push(num);
}
// console.log(smallnumbers);


/*
4. use a 'for-of' loop to iterate through the array ["chai", "green tea", "herbal tea", "black tea"] and skip "herbal tea". store the other teas in an array named 'preferredteas'.
*/
let teatype = ["chai", "green tea", "herbal tea", "black tea"];
let preferredteas = [];

for (const tea of teatype) {
    if (tea === "herbal tea") {
        continue;
    }

    preferredteas.push(tea);
} 
// console.log(preferredteas);




/*
5. use a 'for-in' loop to loop through an object containing city populations.stop the loop when the population of "berlin" is found and store all previous cities populations in a new object named citypopulations.

let citiespopulation = {
"london": 8900000,
"new york": 8400000,
"paris": 2200000,
"berlin": 3500000
};
*/

let citiespopulation = {
    "london": 8900000,
"new york": 8400000,
"paris": 2200000,
"berlin": 3500000
};

let citypopulations = {};

for (const city  in citiespopulation) {
  if (city == "berlin") {
    break;
  }
    citypopulations[city] = citiespopulation[city];
    
}
// console.log(citypopulations);

/*
6. use a 'for-in' loop to loop through an object containing city populations.
skip any city with a population below 3 million and store the rest in a new object named 'largecities'.

let worldcities = {
"sydney": 5000000,
"tokyo": 9000000,
"berlin": 3500000,
"paris": 2200000
};
*/

let worldcities = {
"sydney": 5000000,
"tokyo": 9000000,
"berlin": 3500000,
"paris": 2200000
};

let largecities = {};

for (const city in worldcities) {
   if (worldcities[city] < 3000000) {
    continue;
   }
    largecities[city] = worldcities[city];
}
// console.log(largecities);



/*
7. write a 'foreach' loop that iterates through the array ["early grey", "green tea", "chai", "oolong tea"].
stop the loop when "chai" is found, and store all previous tea types in an array named 'availableteas'.
*/

let teacollection = ["early grey", "green tea", "chai", "oolong tea"];
let availableteas = [];

teacollection.forEach(function(tea){
    if (tea === "chai") {
        return;
    }
    availableteas.push(tea);
}) 
// console.log(availableteas);

    


/*
8. write a 'foreach' loop that iterates through the array ["berlin", "tokyo", "sydney", "paris"]. skip "sydney" and store the other cities in a new array named 'travelcities'.
*/

let myworldcities = ["berlin", "tokyo", "sydney", "paris"];
let travelcities = [];

myworldcities.forEach((city) => {
    if (city === "sydney") {
        return;
    }
    travelcities.push(city);
});
// console.log(travelcities);



/*
9. write a 'for' loop that iterayes through the array [2, 5, 7, 9]. skip the value '7' and multiply the rest by 2. store the results in a new array named 'doublednumbers'.
*/

let mynumbers = [2, 5, 7, 9];
let doublednumbers = [];
for (let i = 0; i < mynumbers.length; i++) {
   if (numbers[i] === 7) {
    continue;
   }
   doublednumbers.push(numbers[i] * 2);
}


/*
10. use a 'for-of' loop to iterate through the array ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"] and stop when the length of the current tea name is greater than 10. store the teas iterated over in an array named 'shortteas'.
*/

let myteas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortteas = [];

for (const tea  of myteas) {
    if (tea.length > 10) {
        break;
    }
    shortteas.push(tea);
}
