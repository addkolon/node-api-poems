const {getPoemsFromDB, setPoemsFromDB} = require("./utils");

function showAll() {
    const allPoems = getPoemsFromDB();
    return allPoems;
}

function showOneById(id) {
    const allPoems = getPoemsFromDB();

    return allPoems.find(poem => poem.id === id);
}

function editOneById(newPoem) {
    if (!newPoem.content || !newPoem.author || !newPoem.title) {
        return false;
    }

    const allPoems = getPoemsFromDB();
    const poemToEdit = allPoems.find(poem => poem.id === newPoem.id);

    // change existing object with new changes
    poemToEdit.title = newPoem.title;
    poemToEdit.content = newPoem.content;
    poemToEdit.author = newPoem.author;

    setPoemsFromDB(allPoems);

    return poemToEdit;
}

function create(newPoem) {
    if (!newPoem.content || !newPoem.author || !newPoem.title) {
        return false;
    }

    // Read in the database
    const allPoems = getPoemsFromDB();
    
    // Add poem to array
    const poemToAdd = { id: allPoems.length + 1, title: newPoem.title, content: newPoem.content, author: newPoem.author };
    allPoems.push(poemToAdd);

    // Set array as new database
    setPoemsFromDB(allPoems);

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

