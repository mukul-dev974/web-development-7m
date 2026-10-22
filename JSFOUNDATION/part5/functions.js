/*
1. write a funtion named 'maketea' and returns a string like "making green tea" when called with "green tea ". store the result in a variable named 'teaorder'.
*/
function maketea(typeoftea){
    return `making ${typeoftea}`;
}

let teaorder = maketea("green tea");
// console.log(teaorder);


/*
2. create a function named 'ordertea' that takes one parameter, 'teatype'. inside this function , create another function named 'confirmedorder' that returns a message like "order confirmed for chai". call 'confirmorder' from within 'ordertea' and return the result.
*/

function ordertea(teatype){
    function confirmedorder(){
        return `order confirmed for chai`;
    }
   return confirmedorder();
}

let orderconformation = ordertea("chai");
// console.log(orderconformation);

/*
3. write an arrow function named 'calculatetotal' that takes two parameters: 'price' and 'quantity' . the function should return the total cost by multiplying the 'price' and 'quantity' .store the result in a variable named 'totalcost'.
*/

const calculatetotal = (price, quantity) => {
    return price * quantity;
}
let totalcost = calculatetotal(500 * 100);

/*
4. write a function named 'processteaorder' that takes another function, 'maketea', as a parameter and call it with the argument "earl grey". return the result of calling 'maketea'.
*/
function maketea(typeoftea){
    return `making: ${typeoftea}`;
}


function processteaorder(teafunction){
    return teafunction("early grey");
}

 let order = processteaorder (maketea);
    // console.log(order);
    

/*
5. write a function named 'createTeammaker' that returns another function. the returned function should take one parameter, `teatype`, and return a message like "making green tea". store the returned function in a variable named 'teamaker' and call it with "green tea".
*/

function createteamaker(){
    return function(teatype){
        return `making ${teatype}`;
    }
}
let teamaker = createteamaker();
// let result = teamaker("green tea");
console.log(teamaker("green tea"));
