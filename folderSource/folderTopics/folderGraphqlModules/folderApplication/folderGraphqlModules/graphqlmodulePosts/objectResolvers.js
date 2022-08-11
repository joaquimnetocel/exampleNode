// FAKE DATABASE TABLE
const arrayFakePostsDatabaseTable = [
	{ fieldPostId: 1, fieldDescription: "This is a post about cars.", fieldUserIndex: 1, fieldStatus: "enumPublished" },
	{ fieldPostId: 2, fieldDescription: "This is a post about pets.", fieldUserIndex: 1, fieldStatus: "enumPublished" },
	{ fieldPostId: 3, fieldDescription: "This is a post about houses.", fieldUserIndex: 2, fieldStatus: "enumDraft" },
	{ fieldPostId: 4, fieldDescription: "This is a post about jobs.", fieldUserIndex: 2, fieldStatus: "enumDraft" },
];
/////

const objectResolvers = {
	Query: {
		readPosts: async function (argParent, argArguments) {
			if (argArguments.where === undefined) {
				return arrayFakePostsDatabaseTable;
			}
			const arraySelectedPosts = arrayFakePostsDatabaseTable.filter((currentPost) => {
				return currentPost.fieldStatus === argArguments.where.fieldStatus;
			});
			return arraySelectedPosts;
		},
	},

	typeUser: {
		readPosts: function (argParent, argArguments) {
			console.log("argParent:", argParent);
			console.log("argArguments:", argArguments);
			if (argArguments.where === undefined) {
				const arraySelectedPosts = arrayFakePostsDatabaseTable.filter((currentPost) => {
					return currentPost.fieldUserIndex === argParent.fieldUserId;
				});
				return arraySelectedPosts;
			}
			const arraySelectedPosts = arrayFakePostsDatabaseTable.filter((currentPost) => {
				return currentPost.fieldUserIndex === argParent.fieldUserId && currentPost.fieldStatus === argArguments.fieldStatus;
			});
			return arraySelectedPosts;
		},
	},
};

export { objectResolvers };
