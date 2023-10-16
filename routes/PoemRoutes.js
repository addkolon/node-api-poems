const { Router } = require("express");
const PoemController = require("../controllers/PoemController");
const poemRouter = Router();

// Define routes regarding Poems
poemRouter.get("/poems", PoemController.handleShowAll);
poemRouter.get("/poems/:id", PoemController.handleShowOneById);
poemRouter.put("/poems/:id", PoemController.handleEditOneById);
poemRouter.post("/poems", PoemController.handleCreate);
poemRouter.delete("/poems/:id", PoemController.handleRemoveOneById);


module.exports = poemRouter;