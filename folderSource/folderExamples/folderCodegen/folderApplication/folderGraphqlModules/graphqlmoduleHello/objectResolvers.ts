// MODULES
import { GraphqlmoduleHelloModule } from "./folderGeneratedCodegenTypes/fileGeneratedCodegenTypes";
/////

const objectResolvers: GraphqlmoduleHelloModule.Resolvers = {
	Query: {
		queryHelloGuys: function () {
			return "Hello guys!";
		},
		queryHello: function (argParent, argArguments, argContext) {
			console.log(argContext.User?.LoggedId);
			return "Hello guys!";
		},
	},
};

export { objectResolvers };
