const express = require("express");
const PoemRouter = require("./PoemRoutes");
// DONE: Skapa en webserver som lyssnar på PORT 3000
// den ska ha en registrerade GET route som svara med hello world

const app = express();
app.use(express.json());

PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello world");
})

// -- ROUTES FOR POEMS --
app.use(PoemRouter);


app.listen(PORT, console.log(`Listening on port ${PORT}`));