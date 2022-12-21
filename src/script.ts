let playerName:string;

playerName = 'ff';
playerName = 'jk';

let fruit = []

fruit.push(5)
fruit.push('5')
console.log(fruit)

let person = {
    name:'apple',
    age:56
}

// lesson 4 
let varName:number[]=[];
let nexName:string[]=[];
let stringNumberArray:(string|number|boolean)[]=[];
let objectName:{
    name:string,
    age:number,
    gender:boolean
};
objectName={
    name:'alamin',
    age:37,
    gender:true
}
// lesson 5  any makes typescript to norrmal javascrip

let a:any

// lesson6  how to use function;
//function type diclar in type script is like that
let myFunc:Function; 
//myFunc is only assignable for function
// myFunc = 89;
//Type 'number' is not assignable to type 'Function'.

myFunc=(a:string, b: string, c?:string)=>{
    console.log(`lesson ${a} function in typescript line ${b} optional value${c}`)
}
myFunc('6','37')

// lesson 7 type aliases
type stringOrNumber=string|number;
type userType = {name:string;age:number}
const userDetails =(
    id:stringOrNumber,
    user:userType
)=>{
    console.log(`user id is ${id}, name is ${user.name} and age is ${user.age}`)
}

const sayHello = (user:userType)=>{
    console.log(`Hello ${user.age>50?'sir':'mr'} ${user.name}`)
}
userDetails(2,{name:'ff',age:50});
sayHello({name:'ff',age:58})

// lesson 8 function signature

let add:(x:number, y:number)=> void;
add=(a:number,b:number)=>{
    return a+b
}


let calculation:(e:number,f:number,g:string)=> number;
calculation=( ae:number,bf:number,cg:string)=>{
    if(cg="add"){
        return ae+bf
    }else{
        return ae-bf
    }
}

// # # lesson 9 working with class

class Player{
    name:string;
    age:number;
    country:string;
    constructor(n:string,a:number,c:string){
        this.name=n;
        this.age=a;
        this.country=c;
    }
    play(){
        console.log(`${this.name} from ${this.country} is playing`)
    }
}

const mashrafi = new Player('Mashrafi',40,'bagladesh')
console.log(mashrafi)

//practice type script in class



// 10 ## lesson 10 access Modifiers 

import {Fruits} from './classes/Fruit.js'

const apple = new Fruits('apple', 'blue', 20);
const jackfruit = new Fruits('jackfruit','yeallow', 3)
console.log(apple.fColor)
console.log(jackfruit.fName)
let fruits:Fruits[]=[];
fruits.push(apple)

// practice another access midifier

class Animals{
   
    constructor(
        readonly name:string,
        public count:number,
        readonly color:string,
    ){}
    animal(){
        return(
            `ther ${this.count} ${this.name} is ${this.color} color` 
        )
    }
}
const cow = new Animals('cow', 5, 'black')
console.log(cow)

// ### 11 module system
    // at first create class folder.
    //in side folder create a tsfile
    //place class in side folder with export
    //import that class wher it need to use.
    // and inside tsconfig target should be es2016 and should be es2015.

 //## 12 interfaces... ... ...
interface rectangleOption{
    height:number;
    width:number
}
 function drawRectangle ( option:rectangleOption){
    let height = option.height;
    let width = option.width;
 }

 drawRectangle({
    height:40,
    width:30,
 })
  
// interface practicd  example with referance avoid strict checking

interface squreOption{
    height:number,
    width:number
}
function squre (option:squreOption){
    let height = option.height;
    let width = option.width
}
let threeDoption = {
    height:20,
    width:30,
    length:10
}
squre(threeDoption)

//