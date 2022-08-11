// NPM MODULES
import express from "express";
import { createServer } from "http";
/////

// MODULES
import { modulePrisma } from "./modulePrisma.js";
/////

// EXPRESS
const constExpress = express();
/////

// MIDDLEWARE THAT PARSES JSON HTTP REQUEST BODIES INTO JAVASCRIPT OBJECTS. THIS MIDDLEWARE ADDS A BODY PROPERTY TO THE EXPRESS REQUEST "req". TO ACCESS THE PARSED REQUEST BODY, USE "req.body".
constExpress.use(express.json());
/////

// ROUTES
constExpress.get("/", function (req, res) {
	res.send("EXPRESS SERVER RUNNING!");
});

constExpress.get("/routeReadAllUsers", async function (req, res) {
	const constUsers = await modulePrisma.tableUsers.findMany();
	res.json(constUsers);
});

constExpress.get("/routeReadUser/:parId", async function (req, res) {
	const constUsers = await modulePrisma.tableUsers.findUnique({
		where: {
			fieldUserId: parseInt(req.params.parId),
		},
	});
	res.json(constUsers);
});

// YOU CAN TEST THE ROUTE BELOW WITH THE VSCODE EXTENSION "REST Client" APPLIED TO "requestCreate.http".
constExpress.post("/routeCreateUser", async function (req, res) {
	console.log("REQUEST BODY:", req.body);
	const constUser = await modulePrisma.tableUsers.findUnique({
		where: {
			fieldEmail: req.body.fieldEmail,
		},
	});
	if (constUser !== null) {
		res.status(404).send("THIS E-MAIL ALREADY EXISTS IN THE DATABASE.");
		return;
	}
	const constResponse = await modulePrisma.tableUsers.create({
		data: req.body,
	});
	res.json(constResponse);
});

// YOU CAN TEST THE ROUTE BELOW WITH THE VSCODE EXTENSION "REST Client" APPLIED TO "requestUpdate.http".
constExpress.put("/routeUpdateUser/:parId", async function (req, res) {
	console.log("REQUEST BODY:", req.body);
	const constUser = await modulePrisma.tableUsers.findUnique({
		where: {
			fieldUserId: parseInt(req.params.parId),
		},
	});
	if (constUser === null) {
		res.status(404).send("USER NOT FOUND.");
		return;
	}
	const constUpdatedUser = await modulePrisma.tableUsers.update({
		where: {
			fieldUserId: parseInt(req.params.parId),
		},
		data: req.body,
	});
	res.json(constUpdatedUser);
});

// YOU CAN TEST THE ROUTE BELOW WITH THE VSCODE EXTENSION "REST Client" APPLIED TO "requestDelete.http".
constExpress.delete("/routeDeleteUser/:parId", async function (req, res) {
	const constUser = await modulePrisma.tableUsers.findUnique({
		where: {
			fieldUserId: parseInt(req.params.parId),
		},
	});
	if (constUser === null) {
		res.status(404).send("USER NOT FOUND.");
		return;
	}
	const constResponse = await modulePrisma.tableUsers.delete({
		where: {
			fieldUserId: parseInt(req.params.parId),
		},
	});
	res.json(constResponse);
});
/////

// SERVER
const constServer = createServer(constExpress);
constServer.listen(8081, () => {
	console.log("SERVER RUNNING WITH THE FOLLOWING ROUTES:");
	console.log("* http://localhost:8081");
	console.log("* http://localhost:8081/routeReadAllUsers");
	console.log("* http://localhost:8081/routeReadUser/1");
	console.log("* http://localhost:8081/routeCreateUser (POST)");
	console.log("* http://localhost:8081/routeUpdateUser/1 (PUT)");
	console.log("* http://localhost:8081/routeDeleteUser/1 (DELETE)");
});
/////
