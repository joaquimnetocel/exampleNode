// NPM MODULES
import { createApplication } from "graphql-modules";
/////

// GRAPHQL MODULES
import { graphqlmoduleHello } from "./folderGraphqlModules/graphqlmoduleHello/graphqlmoduleHello.js";
import { graphqlmoduleUsers } from "./folderGraphqlModules/graphqlmoduleUsers/graphqlmoduleUsers.js";
/////

// CONSTANTS
const constApplication = createApplication({
	modules: [graphqlmoduleHello, graphqlmoduleUsers],
});

const moduleApplication = {
	execute: constApplication.createExecution(),
	subscribe: constApplication.createSubscription(),
	schema: constApplication.schema,
};

/////

export { moduleApplication };
