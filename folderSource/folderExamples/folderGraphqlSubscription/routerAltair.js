// NPM MODULES
import { Router } from "express";
import { altairExpress } from "altair-express-middleware";
/////

// ROUTER
const routerAltair = Router();
/////

// ROUTES
routerAltair.use(
	"/",
	altairExpress({
		endpointURL: "/routeGraphql",
		subscriptionsEndpoint: `ws://localhost:8081/routeGraphql`,
		initialQuery: `{ queryHelloGuys }`,
	}),
);
/////

export { routerAltair };
