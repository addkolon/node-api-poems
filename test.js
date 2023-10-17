/**
 * 
1. skriver en array med 3 objekt in till en fil test.json
2. läser från test.json och consol.loggar innehållet som en array
använd modulen "fs"

readFileSync och writeFileSync
 */

// 1. OK
const fs = require("fs");

const array = [{name: "bob"}, {name: "kalle"}, {name: "jim"}];
const dataToFile = JSON.stringify(array);

// console.log(dataToFile);

// fs.writeFileSync('test.json', dataToFile);
// fs.writeFile('test-async.json', dataToFile, () => console.log("File has been written"))


// 2. läs från filen 
// const dataFromFile = fs.readFileSync('test.json', {encoding: 'utf-8'});
fs.readFile('test.json', {encoding: 'utf-8'}, (err, data) => {
    if (err) {
        return console.log(err);
    }

    const arrayFromFile = JSON.parse(data);
    console.log(arrayFromFile);
});

