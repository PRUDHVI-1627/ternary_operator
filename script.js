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

let day = 10;
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
}