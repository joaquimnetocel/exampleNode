# _PRETTIER_

## DESCRIPTION

INSTRUCTIONS TO CONFIGURE:

* [PRETTIER](https://prettier.io): A CODE FORMATTER TOOL.

## REQUIRED VSCODE EXTENSION

INSTALL THE [_PRETTIER_ _VSCODE_ EXTENSION](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

## CONFIGURATIONS

* CREATE THE FILE [_.prettierrc_](/.prettierrc) WITH _PRETTIER_ CONFIGURATIONS. HERE IS AN EXAMPLE OF _.prettierrc_ FILE:

```json
{
    "trailingComma": "all",
    "tabWidth": 4,
    "semi": true,
    "singleQuote": false,
    "useTabs": true,
    "bracketSpacing": true,
    "printWidth": 1000
}
```

* CREATE THE FILE [_.prettierignore_](/.prettierignore) WITH A LIST OF FILE TYPES IGNORED BY _PRETTIER_. HERE IS AN EXAMPLE OF _.prettierignore_:

```text
*.md
*.yml
```

[BACK](/folderMarkdown/folderProjectCreation/fileProjectCreation.md)
