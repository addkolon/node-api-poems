// DONE: add functions that manipulates data regarding poems
const {getPoemsFromDB, setPoemsToDB} = require("./utils");


function showAll() {
    const allPoems = getPoemsFromDB;
    return allPoems;
}

function showOneById(id) {
    const allPoems = getPoemsFromDB;

    return allPoems.find(poem => poem.id === id);
}

function editOneById(newPoem) {
    if (!newPoem.content || !newPoem.author || !newPoem.title) {
        return false;
    }

    const allPoems = getPoemsFromDB;
    const poemToEdit = allPoems.find(poem => poem.id === newPoem.id);

    // change existing object with new changes
    poemToEdit.title = newPoem.title;
    poemToEdit.content = newPoem.content;
    poemToEdit.author = newPoem.author;

    setPoemsToDB(allPoems);

    return poemToEdit;
}

function create(newPoem) {
    if (!newPoem.content || !newPoem.author || !newPoem.title) {
        return false;
    }

    // Read in the database
    const allPoems = getPoemsFromDB;
    
    // Add poem to array
    const poemToAdd = { id: allPoems.length + 1, title: newPoem.title, content: newPoem.content, author: newPoem.author };
    allPoems.push(poemToAdd);

    // Set array as new database
    setPoemsToDB(allPoems);

    return poemToAdd;
}

function remove(id) {
    const allPoems = getPoemsFromDB;

    const idxToRemove = allPoems.findIndex(poem => poem.id === id);

    if (idxToRemove < 0) {
        return false;
    }

    const removedPoem = allPoems.splice(idxToRemove, 1)[0];

    setPoemsToDB(allPoems);

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

