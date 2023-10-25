const {getPoemsFromDB, getUsersFromDB, setUsersToDB} = require("./utils");

function authenticateUser(username, password) {
    const allUsers = getUsersFromDB();
    const foundUser = allUsers.find(user => user.username === username);

    if (!foundUser) { return false };

    const passwordMatch = foundUser.password === password;

    return passwordMatch;
}

function getUsers() {
    const allUsers = getUsersFromDB();
    
    // clean up password
    allUsers.forEach(user => delete user.password);

    return allUsers;
}

function getUserByUsername(username) {
    const allUsers = getUsersFromDB();
    const foundUser = allUsers.find(user => user.username === username);

    delete foundUser.password;

    // get all poems created by user
    const allPoems = getPoemsFromDB();
    const poemsByUser = allPoems.filter(poem => poem.author === foundUser.username);

    foundUser.poems = poemsByUser;

    return foundUser;
}


module.exports = {
    getUsers,
    getUserByUsername,
    authenticateUser
}