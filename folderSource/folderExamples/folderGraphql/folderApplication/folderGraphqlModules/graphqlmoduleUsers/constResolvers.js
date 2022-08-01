// FAKE DATABASE TABLE
const arrayFakeUsersDatabaseTable = [
	{ fieldUserId: 1, fieldName: "John", fieldAge: 20 },
	{ fieldUserId: 2, fieldName: "Mark", fieldAge: 30 },
];
/////

const constResolvers = {
	Query: {
		readUsers: function () {
			console.log("GETTING ALL USERS...");
			return arrayFakeUsersDatabaseTable;
		},

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		readUser: function (argParent, argArguments) {
			console.log("GETTING USER BY ID...");
			const arraySelectedUser = arrayFakeUsersDatabaseTable.filter((currentUser) => currentUser.fieldUserId === argArguments.argUserId);
			if (arraySelectedUser.length === 0) {
				return null;
			}
			if (arraySelectedUser.length > 1) {
				throw "MORE THAN ONE USER WITH THE SAME ID";
			}
			return arraySelectedUser[0];
		},

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		readLoggedUser: function (argParent, argArguments, argContext) {
			console.log("GETTING LOGGED USER...");
			const arraySelectedUser = arrayFakeUsersDatabaseTable.filter((currentUser) => currentUser.fieldUserId === argContext.User.LoggedId);
			if (arraySelectedUser.length === 0) {
				return null;
			}
			if (arraySelectedUser.length > 1) {
				throw "MORE THAN ONE USER WITH THE SAME ID";
			}
			return arraySelectedUser[0];
		},
	},

	Mutation: {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		createUser: function (argParent, argArguments) {
			console.log("CREATING USER...");
			console.log("ARGUMENTS:", argArguments);
			const arrayUserIds = arrayFakeUsersDatabaseTable.map((currentUser) => currentUser.fieldUserId);
			const numberNextId = Math.max(...arrayUserIds) + 1;
			const objectNewUser = {
				fieldUserId: numberNextId,
				...argArguments.argData,
			};
			arrayFakeUsersDatabaseTable.push(objectNewUser);
			return objectNewUser;
		},

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		updateUser: function (argParent, argArguments) {
			console.log("UPDATING USER...");
			console.log("ARGUMENTS:", argArguments);
			const numberIndex = arrayFakeUsersDatabaseTable.findIndex((currentUser) => currentUser.fieldUserId === argArguments.argData.parUserId);
			if (numberIndex === -1) {
				return null;
			}
			arrayFakeUsersDatabaseTable[numberIndex] = {
				...arrayFakeUsersDatabaseTable[numberIndex],
				...argArguments.argData,
			};
			return arrayFakeUsersDatabaseTable[numberIndex];
		},

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		deleteUser: function (argParent, argArguments) {
			console.log("ARGUMENT:", argArguments);
			const numberIndex = arrayFakeUsersDatabaseTable.findIndex((currentUser) => currentUser.fieldUserId === argArguments.argData.parUserId);
			if (numberIndex === -1) {
				return null;
			}
			const constReturn = arrayFakeUsersDatabaseTable.splice(numberIndex, 1);
			return constReturn[0];
		},
	},
};

export { constResolvers };
