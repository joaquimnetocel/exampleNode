// NPM MODULES
import express from "express";
import { createServer } from "http";
/////

// EXPRESS
const constExpress = express();
/////

// EJS (SETTING VIEWS FOLDER)
constExpress.set("views", "folderSource/folderTopics/folderEjs/folderViews");
/////

// ROUTES
constExpress.get("/", function (req, res) {
	res.send("EXPRESS SERVER RUNNING!");
});
constExpress.get("/routeEjs", function (req, res) {
	const constMyObject = { FirstKey: "VALUE 1", SecondKey: "VALUE 2" };
	const constMyArray = [1, 2, 3];
	const constRenderOptions = { MyObject: constMyObject, MyArray: constMyArray };
	res.render("./viewTemplate.ejs", constRenderOptions);
});
/////

// SERVER
const constServer = createServer(constExpress);
constServer.listen(8081, () => {
	console.log("SERVER RUNNING WITH THE FOLLOWING ROUTES:");
	console.log("* http://localhost:8081");
	console.log("* http://localhost:8081/routeEjs");
});
/////
