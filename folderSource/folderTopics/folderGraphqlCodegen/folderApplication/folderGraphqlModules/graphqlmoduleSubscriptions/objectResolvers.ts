// MODULES
import { modulePubsub } from "../../modulePubsub.js";
import { stringChannelExample } from "../../modulePubsubChannels.js";
import type { GraphqlmoduleSubscriptionsModule } from "./folderGeneratedCodegenTypes/fileGeneratedCodegenTypes";

/////

const objectResolvers: GraphqlmoduleSubscriptionsModule.Resolvers = {
	Subscription: {
		subscribeMessage: {
			subscribe: (argParent, argArgument) => {
				return {
					[Symbol.asyncIterator]: () => modulePubsub.asyncIterator(`${stringChannelExample}-${argArgument.argChannelIdentifier}`),
				};
			},
		},
	},
};

export { objectResolvers };
