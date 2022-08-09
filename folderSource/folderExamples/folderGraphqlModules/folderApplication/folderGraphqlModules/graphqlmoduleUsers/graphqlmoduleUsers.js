// NPM MODULES
import { createModule } from "graphql-modules";
/////

//MODULES
import { gqlTypedefs } from "./gqlTypedefs.js";
import { objectResolvers } from "./objectResolvers.js";
/////

const graphqlmoduleUsers = createModule({
	id: "graphqlmoduleUsers",
	typeDefs: [gqlTypedefs],
	resolvers: [objectResolvers],
});

export { graphqlmoduleUsers };
