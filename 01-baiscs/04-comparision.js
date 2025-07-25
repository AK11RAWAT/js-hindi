//console.log(2>1);
//console.log(2>=1);
//console.log(2==1);
//console.log(2!=1);
//easy to ans true or false

//console.log("2">1);
//console.log("02">1);
//avoid this comparision while programming

console.log(null>0);
//console.log(null = 0);
console.log(null>=0);


/*reason is that an equality check== and conparision ><>= <=work differently
comparision convert null to a number treating it a 0 that why (3)nulll>=0 is true 
while null>0 is false */


//===this is strictcheck not only it check your value but also check your data


console.log("2"===2); 

//* * *  * * * * * **  * * ** * * * ****** ***** * * ** * * * * * * * ** * * * * *  * ** * * * * *  * *  ** * * * *  


//stack and heap memory 

//primitve datatype uses stack memory ***jo bhi apne declare kiya hoga uska apko copy milta hai
//non-primitive datatype uses heap memory***original langauge ka if you change anything changes will occur in real memory

//stack memory example

let myYoutubeName = "hiteshchaudhary.com"
let anotherName = myYoutubeName
anotherName = "chai-aur-code "
console.log(anotherName);
console.log(myYoutubeName);
console.log(anotherName);

//heap memory example 

let userOne ={
    email:"user@gmail.com",
    upi:"user@yhl",
}

let userTwo = userOne 
userTwo.email = "hitesh@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

