# _PRETTIER_ (CODE FORMATTER)

## DESCRIPTION

[PRETTIER](https://prettier.io) IS A CODE FORMATTER TOOL.

## INSTALLATION

* INSTALL THE [_PRETTIER_ _VSCODE_ EXTENSION](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).
* CREATE [_.prettierrc_](../../.prettierrc) FILE WITH _PRETTIER_ CONFIGURATIONS. HERE IS AN EXAMPLE OF _.prettierrc_ FILE:

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

* CREATE [_.prettierignore_](../../.prettierignore) WITH A LIST OF FILE TYPES IGNORED BY _PRETTIER_. HERE IS AN EXAMPLE OF _.prettierignore_:

```text
*.md
*.yml
```

[BACK](./fileProjectCreation.md)
