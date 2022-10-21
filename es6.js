'use strict';

// block scopes 

const xyz = () => {
    var a = 'a';
    let b = 'b';
    const c = 'c'; 
    console.log(a,b,c,'hello');
}
xyz(); 

try{
    console.log(a,b,c,'hello');
}
catch(error){
    console.error('b & c are block scope');
}

// arroww functions

const add = (a,b) => a + b;
console.log(add(1,2));

//improved object litrel & trailing commo

const details = {
    'first Name' : 'dhana',
    'last Name' : 'B',
    getName(){
        console.log('hello');
        return 'world'
    },
}

console.log(details.getName());//////
console.log(details);

//shorthand properties

const tamil = 65;
const subjects = {
    tamil,
    english: 34,
}

console.log(subjects);

// default params

const sub = (a=0,b=2) => a - b;
console.log(sub(3));

//rest params

const addition = (a,b,...c) => {
    return a+b;
};
console.log(addition(1,2,3,4,5));

//array destrucrtuing

const x = [1,2,3,4,5];
const[a,b] = x;
console.log(a,b);

//object destructuring

const y = {
    d : 1,
    e : 2,
    f : 3,
}

const {d,e,f} = y;
console.log(d,e,f);

// spread operator
 const cars = ['saab','volvo','BMW'];
 const cars1 = ['fiat',...cars,'toyoto'];
console.log(cars1);