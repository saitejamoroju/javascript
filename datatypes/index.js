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
// console.log(Math.floor(Math.random()*(20-10+1))+10); 


//date and time

let myDate= new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
 
// let mycreateDate=new Date(2024,0,23,5,3)
let mycreateDate=new Date("2023-01-14")
// console.log(mycreateDate.toLocaleString());

let myTimeStamp=Date.now()
// console.log(myTimeStamp); 
// console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth());  

// arrays-----------------------------------------------

const array=[1,2,3,4,5]
const array1=['a','b','c','d']
array.push(6);
array.pop()
// array.unshift(9)//added at the begining of the array


const newarray=array.join()//this will convert into string
// console.log(array);//[9,1,2,3,4,5]
// console.log(newarray);//9,1,2,3,4,5

const myn1=array.slice(1,3)
// console.log(myn1);//2,3

const myn2=array.splice(1,3)
// console.log(myn2);//2,3,4

// console.log(array);



//----------------arrays part 2-----------------------


const marvelheroes=['a','b','c']
const dcheroes=['d','e','f']
// marvelheroes.push(dcheroes)//['a','b','c',['d','e','f']]
// console.log(marvelheroes[2][1]);//undefined
// console.log(marvelheroes[3][1]);//'e'
// console.log(marvelheroes);
// marvelheroes.concat(dcheroes)//['a','b','c',['d','e','f']]
// console.log(marvelheroes);


//spread operator
const allnewheros=[...marvelheroes, ...dcheroes]//[ 'a', 'b', 'c', 'd', 'e', 'f' ]
// console.log(allnewheros);

const anotherarray=[1,2,3,[4,5,6],7,[8,9,10]]
const realanother=anotherarray.flat(Infinity)//infinity is depth of array need to be flatten
// console.log(realanother);


// console.log(Array.isArray("saiteja"));
// console.log(Array.from("saiteja"));
// console.log(Array.from({name:"saiteja"}));

let score1=100
let score2=200
let score3=300
// console.log(Array.of(score1,score2,score3));//converted into array



//-----------------------------------objects
//singleton 
//object literals
const JsUser={
    name:"sai",
    age:22,
    location:"hyde",
    email:"tejagmail.com",  
}
//way of accessing
// console.log(JsUser.email);
// console.log(JsUser["email"]);

JsUser.email="abc@gmail.com"
// Object.freeze(JsUser)
// console.log(JsUser);

JsUser.greeting=function() {
    // console.log(`hello JS user ${this.age}`);
}
// console.log(JsUser.greeting());


const regularUser={
    email:"tejamoroju@gmail.com",
    fullname:{
        userfname:{
            firstname:"sai",
            lastname:"teja"
        }
    }
}
// console.log(regularUser.fullname.userfname.firstname);


const obj1={1:'a',2:'b'}
const obj2={3:'c',4:'d'}
// const obj3={obj1,obj2}//combining of obj's
const obj3=Object.assign({},obj1,obj2)//combining of obj's or use spread operator
//{} -> is used that means all the ele in obj1,obj2 goes in to empty object
// console.log(obj3);

// objects part 2


const course={
    courseName:"js in hindi",
    price:'999',
    CourseInstructor:"sai"
}
const {CourseInstructor}=course
// console.log(CourseInstructor);

const navbar=({company})=>{}//parameters means de constructor



//functions-------------------------------
function addTwoNum(num1,num2){
    return num1+num2
}

const res=addTwoNum(3,5)
// console.log(`result ${res}`);


//rest operator in function
// function calculatePrice(...num1){
//     return num1
// }
// console.log(calculatePrice(200,300,400,500));//[200,300,400,500]



function calculatePrice(val1,val2,...num1){
    return num1
}
// console.log(calculatePrice(200,300,400,500));//[400,500]->val1 takes 200 & val2 takes->300 

/* 
const user={
    name:"sai",
    price:199
}
 function handleObj(anyobj){
    console.log(`username is ${anyobj.name} and price is ${anyobj.price}`);
    // username is sai and price is 199
 }
 handleObj(user)
 */

 const arr=[200,300,400]
 function secondval(array){
    return array[1]
 }
//  console.log(secondval(arr));



