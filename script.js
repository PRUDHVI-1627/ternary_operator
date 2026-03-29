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

const isTrue = true;
if(!isTrue){
    console.log("It is Cloudy outside");
}
else{
    console.log("It is Sunny outside");
}