const score = Number(400);
console.log (score);
const balance = new Number (100);
console.log(balance);
console.log(balance.toString());
console. log (balance.toString.length);


console.log(balance.toFixed(2));//to fixed will give point after value how many point it will give will decided 
//by the no you put inside the bracket if the no is 2 it will give two number after point and if the no is 
//3 it will give three number after point .


const otherNumber = 23.55553
console.log(otherNumber.toPrecision(3));
//it will give value rill three no before point included so the output will be 23.6
//it will also round off the no that is present as you can see that the no given was 23.55 and now if you look at the 
//output the output is the round of 23.55 .
const otheNumber = 123.896
console.log (otheNumber.toPrecision(3));
//it will round of the no

const hundreds = 1000000
console.log(hundreds.toLocaleString());
// it will give comas it by default will give you in US standard 
//but if you weite in indian standard just write this in bracket ('en-IN').
console.log(hundreds.toLocaleString('en-IN'));



//***************************   FOR DSA ****************************************************** ******************/

/*max-value - maximum value kitna  tak ja sakti ha 
min value - minmum value kitna tak ja sakti ha*/

/*math in java script*/

console.log(Math.abs(-4));
// if Math.abs() it only changes negative value to positive but it will not change positive value to negative 
  
console.log(Math.round(4.4));
//will do the round off the given value invthe bracket 
//it also has ceil which mean if the no the is a little bit greater than four so it will help to chossse the top value 

console.log(Math.floor(4.4));
//same as ceil there is property for choosing down value it help us to chosse the down value
  
console.log(Math.max(4,5,6,8));//help us to find the lower valuein an array

//just like this there is also a property called Math.max which help us to find the higher value in an array


console.log((Math.random(1)*10)+1);
//it willl Always give random value btw 0-1
//by  multiplying it by 10 now it will give value btw 0-9
//but by adding +1 it range will change again and now its range is 0-10

//short cut


const max = 20
const min = 10
console.log(Math.floor(Math.random()*(max-min+1))+min);//its is a formula 
