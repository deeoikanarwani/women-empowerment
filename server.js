const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname));

let messages = [];
let stories = [];

// CONTACT FORM
app.post("/contact", (req, res) => {

const { name, email, message } = req.body;

messages.push({ name, email, message });

res.send("Message received successfully!");

});

// GET MESSAGES
app.get("/messages", (req, res) => {
res.json(messages);
});


// POST STORY
app.post("/story", (req, res) => {

const { name, story } = req.body;

stories.push({
name,
story,
likes:0
});

res.send("Story added!");

});


// GET STORIES
app.get("/stories", (req, res) => {
res.json(stories);
});


// LIKE STORY
app.post("/like/:index", (req, res) => {

let index = req.params.index;

stories[index].likes++;

res.json(stories[index]);

});

app.listen(3000, () => {
console.log("Server running on http://localhost:3000");
});
let supporters = [];

// JOIN MOVEMENT
app.post("/join", (req, res) => {

const { name, email } = req.body;

supporters.push({
name,
email
});

res.send("Welcome to the movement!");

});

// GET SUPPORTERS
app.get("/supporters", (req, res) => {

res.json(supporters);

});