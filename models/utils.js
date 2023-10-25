const fs = require("fs");

const POEMS_DB_PATH = "db/poems.json";
const USERS_DB_PATH = "db/users.json";

function getPoemsFromDB() {
    const dbData = fs.readFileSync(POEMS_DB_PATH, {encoding: "utf-8"});
    return JSON.parse(dbData);
}

function setPoemsFromDB(data) {
    const str = JSON.stringify(data);
    fs.writeFileSync(POEMS_DB_PATH, str);
}


function getUsersFromDB() {
    const dbData = fs.readFileSync(USERS_DB_PATH, {encoding: "utf-8"});
    return JSON.parse(dbData);
}

function setUsersFromDB(data) {
    const str = JSON.stringify(data);
    fs.writeFileSync(USERS_DB_PATH, str);
}


module.exports = {
    getPoemsFromDB,
    setPoemsFromDB,

    getUsersFromDB,
    setUsersFromDB
}