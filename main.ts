//Task:

// 1) Miles-to-kilometers Converter (Operations):

// First we create a variable named miles and assign a value
let miles = 60;

// 1 miles = 1.60934 kilometers

let convertedToKilometers = miles * 1.60934
console.log(convertedToKilometers)

// Task 1 completed. In this task we convert miles into kilometers through Operator


//Task 2:
// 2) Evaluting a Number game:

// Prompt the user to enter a number
import inquirer from "inquirer"
let input = await inquirer.prompt([
    {
        name:"user",
        type:"number",
        message:"Please Enter a number"
    }
])

//Assign a dynamic value
let dynamicNumber = 50 

// Now comparing both the values
if(input.user === dynamicNumber){
    console.log("User Number and Dynamic value both are Same")
}else if(input.user > dynamicNumber){
    console.log("User input is greater than Dynamic value")
}else if(input.user < dynamicNumber){
    console.log("User input is less than Dynamic value")
}




//Task 3:
// 3) Friend Checker game:

//using prompt to enter a name.
let input2 = await inquirer.prompt([
    {
        name:"user2",
        type:"input",
        message:"Please Enter your friend name"
    }
])

// Convert the enter name to lowerCae();

let userName = input2.user2.toLowerCase()

// using switch case statement to check if the entered name is a known friend.
switch(userName){
    case "shehroz":
        console.log("Hi Shehroz how are you, it's been a long time to see you")
        break;
    case "shahmeer":
        console.log("Hi shahmeer how are you, it's been a long time to see you")
        break;
    default:
        console.log(`${input2.user2} i dont think we ever met before and also i dont know you so bye `)
        break;    

}



//Task 4: Functions 

// Set up two different variables with different values
let num1 = 30;
let num2 =  40;

// call a function with these variables as argument and output the result using console
function sum(a:number,b:number){
    return a + b
}
//pass the argument along with those variables
let add = sum(num1,num2)
console.log(add)

// Now changging the argument and call the function again
let num3 = 2;
let num4 = 2;

// Now passing these variables as as argument in the function
let result = sum(num3,num4)
console.log(result)

// You can see the result



//Calculator Project Using function

// Set up two variables containg number values. 
let number1 = 10
let number2 = 5
let Operator = "+"


// Create a function that takes two numbers and a operator as a parameter perform the corresponding operations and returns the result.
function calculate(num:number, num2:number, operator:string){
    switch(operator){
        case "+":
            return num + num2;
        case "-":
            return num - num2;
        default:
            return "Invalid Operator"
            break;        
    }
} 

let check2 = calculate(number1,number2,Operator)
console.log(`After Adding ${number1} with ${number2} using Operator "${Operator}" The result is = ${check2}`)


// Update the Operator value and implementing in a function
Operator = "-"

let check3 = calculate(number1,number2,Operator)
console.log(`After Adding ${number1} with ${number2} using Operator "${Operator}" The result is = ${check3}`)




// Task Anonymous Function:
// Assign a function expression to a variable, with one parameter
//Basically it's a Anonymous function.

let respose = function(name:string){
    console.log(`Hello ${name} it's been a long time to see you `)
}
respose("Shehroz")

//Now make a same function with different syntax like normal function

function greet(name:string){
    console.log(`Hello ${name} it's been a long time to see you `)
}

greet("Shahmeer")