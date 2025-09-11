let myNums =[1,2,3,4,5,6,7,8,9,10];

let values= myNums.map((value)=>value*2); // map takes a callback function as an argument and returns a new array
// The callback function is called for each element in the array and should return the new value

//console.log(values);

// similar to map we have reduce
let numbs = myNums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// Here 0 is the initial value of accumulator
// accumulator is the value returned by the last execution of the callback function

//console.log(numbs); // 55


// the difference between map and reduce is that map returns a new array while reduce returns a single value.

//reduce in array of objects
let cart = [
    {Product: "Product1", price: 100},
    {Product: "Product2", price: 200},
    {Product: "Product3", price: 300},
    {Product: "Product4", price: 400},
]   

let total =cart.reduce((total, item) => (item.price +total),0)
console.log(total);
