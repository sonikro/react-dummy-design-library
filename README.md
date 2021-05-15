# react-dummy-design-library

> This library was developed to experiment with the following technologies:

- [create-react-library](https://github.com/transitive-bullshit/create-react-library#readme)
- [microbundler](https://github.com/developit/microbundle)
- Typescript and Javascript components in the same repository

[![NPM](https://img.shields.io/npm/v/react-dummy-design-library.svg)](https://www.npmjs.com/package/react-dummy-design-library) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

- [react-dummy-design-library](#react-dummy-design-library)
  * [Install](#install)
- [Tests](#tests)
  * [Running tests](#running-tests)
- [Usage](#usage)
- [Example React App](#example-react-app)
  * [Running the example app to test your components](#running-the-example-app-to-test-your-components)
- [License](#license)

## Install

```bash
yarn add react-dummy-design-library
```

# Tests

You can write tests either in JS or TS, either way will work




## Running tests

```bash
yarn test
```

# Usage

```tsx
import { Button, Alert } from 'react-dummy-design-library'
import 'react-dummy-design-library/dist/index.css'

const App = () => {
  return <div>
    <Button text="Button in Typscript" />
    <Alert message="Alert message in JS" />
  </div>
}

export default App

```

# Example React App

This repository contains an [example](example/src/App.tsx) React App, that is useful for the developers to try out their components, and leave examples for others on how to use it.

## Running the example app to test your components
On the root project

```bash
yarn build
```
On the exampel project
```bash
yarn && yarn start
```


# License

MIT © [sonikro](https://github.com/sonikro)
