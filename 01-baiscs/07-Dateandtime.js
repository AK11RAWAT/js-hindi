//Date 
let mydate = new Date ()
// console.log(mydate); it give date in this format (2025-08-08T14:56:25.725Z)


// console.log(mydate.toDateString()); .toDateString it give date in thisformat (Fri Aug 08 2025)

console.log(mydate.toLocaleString());//.tolocaleString what it does is it give date like this(8/8/2025, 2:56:25 PM)

console.log(typeof mydate); //output is object date is object in java script

let mycreatedDate = new Date(2023,0 ,23)//0 it is for month because month in array start from 0to11
console.log(mycreatedDate.toDateString());

let mycreateddate = new Date ("2023-01-14")
console.log(mycreateddate.toLocaleString());//whe we use (DD-MM-YYYY)so our month start from 1 not 0 

let myTimestamp = Date .now()//use for poll to know who did fastest ans to make him a wineer so we use time stamp
console.log(myTimestamp);//used to convert in millisecond

let newDate = new Date ()
console.log(newDate);

//if you want to know month ,year you can use .getmonth() it mean it starting from 0 to11

console.log(newDate.getMonth()+1);
// if you to want to get month from 1 to 12 then just add +1in (.getmonth()+1) like this 

newDate.toLocaleString("default",{
 weekday:"long"
 
})
    console.log(newDate.toLocaleString("default",{
 weekday:"long"
 
}));








