// MODULES
import { modulePubsub } from "../modulePubsub.js";
import { stringChannelExample } from "../modulePubsubChannels.js";

import { GraphqlmoduleHelloModule } from "./folderGeneratedCodegenTypes/fileGeneratedCodegenTypes";
/////

const objectResolvers: GraphqlmoduleHelloModule.Resolvers = {
	Query: {
		queryHelloGuys: function () {
			return "Hello guys!";
		},
		queryHello: function (argParent, argArguments, argContext) {
			console.log(argContext.User?.LoggedId);
			return `Hello ${argArguments.argName}!`;
		},
		queryHelloWithSubscription: function (argParent, argArguments) {
			modulePubsub.publish(`${stringChannelExample}-${argArguments.argChannelIdentifier}`, {
				subscribeMessage: {
					Author: "John",
					Text: "Hello!",
				},
			});
			return "Hello guys!";
		},
	},
};

export { objectResolvers };
