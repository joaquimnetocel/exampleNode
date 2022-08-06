// NPM MODULES
import express from "express";
import { createServer } from "http";
/////

// EXPRESS
const constExpress = express();
/////

// MIDDLEWARE THAT PARSES application/x-www-form-urlencoded HTTP REQUEST BODIES INTO JAVASCRIPT OBJECTS. THIS MIDDLEWARE ADDS A BODY PROPERTY TO THE EXPRESS REQUEST "req". TO ACCESS THE PARSED REQUEST BODY, USE "req.body".
constExpress.use(express.urlencoded({ extended: false }));
// IF EXTENDED IS false, PARSE application/x-www-form-urlencoded BASICALLY CAN ONLY PARSE INCOMING REQUEST OBJECT IF STRING OR ARRAYS. IF true, THEN YOU CAN PARSE INCOMING REQUEST OBJECT IF OBJECT, WITH NESTED OBJECTS, OR GENERALLY ANY TYPE.
/////

// ROUTES
constExpress.get("/routeForm", function (req, res) {
	res.send(`
		<form action="/routePost" method="POST">
			<span>Name: </span>
    		<input type="text" name="inputName">
    		<button type="submit">Submit</button>
		</form>
	`);
});
constExpress.post("/routePost", function (req, res) {
	console.log("REQUEST BODY:", req.body);
	res.send(`THIS IS THE routePost ROUTE. THE POSTED NAME IS: ${req.body.inputName}`);
});
/////

// SERVER
const constServer = createServer(constExpress);
constServer.listen(8081, () => {
	console.log("SERVER RUNNING WITH THE FOLLOWING ROUTES:");
	console.log("* http://localhost:8081/routeForm");
	console.log("* http://localhost:8081/routePost (POST)");
});
/////
