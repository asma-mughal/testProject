const functions = require("firebase-functions");
const express = require("express");

const app = express();

function greetUser(name) {
  return `Hello, ${name}! Welcome to our Node.js server.`;
}

function calculateSquare(number) {
  return `The square of ${number} is ${number * number}.`;
}

app.get("/greet", (req, res) => {
  const name = req.query.name || 'Alice';
  const greeting = greetUser(name);
  res.send(greeting);
});

app.get("/square", (req, res) => {
  const number = parseInt(req.query.number) || 4;
  const result = calculateSquare(number);
  res.send(result);
});

// Only export the app as a single function
exports.app = functions.https.onRequest(app);
