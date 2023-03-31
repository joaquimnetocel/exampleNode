// NPM MODULES
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import { createServer } from "http";
/////

// EXPRESS
const expressApplication = express();
/////

// CORS
expressApplication.use(cors({ origin: ["https://www.w3schools.com"], credentials: true }));
/////

// COOKIE PARSER
expressApplication.use(cookieParser("mysecretkey"));
/////

// ROUTES
expressApplication.get("/", function (req, res) {
	res.send("EXPRESS SERVER RUNNING!");
});
expressApplication.get("/routeSetCookie", function (req, res) {
	console.log("SET COOKIE");
	const numberMiliseconds = 1000;
	const numberSeconds = 60;
	const numberMinutes = 60;
	const numberHours = 1;
	const numberDays = 1;
	res.cookie(`cookieKey`, `MY COOKIE VALUE`, {
		maxAge: numberDays * numberHours * numberMinutes * numberSeconds * numberMiliseconds,
		sameSite: "none",
		secure: true,
		httpOnly: true,
		signed: true,
	});
	res.send("THIS IS THE CONTACTS ROUTE!");
});
expressApplication.get("/routeGetCookie", function (req, res) {
	console.log(req.signedCookies.cookieKey);
	res.send(req.signedCookies);
});
expressApplication.get("/routeDeleteCookies", function (req, res) {
	res.clearCookie();
	res.send("Cookie has been deleted successfully");
});
/////

// SERVER
const constServer = createServer(expressApplication);
constServer.listen(8081, () => {
	console.log("SERVER RUNNING WITH THE FOLLOWING ROUTES:");
	console.log("* http://localhost:8081");
	console.log("* http://localhost:8081/routeSetCookie");
	console.log("* http://localhost:8081/routeGetCookie");
	console.log("* http://localhost:8081/routeDeleteCookies");
});
/////
