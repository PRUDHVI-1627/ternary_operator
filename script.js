//DAY-1

//ternary operator = a shortcut to if{} and else{} statements helps to assign a variable based on a condition 
//condition ? codeIfTrue : codeIfFalse;

/*let age = 21;
let message = age >= 18 ? "You are an adult" : "You are a minor ";
console.log(message);

let time  = 9;
let greeting = time < 12 ? "Good Morning!" : "Good Afternoon!";
console.log(greeting);

let isStudent = true;
let message1 = isStudent? "You are a student" : "You are not a student";
console.log(message1);*/






//DAY-2

//SWITCH = can be an efficient replacement to many else if statements

/*let day = 1;
if(day == 1){
    console.log("its monday");
}
else if(day == 2){
    console.log("its tuesday")
}
else if(day == 3){
    console.log("its wednesday")
}
else if(day == 4){
    console.log("its thursday")
}
else if(day == 5){
    console.log("its friday")
}
else if(day == 6){
    console.log("its saturday")
}
else if(day == 7){
    console.log("its sunday")
}
else{
    console.log(`${day} is not a day`)
}*/

/*let day = 10;
switch(day){
    case 1:
        console.log("It is Monday");
        break;
    case 2:
        console.log("It is Tuesday");
        break;
    case 3:
        console.log("It is Wednesday");
        break;
    case 4:
        console.log("It is Thursday");
        break;
    case 5:
        console.log("It is Friday");
        break;
    case 6:
        console.log("It is Saturday");
        break;
    case 7:
        console.log("It is Sunday");
        break;
    default:
        console.log(`${day} is not a day`)
}*/





//DAY - 3

//string methods = allow you to manipulate and work with text(strings)


/*let userName = "PRUDHVI RAJ";
let print = userName.charAt(0)
console.log(print);

let print1 = userName.indexOf("D")
console.log(print1);

let print2 = userName.lastIndexOf("D")
console.log(print2);

let print3 = userName.length
console.log(print3); 

let print4 = userName.trim()
console.log(print4);

let print5 = userName.toLowerCase()
console.log(print5);

let print6 = userName.repeat(3)
console.log(print6);*/



//DAY - 4

//string slicing = creating a substring from a portion of another string

//string.slice(start,end)

//const fullName = "GALLA PRUDHVI RAJ"
//let firstName = fullName.slice(0,5);
//let lastName = fullName.slice(14,18);
//let firstName = fullName.slice(0,fullName.indexOf(" "));
//let lastName = fullName.slice(fullName.indexOf(" ")+1);
//console.log(firstName);
//console.log(lastName);





//DAY - 5

//Method chaining = calling one method for another in one continuous ine of code 


//let userName = window.prompt("Enter your USERNAME");

// ----------- NO METHOD CHAINING ------------
//userName = userName.trim();
//let letter = userName.charAt(0);
//letter = letter.toUpperCase();
//let extraChars = userName.slice(1);
//extraChars = extraChars.toLowerCase();
//userName = letter + extraChars;
//console.log(userName);


// ----------- METHOD CHAINING --------------
//userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();
//console.log(userName);






//DAY - 6

//OGICAL OPERATORS = used to combine or manipulate boolean values (true or false)

//AND = &&
//OR = ||
//NOT = !


/*const temp = 20;
if(temp>0){
    console.log("The weather is good!");
}
else if(temp<=30){
    console.log("The weather is good!");
}
else{
    console.log("The weather is bad!");
}


const temp1 = 20;
if(temp1>0 || temp<=30){
    console.log("The weather is good!");
}*/

/*const isTrue = true;
if(!isTrue){
    console.log("It is Cloudy outside");
}
else{
    console.log("It is Sunny outside");
}*/





//DAY - 7

// =ASSIGNMENT OPERATOR
// == COMPARISION OPERATOR (compares if two values are equal)
// === STRICT EQUALITY OPERATOR (compares if values and datatypes are equal)
// != INEQUALITY OPERATOR
// !== STRICT INEQUALITY OPERATOR

/*const PI = 3.14;
if (PI=="3.14"){
    console.log("This is PI");
}
else{
    console.log("This is not PI");
}


const PI1 = 3.14;
if (PI1==="3.14"){
    console.log("This is PI1");
}
else{
    console.log("This is not PI1");
}
*/






//DAY - 8

// while loop = repeat some code WHILE some code is true

/*let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt("Enter you username");
    password = window.prompt("Enter you password");

    if(username ==="myUsername" && password ==="myPassword"){
        loggedIn = true;
        console.log("You are logged in!");
    }
    else{
        console.log("Invalid Credentials, Please try again!");
    }
}*/






//DAY - 9

// FOR LOOP = repeat some code a LIMITED amount of time

/*for(let i = 0; i<=2; i++){
    console.log("hello");
}


for(let i = 1; i<=20; i++){
    if(i==13){
        break;
    }
    console.log(i);
}*/




//DAY - 10

//Function = a section of reusable code . declare code once, use it whenever you want. call the functionto execute that code.

/*function happyBirthDay(username, age){
    console.log("Happy Birthday to you!");
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday dear ${username}!`);
    console.log("Happy Birthday to you!");
    console.log(`You are ${age} old`);
}
happyBirthDay("Prudhvi", 20);
happyBirthDay(); // will execute 2 times*/

//with return

/*function add(x, y){
    let result = x + y;
    return result;
}
let answer = add(2,3);
comsole.log(answer);*/





//DAY - 11

//Variable scope = where a variable is recognized nd accessible (local vs global)


//local scope
/*function1();
function function1(){
    let x = 1;
    console.log(x);
}

function function2(){
    let x = 2;
    console.log(x);
}

//global scope

let x = 1;
function1();
function function1(){
    console.log(x);
}

function function2(){
    console.log(x);
}*/