// NPM MODULES
import { createModule } from "graphql-modules";
/////

//MODULES
import { constTypedefs } from "./constTypedefs.js";
import { constResolvers } from "./constResolvers.js";
/////

const graphqlmoduleUsers = createModule({
	id: "graphqlmoduleUsers",
	typeDefs: [constTypedefs],
	resolvers: [constResolvers],
});

export { graphqlmoduleUsers };
