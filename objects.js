//Symbol is used to create unique property of object
const userSymbol = Symbol("userID");


//objects can be declared in 2 ways - Literal, Constructor

//createion of object using Literal
const jsUser = {
    name: "Rahul",
    [userSymbol]: 1234,
    age: 25,
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"],
    location: "Delhi",
    email: "rahul@google.com"
}

//creation of object using Constructor
//const newUser = new Object();

// console.log(jsUser);

// ways to print properties of object
// console.log(jsUser.email); //dot notation
// console.log(jsUser["email"]); // it is useful when we want to access property using variable

jsUser.email = "rahul@amazon.com"
// console.log(jsUser.email);
//Object.freeze(jsUser); // it will not allow to change or add any property in object
//jsUser.email = "rahul@chatgpt.com" // it will not change the email
//console.log(jsUser.email); //it will print old email only


// console.log(jsUser[userSymbol]);
// console.log(userSymbol);

jsUser.greeting = function(){
    console.log("Hello Rahul, welcome to the website");
    
};
// jsUser.greeting; // function reference
// jsUser.greeting(); // function call

const obj1 ={1: "a", 2:"b"};
const obj2 ={3: "c", 4:"d"};

const obj3 = {...obj1, ...obj2}; // merging of 2 objects
const obj4 = Object.assign({}, obj1, obj2); // merging of 2 objects
const obj5 = Object.assign(obj1, obj2, {5: "e"}); // merging of 2 objects with new property
// console.log(obj3);
// console.log(obj4);
// console.log(obj5);
// console.log(obj1); // it will change obj1 also because obj1 is passed by reference in obj5