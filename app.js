const express = require("express");
const PoemRoutes = require("./routes/PoemRoutes");
const UserRoutes = require("./routes/UserRoutes");

const app = express();
const PORT = 3001;

// in order to receive json data in req.body
app.use(express.json());

app.get("/", (req, res) => res.send("Hello World"));

app.use(PoemRoutes);
app.use(UserRoutes)

// If anything else was request then respond with this
app.get("*", (req, res) => res.send("This route is not defined!"));


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
