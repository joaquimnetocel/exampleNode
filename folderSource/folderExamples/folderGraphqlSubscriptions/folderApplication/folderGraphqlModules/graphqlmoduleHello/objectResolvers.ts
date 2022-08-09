// MODULES
import { modulePubsub } from "../modulePubsub.js";
import { stringChannelExample } from "../modulePubsubChannels.js";
/////

const objectResolvers = {
	Query: {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		queryHelloGuys: function (argParent: any, argArgument: any) {
			modulePubsub.publish(`${stringChannelExample}-${argArgument.argChannelIdentifier}`, {
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
