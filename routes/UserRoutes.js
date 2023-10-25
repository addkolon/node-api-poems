const { Router } = require("express");
const UserController = require("../controllers/UserController");
const userRouter = Router();

userRouter.get("/users", UserController.handleGetAllUsers);
userRouter.get("/signin", UserController.handleSignIn);
userRouter.get("/signout", UserController.handleSignOut);
userRouter.get("/user/:username", UserController.handleGetUserByUsername);

module.exports = userRouter;