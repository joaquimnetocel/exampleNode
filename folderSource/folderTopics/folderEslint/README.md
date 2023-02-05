# _ESLINT_

## DESCRIPTION

EXAMPLE AND INSTRUCTIONS TO CONFIGURE:

* [ESLINT](https://eslint.org): A CODE ANALYSIS TOOL.

## REQUIRED VSCODE EXTENSION

INSTALL THE [_ESLINT_ _VSCODE_ EXTENSION](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

## REQUIRED PACKAGES

```bash
npm install -D eslint
```

## CONFIGURATIONS

```bash
npx eslint --init # THIS IS GOING TO CREATE .eslintrc.json
```

* ANSWER THE FOLLOWING QUESTIONS:
  * How would you like to use ESLint?
        - To check syntax, find problems, and enforce code style
  * What type of modules does your project use?
        - JavaScript modules (import/export)
  * Which framework does your project use?
        - None of these
  * Does your project use TypeScript?
        - Yes
  * Where does your code run?
        - Node
  * How would you like to define a style for your project?
        - Answer questions about your style
  * What format do you want your config file to be in?
        - JSON
  * What style of indentation do you use?
        - Tabs
  * What quotes do you use for strings?
        - Double
  * What line endings do you use?
        - Windows
  * Do you require semicolons?
        - Yes
  * @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest Would you like to install them now with npm?
        - Yes

* ADD THE FOLLOWING LINE TO THE RULES PROPERTY IN [_.eslintrc.json_](../.eslintrc.json) TO REQUIRE _comma-dangle_:

  ```json
  "comma-dangle": [1, "always-multiline"],
  ```

* REPLACE THE _quotes_ PROPERTY IN [_.eslintrc.json_](../.eslintrc.json) TO ENABLE TEMPLATE LITERALS:

  ```json
  "quotes": ["error", "double", { "allowTemplateLiterals": true }],
  ```

* REPLACE THE _indent_ PROPERTY IN [_.eslintrc.json_](../.eslintrc.json) TO INDENT IN SWITCHS:

  ```json
  "indent": ["error", "tab", { "SwitchCase": 1 }],
  ```

## EXAMPLE

TRY TO MODIFY THE CODE IN _exampleEslint.js_ TO SEE ESLINT WORKING.
