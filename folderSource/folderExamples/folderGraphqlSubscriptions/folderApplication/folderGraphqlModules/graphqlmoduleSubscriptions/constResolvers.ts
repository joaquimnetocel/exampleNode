// MODULES
import { modulePubsub } from "./modulePubSub.js";
/////

const constResolvers = {
	Query: {
		publishMessage: function () {
			modulePubsub.publish("MESSAGE_CHANNEL", {
				subscriptionMessage: "THIS IS MY MESSAGE",
			});
			return "ANY STRING";
		},
	},
	Subscription: {
		subscriptionMessage: {
			subscribe: () => {
				return {
					[Symbol.asyncIterator]: () => modulePubsub.asyncIterator("MESSAGE_CHANNEL"),
				};
			},
		},
	},
};

export { constResolvers };
