//for loop
// let heros = ["spiderman", "ironman", "thor", "captain america"];
// for(let i =0; i< heros.length; i++){
//     console.log(`My favorite hero is ${heros[i]}`);
    
// }

//while loop
// let i =0;
// while(i<5){
//     console.log(i);
//     i++;
// }

// for of loop
let heros = ["spiderman", "ironman", "thor", "captain america"];
// for(let hero of heros){
//     console.log(hero);   
// }

// let randomArray = [1, "hello", true, null, undefined, 3.4];
// for(let value of randomArray){
//     console.log(value, " ", typeof value);

// }
// console.log(value);

//>>>>>>>>>>>>>> val =5; // this will create a global variable <<<<<<<<<<<<<<<<<

// ++++++++++++++++++ for in loop +++++++++++++++++++++++
for(let index in heros){
    console.log(index); // prints the index
    console.log(heros[index]); // prints the value at that index
}