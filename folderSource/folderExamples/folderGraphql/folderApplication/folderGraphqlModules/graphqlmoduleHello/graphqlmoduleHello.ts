// NPM MODULES
import { createModule } from "graphql-modules";
/////

// MODULES
import { constTypedefs } from "./constTypedefs.js";
import { constResolvers } from "./constResolvers.js";
/////

const graphqlmoduleHello = createModule({
	id: "graphqlmoduleHello",
	typeDefs: [constTypedefs],
	resolvers: [constResolvers],
});

export { graphqlmoduleHello };
