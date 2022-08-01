// NPM MODULES
import { Router } from "express";
/////

// ROUTER
const routerProducts = Router();
/////

// ROUTES
routerProducts.get("/routeProductA", function (req, res) {
	res.send("THIS IS THE routeProductA.");
});
routerProducts.get("/routeProductB", function (req, res) {
	res.send("THIS IS THE routeProductB.");
});
/////

export { routerProducts };
