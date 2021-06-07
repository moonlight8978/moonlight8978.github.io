# Javascript

## Prettier

```yml title=.prettierrc.yml
singleQuote: true
printWidth: 120
semi: false
trailingComma: es5
```

## Babel

```bash
yarn add -D @babel/core @babel/preset-env @babel/plugin-transform-runtime
```

```js title=babel.config.js
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: "defaults" }],
  ],
  plugins: ["@babel/plugin-transform-runtime"],
};
```

### Typescript

```bash
yarn add -D @babel/preset-typescript typescript
yarn tsc --init
```

```js title=babel.config.js
module.exports = {
  presets: [
    "@babel/preset-typescript",
  ],
};
```

```json title=tsconfig.json
{
  "compilerOptions": {
    "lib": ["ESNext"],
    "allowJs": true,
  }
}
```

```yml title=.eslintrc.yml
rules:
  no-use-before-define: 'off'
  '@typescript-eslint/no-use-before-define': error
  no-unused-vars: 'off'
  '@typescript-eslint/no-unused-vars':
    - error
    - args: none
      varsIgnorePattern: '^_'
  no-useless-constructor: 'off'
  '@typescript-eslint/no-useless-constructor':
    - error
  no-shadow: 'off'
  '@typescript-eslint/no-shadow':
    - error
```

### Module alias

```bash
yarn add --dev babel-plugin-module-resolver
```

```js title=babel.config.js
module.exports = {
  plugins: [
    [
      "module-resolver",
      {
        root: ["."],
        extensions: [".ts", ".tsx", ".js", ".jsx", "json"],
        alias: {
          "@src": "./src",
        },
      },
    ],
  ],
};
```

#### ESLint

```bash
yarn add -D eslint-import-resolver-typescript
```

```yml title=.eslintrc.yml
settings:
  import/resolver:
    typescript: {}
rules:
  import/order:
    - error
    - pathGroups:
        - pattern: '@src/**'
          group: parent
      groups:
        - builtin
        - external
        - parent
        - sibling
        - index
      newlines-between: always
```

#### Typescript
```json title=tsconfig.json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@src/*": ["./src/*"]
    }
  }
}
```

#### Jest
```ts title=jest.config.ts
export default {
  moduleNameMapper: {
    "^@src/(.*)$": "<rootDir>/your/folder/$1",
  },
};
```