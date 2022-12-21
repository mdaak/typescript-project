let playerName;
playerName = 'ff';
playerName = 'jk';
let fruit = [];
fruit.push(5);
fruit.push('5');
console.log(fruit);
let person = {
    name: 'apple',
    age: 56
};
// lesson 4 
let varName = [];
let nexName = [];
let stringNumberArray = [];
let objectName;
objectName = {
    name: 'alamin',
    age: 37,
    gender: true
};
// lesson 5  any makes typescript to norrmal javascrip
let a;
// lesson6  how to use function;
//function type diclar in type script is like that
let myFunc;
//myFunc is only assignable for function
// myFunc = 89;
//Type 'number' is not assignable to type 'Function'.
myFunc = (a, b, c) => {
    console.log(`lesson ${a} function in typescript line ${b} optional value${c}`);
};
myFunc('6', '37');
const userDetails = (id, user) => {
    console.log(`user id is ${id}, name is ${user.name} and age is ${user.age}`);
};
const sayHello = (user) => {
    console.log(`Hello ${user.age > 50 ? 'sir' : 'mr'} ${user.name}`);
};
userDetails(2, { name: 'ff', age: 50 });
sayHello({ name: 'ff', age: 58 });
// lesson 8 function signature
let add;
add = (a, b) => {
    return a + b;
};
let calculation;
calculation = (ae, bf, cg) => {
    if (cg = "add") {
        return ae + bf;
    }
    else {
        return ae - bf;
    }
};
// # # lesson 9 working with class
class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
}
const mashrafi = new Player('Mashrafi', 40, 'bagladesh');
console.log(mashrafi);
//practice type script in class
// 10 ## lesson 10 access Modifiers 
import { Fruits } from './classes/Fruit.js';
const apple = new Fruits('apple', 'blue', 20);
const jackfruit = new Fruits('jackfruit', 'yeallow', 3);
console.log(apple.fColor);
console.log(jackfruit.fName);
let fruits = [];
fruits.push(apple);
// practice another access midifier
class Animals {
    constructor(name, count, color) {
        this.name = name;
        this.count = count;
        this.color = color;
    }
    animal() {
        return (`ther ${this.count} ${this.name} is ${this.color} color`);
    }
}
const cow = new Animals('cow', 5, 'black');
console.log(cow);
function drawRectangle(option) {
    let height = option.height;
    let width = option.width;
}
drawRectangle({
    height: 40,
    width: 30,
});
function squre(option) {
    let height = option.height;
    let width = option.width;
}
let threeDoption = {
    height: 20,
    width: 30,
    length: 10
};
squre(threeDoption);
//
