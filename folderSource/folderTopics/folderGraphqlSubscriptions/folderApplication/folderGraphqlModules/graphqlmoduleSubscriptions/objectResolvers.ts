// MODULES
import { modulePubsub } from "../../modulePubsub.js";
import { stringChannelExample } from "../../modulePubsubChannels.js";
/////

const objectResolvers = {
	Subscription: {
		subscribeMessage: {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			subscribe: (argParent: any, argArgument: any) => {
				return modulePubsub.asyncIterator(`${stringChannelExample}-${argArgument.argChannelIdentifier}`);
			},
		},
	},
};

export { objectResolvers };

////////////////////////

// Subscription: {
// 	subscriptionMessage: {
// 		subscribe: () => {
// 			return {
// 				[Symbol.asyncIterator]: () => modulePubsub.asyncIterator("MESSAGE_CHANNEL"),
// 			};
// 		},
// 	},
// },
