/*
1. Declare an array named 'teaflavors' that contains the strings '"green tea"', "black tea", and "oolong tea".
Access the first element of the array and store it in a variable named 'firstTea'.
*/

let teaflavors = ["green tea", "black tea", "oolong tea" ];

const firsttea = teaflavors[0];




/*
2. Declare an array named 'cities' containing "London", "Tokyo", "paris", and "New York". Access the third element in the array and store it in a variable named 'FavoriteCity'.
*/

let cities = ["London", "Tokyo", "paris", "New york"];

const favoritecity = cities[2];


// 3. you have an array named 'teatypes' containing "herbal tea", "white tea", and "masala chai". change the second element of the array to "jasmine tea".


let teatypes =[ "herbal tea", "white tea", "masala chai"];

 teatypes[1] = "jasmine tea";

console.log(teatypes);



// 4. Declare an array named 'citiesvisited' containing "mumbai" and "sydney". add "berlin" to the array the 'push' method.

let cityvisited = ["mumbai", "sydney"];
cityvisited.push("Berlin");
console.log(cityvisited);




// 5. you have an array named 'teaorders' with "chai", "iced tea", "matcha", and "earl grey". remove the last element of the array using the 'pop' method and store it in a variable named 'lastoder'.


let teaorders = ["chai", "iced tea", "matcha", "early grey"];

const lastorder = teaorders.pop();
console.log(teaorders);
console.log(lastorder);


// 6. you have an array named 'popularteas' containing "green tea", "oolong tea", and "chai". create a soft copy of this array named 'softcopyteas'.


let popularteas = ["green tea", "oolong tea", "chai"];
let softcopyteas = popularteas;
popularteas.pop();
console.log(popularteas);
console.log(softcopyteas);



// 7. you have an array named 'topcities' containing "berlin", 'singapore', and "new york". create a hard copy of this array named 'hardcopycities'.

let topcities = ["berlin", "singapore", "new york"]; 
let hardcopycities = [...topcities];
topcities.pop();
console.log(hardcopycities);



// 8. you have two arrays: 'europeancities' containing "paris" and "rome", and 'asiancities' containing "tokyo" and "bangkok".merge these two arrays into a new array named 'worldcities'.

let europeancities = ["paris", "rome"];
let asiancities = ["tokyo", "bangkok"];
let worldcities = europeancities.concat(asiancities);

console.log(worldcities);




// 9. you have an array named 'teamenu' containing "masala chai", "oolong tea", "green tea", and "earl grey". find the length of the array and store it in a variable named 'menulength'.


let teamenu = ["masala chai", "oolong tea", "green tea", "earl grey"];
let menulength = teamenu.length;


// 10. you have an array named 'citybucketlist' containing "kyoto", "london", "cape town", and "vancouver".check if 'london' is in the array and store the result in a variable named 'islondoninlist'.

let citybucketlist = ["kyoto", "London", "cape town", "vancouver"];
let islondoninlist = citybucketlist.includes("London");
console.log(islondoninlist);
 