const coding= ["javascript", "Java", "Python", "C++"];
// coding.forEach(function(language){
//     console.log("I love coding in " , language);
// })

// Arrow function in for each
//coding.forEach( (language) => {console.log("I love coding in " , language)} )

//user in Map
const map = new Map();
map.set(1, "one");
map.set(2, "two");
map.set(3, "three");
 
//map.forEach((key) => {console.log(key)})

let myObject = {
    "name": "John",
    "age": 30,    
    "city": "New York"
}

//myObject.forEach((value)=> {console.log(value)}) // this will give error as forEach is not a method of object