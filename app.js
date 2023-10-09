const express = require("express");
const PoemModel = require("./PoemModel"); // import PoemModal from "./PoemModel"

// DONE: Skapa en webserver som lyssnar på PORT 3000
// den ska ha en registrerade GET route som svara med hello world

const app = express();
app.use(express.json());

PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello world");
})

// -- ROUTES FOR POEMS --

// DONE: create a route GET /poems that shows all poems
app.get("/poems", (req, res) => {
    res.send(PoemModel.showAll());
});


// DONE: create a route GET /poems/:id that shows ONE poem by id
app.get("/poems/:id", (req, res) => {
    const { id } = req.params;
    // const id = req.params.id;

    res.send(PoemModel.showOneById(Number(id)));
});

// DONE: create a route PUT /poems/:id that updates ONE poem by id
app.put("/poems/:id", (req, res) => {
    const { id } = req.params;
    const {content, author} = req.body;

    // const id = req.params.id;
    const newPoem = {id: Number(id), content, author};

    res.send(PoemModel.edit(newPoem));
});

// DONE: create a route POST /poems that adds a poem
app.post("/poems", (req, res) => {
    const createdPoem = PoemModel.add(req.body);
    res.send(createdPoem);
});

// DONE: create a route DELETE /poems/:id that deletes a poem
app.delete("/poems/:id", (req, res) => {
    const { id } = req.params;

    const deletedPoem = PoemModel.remove(Number(id));

    res.send(deletedPoem);
});
// ----------------

app.listen(PORT, console.log(`Listening on port ${PORT}`));