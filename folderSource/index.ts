// NPM MODULES
import express from "express";
import { createServer } from "http";
import "dotenv/config";
/////

// EXPRESS
const constExpress = express();
/////

// ROUTES
constExpress.get("/", function (req, res) {
	res.send(`EXPRESS SERVER RUNNING!`);
});
/////

// SERVER
const constPort = 8081;
const constServer = createServer(constExpress);
constServer.listen(constPort, () => {
	if (Boolean(process.env.dotenvDevelopmentMode) === true) {
		console.log(`RUNNING ON DEVELOPMENT MODE!`);
	} else {
		console.log(`RUNNING ON PRODUCTION MODE!`);
	}
	console.log(`SERVER RUNNING ON http://localhost:${constPort}`);
});
/////
