// NPM MODULES
import { createApplication } from "graphql-modules";
/////

// GRAPHQL MODULES
import { graphqlmoduleHello } from "./folderGraphqlModules/graphqlmoduleHello/graphqlmoduleHello.js";
import { graphqlmoduleSubscriptions } from "./folderGraphqlModules/graphqlmoduleSubscriptions/graphqlmoduleSubscriptions.js";
/////

// CONSTANTS
const constApplication = createApplication({
	modules: [graphqlmoduleHello, graphqlmoduleSubscriptions],
});

const moduleApplication = {
	execute: constApplication.createExecution(),
	subscribe: constApplication.createSubscription(),
	schema: constApplication.schema,
};

/////

export { moduleApplication };
