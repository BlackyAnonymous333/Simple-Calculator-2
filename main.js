#! /usr/bin/env node
//simple calculator by using typescript language.
console.log("\n\tYou are wellcome in \'Blacky Anonymous\' world\n");
import inquirer from "inquirer";
let answers = await inquirer.prompt([
    { message: "Enter Your First Number", type: "number", name: "FirstNumber" },
    { message: "Enter Your Second Number", type: "number", name: "SecondNumber" },
    {
        message: "Please delect the one Operator to perform Operator",
        type: "list",
        name: "operator",
        choices: ["Addition", "Substraction", "Multiplication", "Division"],
    }
]);
if (answers.operator === "Addition") {
    console.log(answers.FirstNumber + answers.SecondNumber);
}
else if (answers.operator === "Substraction") {
    console.log(answers.FirstNumber - answers.SecondNumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.FirstNumber * answers.SecondNumber);
}
else if (answers.operator === "Division") {
    console.log(answers.FirstNumber / answers.SecondNumber);
}
else {
    console.log("Invalid Input");
}
