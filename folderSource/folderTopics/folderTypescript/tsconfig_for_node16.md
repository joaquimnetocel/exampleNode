# What TypeScript configuration produces output closest to Node.js 16 capabilities?

As of Node.js 16.0.0, 100% of ES2021 is supported, and support for ES Modules is stable! If you know that you are targeting that version or newer, the optimal config would look like this:

* `"module": "ES2020"` & `"moduleResolution": "node"`
Node.js 16 support loading modules instead of the old CommonJS format, we do have to tell TypeScript that we are using Node.js's rules for resolving modules.

* `"allowSyntheticDefaultImports": true`
To provide backwards compatibility, Node.js allows you to import CommonJS packages with a default import. This flag tells TypeScript that it's okay to use import on CommonJS modules.

* `"target": "ES2021"`
This tells TypeScript that it's okay to output JavaScript syntax with features from ES2021. In practice, this means that it will e.g. output logical assignment operators & async/await syntax instead of embedding a polyfill.

* `"lib": ["ES2021"]`
This tells TypeScript that it's okay to use functions and properties introduced in ES2021 or earlier. In practice, this means that you can use e.g. Promise.any and String.prototype.replaceAll.

The full config would thus be:

```json
{
  "compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "lib": ["ES2021"],
    "module": "ES2020",
    "moduleResolution": "node",
    "target": "ES2021"
  }
}
```

In addition to this, we also need to tell Node.js to treat .js files in this project as ES Modules. The reason for this is that Node.js had to maintain backwards compatibility with code written for older Node.js versions. This can be done by adding "type": "module" to your package.json:

```json
{
  "type": "module"
}
```

Another change if you are coming from an earlier version of Node.js is that the file extensions when importing files are now mandatory. This means that you must write out .js at the end of your local imports. Note that this is .js even though you are importing a TypeScript file that actually has the file extension .ts. This might seem a bit confusing but this comment from one of the TS contributors explains why that is.

Here are some examples of how to write your import statements:

```javascript
// Built-in Node.js modules
import { readFileSync } from 'fs'

// CommonJS packages from Npm
import md5File from 'md5-file'

// The local file "a.ts"
import { a } from './a.js'
```

If you want to stick with CommonJS for now, to avoid the caveats explained above, you can use the following config:

```json
{
  "compilerOptions": {
    "lib": ["ES2021"],
    "module": "CommonJS",
    "target": "ES2021"
  }
}
```

If you are running Node.js 18 you can see the [similar configuration for Node.js 18 here](https://stackoverflow.com/a/72380008/148072).
