export default {
	esbuild: {
		minify: false,
		target: "es2021",
		format: "esm",
		platform: "node",
	},
	// Prebuild hook
	prebuild: async () => {
		console.log("RUNNING PREBUILD.");
		const rimraf = (await import("rimraf")).default;
		rimraf.sync("./folderDist"); // clean up dist folder
	},
	// Postbuild hook
	postbuild: async () => {
		console.log("RUNNING POSTBUILD.");
		const cpy = (await import("cpy")).default;
		await cpy(
			[
				"folderSource/**/*.graphql", // Copy all .graphql files
				"!folderSource/**/*.{tsx,ts,js,jsx}", // Ignore already built files
			],
			"folderDist",
		);
	},
};
