// NPM MODULES
import { createModule } from "graphql-modules";
/////

// MODULES
import { gqlTypedefs } from "./gqlTypedefs.js";
import { objectResolvers } from "./objectResolvers.js";
/////

const graphqlmoduleHello = createModule({
	id: "graphqlmoduleHello",
	typeDefs: [gqlTypedefs],
	resolvers: [objectResolvers],
});

export { graphqlmoduleHello };
