// NPM MODULES
import express from "express";
import { createServer } from "http";
/////

// MIDDLEWARES
const middlewareOne = function (req, res, next) {
	res.locals.FirstMiddlewareText = "MIDDLEWARE 1";
	console.log("I AM IN THE FIRST MIDDLEWARE!");
	next();
};
const middlewareTwo = function (req, res, next) {
	res.locals.SecondMiddlewareText = "MIDDLEWARE 2";
	console.log("I AM IN THE SECOND MIDDLEWARE!");
	next();
};
const middlewareThree = function (req, res, next) {
	res.locals.ThirdMiddlewareText = "MIDDLEWARE 3";
	console.log("I AM IN THE THIRD MIDDLEWARE!");
	next();
};
const middlewareFour = function (req, res, next) {
	res.locals.FourthMiddlewareText = "MIDDLEWARE 4";
	console.log("I AM IN THE FOURTH MIDDLEWARE!");
	next();
};
/////

// EXPRESS
const constExpress = express();
/////

// MIDDLEWARE APPLIED TO ALL ROUTES
constExpress.use(middlewareOne);
constExpress.use(middlewareTwo);
/////

// ROUTES
constExpress.get("/", function (req, res) {
	res.send("THIS ROUTE USES MIDDLEWARES A MIDDLEWARE APPLIED TO ALL ROUTES. SPECIFICALLY, " + res.locals.FirstMiddlewareText + ".");
	console.log(res.locals.FirstMiddlewareText);
});
constExpress.get("/routeMiddlewares", [middlewareThree, middlewareFour], function (req, res) {
	res.send("IN ADDITION TO THE MIDDLEWARES USED BY ALL ROUTES, THIS ROUTE USES SPECIFIC MIDDLEWARES. NAMELY, " + res.locals.ThirdMiddlewareText + " AND " + res.locals.FourthMiddlewareText + ".");
	return;
});
/////

// SERVER
const constServer = createServer(constExpress);
constServer.listen(8081, () => {
	console.log("SERVER RUNNING WITH THE FOLLOWING ROUTES:");
	console.log("* http://localhost:8081");
	console.log("* http://localhost:8081/routeMiddlewares");
});
/////
