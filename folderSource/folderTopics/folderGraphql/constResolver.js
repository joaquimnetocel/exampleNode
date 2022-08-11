const constResolver = {
	queryHelloGuys: () => {
		return "Hello world!";
	},
	queryHello: (argParent, argArguments) => {
		return `Hello ${argArguments.argName}`;
	},
};

export { constResolver };
