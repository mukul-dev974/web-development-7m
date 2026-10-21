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

