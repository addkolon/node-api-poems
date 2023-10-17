// TODO: add functions that manipulates data regarding poems
const { set } = require("express/lib/application");
const fs = require("fs");

const poemDatabase = [];

function getDatabase() {
    const dbData = fs.readFileSync("poemDB.json", {encoding: "utf-8"});
    return JSON.parse(dbData);
}

function setDatabase(data) {
    const str = JSON.stringify(data);
    fs.writeFileSync('poemDB.json', str);
}

function showAll() {
    const allPoems = getDatabase();
    return allPoems;
}

function showOneById(id) {
    const allPoems = getDatabase();

    return allPoems.find(poem => poem.id === id);
}

function editOneById(newPoem) {
    if (!newPoem.content || !newPoem.author || !newPoem.title) {
        return false;
    }

    const allPoems = getDatabase();
    const poemToEdit = allPoems.find(poem => poem.id === newPoem.id);

    // change existing object with new changes
    poemToEdit.title = newPoem.title;
    poemToEdit.content = newPoem.content;
    poemToEdit.author = newPoem.author;

    setDatabase(allPoems);

    return poemToEdit;
}

function create(newPoem) {
    if (!newPoem.content || !newPoem.author || !newPoem.title) {
        return false;
    }

    // Read in the database
    const allPoems = getDatabase();
    
    // Add poem to array
    const poemToAdd = { id: allPoems.length + 1, title: newPoem.title, content: newPoem.content, author: newPoem.author };
    allPoems.push(poemToAdd);

    // Set array as new database
    setDatabase(allPoems);

    return poemToAdd;
}

function remove(id) {
    const allPoems = getDatabase();

    const idxToRemove = allPoems.findIndex(poem => poem.id === id);

    if (idxToRemove < 0) {
        return false;
    }

    const removedPoem = allPoems.splice(idxToRemove, 1)[0];

    setDatabase(allPoems);

    return removedPoem;
}

module.exports = {
    // add functions here to export!
    showAll,
    showOneById,
    editOneById,
    create,
    remove
}

// test to see if it works!
//console.log(showAll()); // OK
// console.log(showOneById(2)); // OK
// console.log(editOneById({ id: 2, content: "This is edited", author: "Editsson", title: "To edit or not to edit" })); // OK
// console.log("AFTER EDIT"); // OK
// console.log(showOneById(2)); // OK

// create({ content: "This is created", author: "Createsson", title: "To create or not to create" }); // OK

// remove(4) // OK

