# @mdkroon/react-ui-components

> React ui components library

[![NPM](https://img.shields.io/npm/v/@mdkroon/react-ui-components.svg)](https://www.npmjs.com/package/@mdkroon/react-ui-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @mdkroon/react-ui-components
```

## Usage

Import the components from `@mdkroon/react-ui-components`

```jsx
import React from 'react'
import { Gutter, MaxWidth, Spacer } from '@mdkroon/react-ui-components'

const YourComponent = () => {
  return (
    <MaxWidth size={1200}>
      <Gutter size={12}>
        Some text here
        <Spacer height={10}/>
        More text here
      </Gutter>
    </MaxWidth>
  )
}

export default YourComponent
```

## Available components

### Layout
|Name|Description|
|---|---|
|Gutter|add padding left and right|
|MaxWidth|limits the width of its content|
|Spacer|add space between components|

### Text
|Name|Description|
|---|---|
|SplitText|split plain text with new line characters into html text|
|TruncText|truncate the text and add ellipsis if it doesn't fit on one line|

## Documentation

The documentation and props of all the components can be found in [documentation.md](documentation.md).

## Example

An example can be viewed on [github pages](https://mdkroon.github.io/react-ui-components/)

## Credits

This project is bootstrapped with [create react library](https://github.com/transitive-bullshit/create-react-library)

## License

GNU GPLv3 © [MDKroon](https://github.com/MDKroon)
