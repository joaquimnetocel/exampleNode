module.exports = {
	outDir: "./folderDist",
	esbuild: {
		minify: false,
		target: "es2021",
		format: "esm",
		platform: "node",
	},
	assets: {
		baseDir: "folderSource",
	},
};
