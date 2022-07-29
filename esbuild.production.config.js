import { build } from "esbuild";

build({
	entryPoints: ["./folderSource/index.ts"],
	outfile: "./folderBuild/index.js",
	minify: true,
	bundle: true,
	platform: "node",
	format: "esm",
	target: "es2021",
	banner: {
		js: "import { createRequire } from 'module';const require = createRequire(import.meta.url);",
	},
}).catch(() => process.exit(1));
