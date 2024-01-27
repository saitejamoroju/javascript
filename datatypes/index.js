// console.log("hello");
"use strict";//this treats all js code as newer version
// Number -2^53
// BigInt
// Boolean 
// Null -> (typeof null)=object
// undefined - this empty one by default-type=undefined
//symbol-unique
//typeof-> to check the type 




//number conversion
// let score="100";
// console.log(typeof score);
// let valueInNumber1=Number(score)//converting into number
// console.log(typeof valueInNumber1);

// let score2="33abc"
// let valueInNumber2=Number(score2)//converting into number
// console.log(valueInNumber2);//op:NaN

// let score1=null
// let valueInNumber3=Number(score1)//converting into number
// console.log(valueInNumber3);//op:0


// let score1=undefined
// let valueInNumber3=Number(score1)//converting into number
// console.log(valueInNumber3);//op:NaN


// let score1=undefined
// let valueInNumber3=String(score1)//converting into number
// console.log( valueInNumber3);//op:NaN

//*************** operations **************************

//  console.log("1"+2);//12
//  console.log(1+"2");//12
//  console.log("1"+2+2);//122
//  console.log(1+2+"2");//32

// console.log(+true);//1
// console.log(true+);//error

// console.log("2">1);//true;

// console.log(null>0); //false
// console.log(null==0);//false
// console.log(null>=0);//true //coz comparision 
            //converts null to a number so it treats as 0


            //primitive data types
            //string ,Number,Boolean,null,undefined,symbol,BigInt
//const bigNumber=(56451511515135156151n)->it can be converted into bigint 

 //NOn primitive data types-Array,objects,functions
 //arrys
//  const heros=['a','b','c']
// //  object
//     let myObj={
//         name:"saiteja",
//         age:22,
//         address:"Nlg"
//     }
// //function
// const myFunction =function(){
//     console.log("hello world");
// }
// myFunction()
//---------------------------------------------------

// Stack(primitive ), Heap(Non-Primitive)

// --------------------------------------------------------

// const name="saiteja"
// const age=21
// console.log(`My name is ${name} and my age is ${age}`);
//------------------------------------------------------------
const gameName=new String('abcdefg')////creation of string in the form of object and key value pair
// console.log(gameName); 
// console.log(gameName.toUpperCase());

const newString=gameName.substring(0,4)
// console.log(newString);

const newString1=gameName.slice(-6,4)
// console.log(newString1);

const string="           saiteja           ";
// console.log(string.trim());

const str="https://tejamoro%20@gmail.com"
// console.log(str.replace('%20','ju'));

//------------------------Numbers & Math-------------

const score=400
// console.log(score);

const balance= new Number(100)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toFixed(2));

const hundreds=1000000
// console.log(hundreds.toLocaleString('en-IN'));//10,00,000 

// console.log(Math.random());
// console.log(Math.random()*100);

//to get values from 10-20 //1 is added to avoid zero
console.log(Math.floor(Math.random()*(20-10+1))+10);
