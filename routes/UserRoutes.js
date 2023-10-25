const { Router } = require("express");
const UserController = require("../controllers/UserController");
const userRouter = Router();

// Define routes regarding Poems
userRouter.get("/signin", UserController.handleSignIn);
userRouter.get("/users/:username", UserController.handleGetUserByUsername);
userRouter.get("/users", UserController.handleGetAllUsers);

module.exports = userRouter;