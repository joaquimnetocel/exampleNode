const functionFibonacci = function (argLength) {
	const arrayFibonacci = [];
	arrayFibonacci[0] = 1;
	arrayFibonacci[1] = 1;
	for (let i = 2; i < argLength; i++) {
		arrayFibonacci[i] = arrayFibonacci[i - 1] + arrayFibonacci[i - 2];
	}
	return arrayFibonacci;
};

console.log(functionFibonacci(10));
