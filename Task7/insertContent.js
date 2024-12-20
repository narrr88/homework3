const fs = require("fs");

fs.writeFileSync('message.txt', "Hello World!");

let content = fs.readFileSync('message.txt', 'utf-8');

const position = content.indexOf('Hello') + 5;
const updContent = content.slice(0, position) + " Awesome" + content.slice(position);

fs.writeFileSync('message.txt', updContent);

console.log("Updated content of file: ", fs.readFileSync('message.txt', 'utf-8'));