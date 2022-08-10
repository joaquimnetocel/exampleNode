// NPM MODULES
import { Router } from "express";
/////

// ROUTER
const routerClients = Router();
/////

// ROUTES
routerClients.get("/routeClientA", function (req, res) {
	res.send("THIS IS THE routeClientA.");
});
routerClients.get("/routeClientB", function (req, res) {
	res.send("THIS IS THE routeClientB.");
});
/////

export { routerClients };
