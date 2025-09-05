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

// console.log(Object.keys(jsUser)); // it will print all keys of object in array
// console.log(Object.values(jsUser)); // it will print all values of object in array
// console.log(Object.entries(jsUser)); // it will print all entries of object in array of arrays
// console.log(Object.hasOwn(jsUser, "name")); // it will check if object has own property or not


// for(let key in jsUser){
//     //console.log(key); // it will print all keys of object  
//     console.log(jsUser[key]); // it will print all values of object
// }    

// for(let key of Object.keys(jsUser)){
//     console.log(key); // it will print all keys of object            
// }
// for(let value of Object.values(jsUser)){
//     console.log(value); // it will print all values of object    
// }

//object destructuring
    // const {name, age, location} = jsUser; // it will create 3 variables
    // const {email: userMail} = jsUser; // it will create variable userMail

    //     console.log(userMail);
    //     console.log(name, age, location);
