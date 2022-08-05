const constResolvers = {
	Query: {
		queryHelloGuys: function () {
			return "Hello guys!";
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		queryHello: function (argParent: any, argArguments: any) {
			return `Hello ${argArguments.argName}!`;
		},
	},

	Mutation: {
		mutationHelloGuys: function () {
			return "Hello guys!";
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		mutationHello: function (argParent: any, argArguments: any) {
			return `Hello ${argArguments.argName}!`;
		},
	},
};

export { constResolvers };
