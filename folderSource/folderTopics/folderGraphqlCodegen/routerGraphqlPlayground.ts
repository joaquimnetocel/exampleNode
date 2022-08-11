// NPM MODULES
import { Router } from "express";
import graphqlPlaygroundHtml from "graphql-playground-html";
/////

// ROUTER
const routerGraphqlPlayground = Router();
/////

// ROUTES
routerGraphqlPlayground.use("/", function (req, res) {
	res.setHeader("Content-Type", "text/html");

	const functionGetPlayground = function () {
		if (req.query.parAuthorization === undefined) {
			return graphqlPlaygroundHtml.renderPlaygroundPage({
				endpoint: "/routeGraphql",
				subscriptionEndpoint: "/routeGraphql",
			});
		}

		const stringAuthorization = <string>req.query.parAuthorization;

		const constHeaders = JSON.stringify({
			authorization: decodeURIComponent(stringAuthorization),
		});
		return graphqlPlaygroundHtml.renderPlaygroundPage({
			endpoint: `/routeGraphql?headers=${encodeURIComponent(constHeaders)}`,
			subscriptionEndpoint: `/routeGraphql?headers=${encodeURIComponent(constHeaders)}`,
		});
	};
	const constPlayground = functionGetPlayground();

	res.send(constPlayground);
});
/////

export { routerGraphqlPlayground };
