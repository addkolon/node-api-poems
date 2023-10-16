// TODO: add functions that manipulates data regarding poems

const poemDatabase = [
    {id: 1, title: "A fire morning", content: "The morning was warm.. too warm. such fire.", author: "Henry"}, 
{id: 2, title: "A snow morning", content: "The morning was cold.. too cold. such snow.", author: "Henry"},
{id: 3, title: "A wind morning", content: "The morning was windy.. too wind. such wind.", author: "Henry"}]

function showAll() {
    return poemDatabase;
}

function showOneById(id) {
    return poemDatabase.find(poem => poem.id === id);
}

function editOneById(newPoem) {
    if (!newPoem.content || !newPoem.author  || !newPoem.title) {
        return false;
    }

    const poemToEdit = showOneById(newPoem.id);

    // Take content from obj and create new (cloning)
    poemToEdit.title = newPoem.title;
    poemToEdit.content = newPoem.content;
    poemToEdit.author = newPoem.author;

    return poemToEdit;
}

function create(newPoem) {
    if (!newPoem.content || !newPoem.author  || !newPoem.title) {
        return false;
    }

    const poemToAdd = {id: poemDatabase.length + 1, title: newPoem.title,  content: newPoem.content, author: newPoem.author};

    poemDatabase.push(poemToAdd);

    return poemToAdd;
}

function remove(id) {
    const idxToRemove = poemDatabase.findIndex(poem => poem.id === id);

    if (idxToRemove < 0) {
        return false;
    }

    const removedPoem = poemDatabase.splice(idxToRemove, 1)[0];

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

