const crypto = require("crypto");

const UserModel = require("../models/UserModel");

export const userSessions = {};

function handleSignOut(req, res) {
    if (userSessions[username] !== req.query.sessionKey) {
        console.log("Not authenticated.");
        return res.status(401).send("Session not valid. Signin first");
    }

    delete userSessions[username]

    return res.send("Session has ended");
}

function handleSignIn(req, res) {
    const {username, password} = req.body;

    const isAuthenticated = UserModel.authenticateUser(username, password);

    if (!isAuthenticated) {
        console.log("Signin failed.");
        return res.status(401).send("Invalid Credentials");
    }

    const sessionKey = crypto.randomBytes(20).toString('base64');

    userSessions[username] = sessionKey;

    res.send({sessionKey})
}

function handleGetAllUsers(req, res) {
    if (userSessions[username] !== req.query.sessionKey) {
        console.log("Not authenticated.");
        return res.status(401).send("Session not valid. Signin first");
    }

    res.send(UserModel.getUsers());
}

function handleGetUserByUsername(req, res) {
    const username = req.params.username;
        
    if (!username) {
        return res.status(500).send("No username provided")
    }

    if (userSessions[username] !== req.query.sessionKey) {
        console.log("Not authenticated.");
        return res.status(401).send("Session not valid. Signin first");
    }


    const user = UserModel.getUserByUsername(username);

    if (!user) {
        return res.status(404).send("No user found with given username")
    }

    res.send(user);
}

module.exports = {
    handleGetAllUsers,
    handleGetUserByUsername,
    handleSignIn,
    handleSignOut
}