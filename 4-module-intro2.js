let names = require("./2-module-intro");
let greetPerson = require("./3-module-intro1");
let data = require("./5-alternate-export");
console.log(names);

// greetPerson(names.sanam);
// greetPerson(names.geeta);

console.log(typeof data);
console.log(data.numbers);
console.log(data.Kprstd);

console.log("data type of number in data "+typeof data.numbers);
console.log("data type of kprstd in data "+typeof data.Kprstd);
console.log("is numbers is array "+ Array.isArray(data.numbers));