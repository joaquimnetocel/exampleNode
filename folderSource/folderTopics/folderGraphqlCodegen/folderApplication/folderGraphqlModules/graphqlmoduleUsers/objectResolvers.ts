// MODULES
import { GraphqlmoduleUsersModule } from "./folderGeneratedCodegenTypes/fileGeneratedCodegenTypes";
import { modulePrisma } from "../../modulePrisma.js";
/////

const objectResolvers: GraphqlmoduleUsersModule.Resolvers = {
	Query: {
		readUsers: async function () {
			return await modulePrisma.tableUsers.findMany();
		},
	},
};

export { objectResolvers };
