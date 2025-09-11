// Function declaration
// function addNumbers(a,b) {
//     return a + b;   
// }

//Function expression
const add = function(a, b) {
    return a + b;
}

// Arrow function
// const addArrow = (a, b) => {return a + b};   

// Function constructor
// const addConstructor = new Function('a', 'b', 'return a + b');
// console.log(addConstructor(2, 3));    

//rest operator
/*
    function add (val1, val2, ...value){
        let sum=0;
        for(let i =0;i<value.length; i++){
            sum+=value[i];
        }
        return sum;
    }

    console.log(add(1,2,3,4)); // val1 =1, val 2 = 2, value=[3,4]
*/

//implicit return
//const add = (value1, value2) => value1 + value2; // implicit return
//console.log(add(2,3));

const user = {
    name: "john",
    age: 20,
    greet: function() {
        console.log("Hello, " + this.name)
    }  
} 
//   console.log("Hello, " + this.name)  // Hello, Undefined
//   user.greet(); // Hello, john

//console.log(addTwo(3)); // 5, as function declarations are hoisted
function addTwo(num) {
    return num + 2;
}
//console.log(addThree(3)) // hoisting is not applicable as we stored function in a variable
const addThree = function(num) {
    return num + 3;
}

//implicit return (below) and explicit return (above) examples
// In implicit return you Dont have to return the value explicitly;
const addFour =(num) => (num +4);// implicit return


/* IIFE - Immediately Invoked Function Expression
()() - the first () converts the function into an expression and the second () invokes the function immediately
 in first we have the wwhole function as definition and in second we are invoking it immediately
>>>>>>While writing IIFE, dont forget to put ; at the end of the previous statement<<<<<<
 */

//---Regular function IIFE
(function addFive(num) {
    console.log(num + 5);
})(7); //12 

//---Arrow function IIFE
( (num)=>console.log(num+5) )(10); //15

