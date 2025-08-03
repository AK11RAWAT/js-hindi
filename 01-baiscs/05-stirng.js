const name = "jitesh"
const repocount = 50
console.log (name +repocount+ "value ");

//it's is modern way to use without putting any + sign u just have to use bactick(``)and ${}and write anything in it and//
//it will be printed//
console.log(`hello my name is ${name} and my repcount is ${repocount}`);


const gameName = new String("hitesh-hc");

//this is use to know that what variable is seating at that no and it's start with 0
console.log (gameName[0]);
//console.log (gameName.__prototype.__);


console.log (gameName.length);
//used to find length of variable or number of variable
console.log(gameName.toUpperCase(3));
//covert letter in to uppercase

console.log(gameName.charAt(5));
// it is used to know that which character or variable sit a which no 

const newstring = gameName.substring(0,9);
console.log(newstring);
//substring is used to get portion of a string. it have start index and a end index
//start-index - the postion to start from.
//end - index =the position to stop . if end index is not given it goes till the end of the string .
// Negative - index = not allowed.

const anontherString = gameName.slice(-8,4);
console.log(anontherString);

//slice is same as substring but it has only one difference that is it can take value in negative .

const newStringOne = "   hitesh    "
console.log(newStringOne.trim());
// want to remove these extra spaces so we could use .trim 

//Replace  it is used to replace anything you want to replace from your string .
const url = "http://hitesh.com/hitesh %20 chaudhary"
console.log(url.replace('%20 ' ,'-'));


//split 
//it basically wukk split according to whaat you type '' inside these .
const gamesName = new String('hitedh- hc - com');
console.log(gamesName.split('-'));
