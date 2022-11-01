// NPM MODULES
import express from "express";
import { createServer } from "http";
import cookieParser from "cookie-parser";
/////

// EXPRESS
const constExpress = express();
/////

// COOKIE PARSER
constExpress.use(cookieParser());
/////

// ROUTES
constExpress.get("/", function (req, res) {
	res.send("EXPRESS SERVER RUNNING!");
});
constExpress.get("/routeSetCookie", function (req, res) {
	console.log("SET COOKIE");
	const numberMiliseconds = 1000;
	const numberSeconds = 60;
	const numberMinutes = 60;
	const numberHours = 1;
	const numberDays = 1;
	res.cookie(`cookieKey`, `MY COOKIE VALUE`, {
		maxAge: numberDays * numberHours * numberMinutes * numberSeconds * numberMiliseconds,
	});
	res.send("THIS IS THE CONTACTS ROUTE!");
});
constExpress.get("/routeGetCookie", function (req, res) {
	console.log(req.cookies.cookieKey);
	res.send(req.cookies);
});
constExpress.get("/routeDeleteCookies", function (req, res) {
	res.clearCookie();
	res.send("Cookie has been deleted successfully");
});
/////

// SERVER
const constServer = createServer(constExpress);
constServer.listen(8081, () => {
	console.log("SERVER RUNNING WITH THE FOLLOWING ROUTES:");
	console.log("* http://localhost:8081");
	console.log("* http://localhost:8081/routeSetCookie");
	console.log("* http://localhost:8081/routeGetCookie");
	console.log("* http://localhost:8081/routeDeleteCookies");
});
/////
