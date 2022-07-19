// NPM MODULES
import express from "express";
import { createServer } from "http";
/////

// EXPRESS
const constExpress = express();
/////

// ROUTES
constExpress.get("/", function (req, res) {
	res.send("EXPRESS SERVER RUNNING!");
});
constExpress.get("/routeContacts", function (req, res) {
	res.send("THIS IS THE CONTACTS ROUTE!");
});
constExpress.get("/routeHtml", function (req, res) {
	res.send("<h1>MY FIRST TITLE</h1><p>MY FIRST PARAGRAPH.</p>");
});
constExpress.get("/routeJson", function (req, res) {
	res.json({ name: "John", age: 20 });
});
/////

// SERVER
const constServer = createServer(constExpress);
constServer.listen(8081, () => {
	console.log("SERVER RUNNING WITH THE FOLLOWING ROUTES:");
	console.log("* http://localhost:8081");
	console.log("* http://localhost:8081/routeContacts");
	console.log("* http://localhost:8081/routeHtml");
	console.log("* http://localhost:8081/routeJson");
});
/////
