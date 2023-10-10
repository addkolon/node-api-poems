const { Router } = require("express");
const PoemController = require("./PoemController");

const poemRouter = Router();

poemRouter.get("/poems", PoemController.showAllPoems);

poemRouter.get("/poems/:id", PoemController.showOnePoem);

poemRouter.put("/poems/:id", PoemController.updatePoem);

poemRouter.post("/poems", PoemController.addPoem);

poemRouter.delete("/poems/:id", PoemController.removePoem);

module.exports = poemRouter;