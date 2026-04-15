const readline = require("readline");
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
rl.question("Enter your name: ", (name) => {
console.log("Hello " + name);
console.log("Welcome to Node.js program");
console.log("This is a simple example");
console.log("You entered: " + name);
rl.close();
});