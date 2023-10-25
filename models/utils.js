const fs = require("fs");

const POEMDB_PATH = "db/poems.json";
const USERSDB_PATH = "db/users.json";

function getPoemsFromDB() {
    const dbData = fs.readFileSync(POEMDB_PATH, {encoding: "utf-8"});
    return JSON.parse(dbData);
}

function getUsersFromDB() {
    const dbData = fs.readFileSync(USERSDB_PATH, {encoding: "utf-8"});
    return JSON.parse(dbData);
}

function setPoemsToDB(newPoems) {
    const stringifiedPoems = JSON.stringify(newPoems);
    fs.writeFileSync(POEMDB_PATH, stringifiedPoems);
}

function setUsersToDB(newUsers) {
    const stringifiedUsers = JSON.stringify(newUsers);
    fs.writeFileSync(POEMDB_PATH, stringifiedUsers);
}

module.exports = {
    getPoemsFromDB,
    setPoemsToDB,

    getUsersFromDB,
    setUsersToDB
}