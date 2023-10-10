const PoemModel = require("./PoemModel");

function showAllPoems(req, res) {
    console.log("POEMS: Requesting all poems");
    res.send(PoemModel.showAll());
}

function showOnePoem(req, res) {
    console.log("POEMS: Requesting one poem");

    const { id } = req.params;
    // const id = req.params.id;

    res.send(PoemModel.showOneById(Number(id)));
}

function updatePoem(req, res) {
    console.log("POEMS: Requesting to update one poem");
    const { id } = req.params;
    const {content, author} = req.body;

    // const id = req.params.id;
    const newPoem = {id: Number(id), content, author};

    res.send(PoemModel.edit(newPoem));
}

function addPoem(req, res) {
    console.log("POEMS: Requesting to create one poem");

    if (req.body.content && req.body.author) {
        const createdPoem = PoemModel.add(req.body);
        return res.send(createdPoem);
    }

    res.status(400).send({status: "fail", message: "Not correct data required"})
}

function removePoem(req, res) {
    console.log("POEMS: Requesting to delete one poem");

    const { id } = req.params;

    const deletedPoem = PoemModel.remove(Number(id));

    res.send(deletedPoem);
}

module.exports = {
    showAllPoems,
    showOnePoem,
    updatePoem,
    addPoem,
    removePoem
}