const fs = require('fs');
const myFolder = './images';

console.log("Couting Images...");

fs.readdirSync(myFolder).forEach(file => {
    console.log(file);
});