// FAKE DATABASE TABLE
const constFakeUserDatabaseTable = [
	{ fieldUserId: 1, fieldName: "John", fieldAge: 20 },
	{ fieldUserId: 2, fieldName: "Mark", fieldAge: 30 },
];
/////

const constResolvers = {
	Query: {
		readAllUsers: function () {
			console.log("GETTING ALL USERS...");
			return constFakeUserDatabaseTable;
		},

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		readUser: function (argParent: any, argArguments: any) {
			console.log("GETTING USER BY ID...");
			const constSelectedUser = constFakeUserDatabaseTable.filter((currentUser) => currentUser.fieldUserId === argArguments.argUserId);
			if (constSelectedUser.length === 0) {
				return null;
			}
			if (constSelectedUser.length > 1) {
				throw "MORE THAN ONE USER WITH THE SAME ID";
			}
			return constSelectedUser[0];
		},

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		readLoggedUser: function (argParent: any, argArguments: any, argContext: any) {
			console.log("GETTING LOGGED USER...");
			const constSelectedUser = constFakeUserDatabaseTable.filter((currentUser) => currentUser.fieldUserId === argContext.User.LoggedId);
			if (constSelectedUser.length === 0) {
				return null;
			}
			if (constSelectedUser.length > 1) {
				throw "MORE THAN ONE USER WITH THE SAME ID";
			}
			return constSelectedUser[0];
		},
	},

	Mutation: {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		createUser: function (argParent: any, argArguments: any) {
			console.log("CREATING USER...");
			console.log("ARGUMENTS:", argArguments);
			const constUserIds = constFakeUserDatabaseTable.map((currentUser) => currentUser.fieldUserId);
			const constNextId = Math.max(...constUserIds) + 1;
			const constNewUser = {
				fieldUserId: constNextId,
				...argArguments.argData,
			};
			constFakeUserDatabaseTable.push(constNewUser);
			return constNewUser;
		},

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		updateUser: function (argParent: any, argArguments: any) {
			console.log("UPDATING USER...");
			console.log("ARGUMENTS:", argArguments);
			const constIndex = constFakeUserDatabaseTable.findIndex((currentUser) => currentUser.fieldUserId === argArguments.argData.parUserId);
			if (constIndex === -1) {
				return null;
			}
			constFakeUserDatabaseTable[constIndex] = {
				...constFakeUserDatabaseTable[constIndex],
				...argArguments.argData,
			};
			return constFakeUserDatabaseTable[constIndex];
		},

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		deleteUser: function (argParent: any, argArguments: any) {
			console.log("ARGUMENT:", argArguments);
			const constIndex = constFakeUserDatabaseTable.findIndex((currentUser) => currentUser.fieldUserId === argArguments.argData.parUserId);
			if (constIndex === -1) {
				return null;
			}
			const constReturn = constFakeUserDatabaseTable.splice(constIndex, 1);
			return constReturn[0];
		},
	},
};

export { constResolvers };
