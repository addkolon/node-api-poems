// TODO: add functions that handles requests regarding poems
const PoemModel = require("../models/PoemModel");
const {userSessions} = require("./UserController");

let requestCounter = 0;

function handleShowAll(req, res) {
    console.log("Request for ShowAll, nr", requestCounter++);

    if (userSessions[username] !== req.query.sessionKey) {
        console.log("Not authenticated.");
        return res.status(401).send("Session not valid. Signin first");
    }

    return res.send(PoemModel.showAll());
}

function handleShowOneById(req, res) {

    if (userSessions[username] !== req.query.sessionKey) {
        console.log("Not authenticated.");
        return res.status(401).send("Session not valid. Signin first");
    }

    const idToFind = req.params.id;

    console.log(`Request for ShowOneById, with id ${idToFind}, nr`, requestCounter++);

    const poem = PoemModel.showOneById(Number(idToFind));

    if (!poem) {
        res.status(404).send("No poem found");
    }

    return res.send(poem);
}

function handleEditOneById(req, res) {

    if (userSessions[username] !== req.query.sessionKey) {
        console.log("Not authenticated.");
        return res.status(401).send("Session not valid. Signin first");
    }
    
    const newPoem = {id: Number(req.params.id), ...req.body};

    console.log(`Request for EditOneById, with newPoem ${JSON.stringify(newPoem)}, nr`, requestCounter++);

    const editedPoem = PoemModel.editOneById(newPoem);

    if (!editedPoem) {
        return res.status(501).send("Request did not succeed");
    }

    return res.send(editedPoem);
}

function handleCreate(req, res) {

    if (userSessions[username] !== req.query.sessionKey) {
        console.log("Not authenticated.");
        return res.status(401).send("Session not valid. Signin first");
    }

    console.log(`Request for create, with newPoem ${JSON.stringify(req.body)}, nr`, requestCounter++);

    const newPoem = req.body;

    if (!newPoem.content || !newPoem.title || !newPoem.author) {
        return res.status(501).send("Request did not succeed. Check your request body");
    }

    const createdPoem = PoemModel.create(newPoem);

    return res.send(createdPoem);
}

function handleRemoveOneById(req, res) {
    console.log(`Request for remove, with id ${idToRemove}, nr`, requestCounter++);

    if (userSessions[username] !== req.query.sessionKey) {
        console.log("Not authenticated.");
        return res.status(401).send("Session not valid. Signin first");
    }

    const idToRemove = req.params.id;


    const removedPoem = PoemModel.remove(Number(idToRemove));

    if (!removedPoem) {
        return res.status(501).send("Request did not succeed");
    }

    return res.send(removedPoem);

}

module.exports = {
    // export functions here!
    handleShowAll,
    handleShowOneById,
    handleEditOneById,
    handleCreate,
    handleRemoveOneById
}