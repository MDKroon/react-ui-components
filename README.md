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

## Gutter

| Prop | Type | Required | Default | Note |
|---|---|---|---|---|
size|number|yes|-|gutter size i.e. the padding-left and padding-right
children|node|yes|-|content of the component
className| string or object|no|`gutter`|CSS classname or CSS Module
unit|string|no|`px`|to change the unit of the size (to  `%` or `vw`)

## MaxWidth

| Prop | Type | Required | Default | Note |
|---|---|---|---|---|
size|number|yes|-|maximum with of the content
children|node|yes|-|content of the component
className| string or object|no|`max-width`|CSS classname or CSS Module
unit|string|no|`px`|to change the unit of the size (to  `%` or `vw`)

## Spacer

| Prop | Type | Required | Default | Note |
|---|---|---|---|---|
height|number|yes|-|height in px of de spacer
className| string or object|no|`spacer`|CSS classname or CSS Module

## Example

An example can be viewed on [github pages](https://mdkroon.github.io/react-ui-components/)

## Credits

This project is bootstrapped with [create react library](https://github.com/transitive-bullshit/create-react-library)

## License

GNU GPLv3 © [MDKroon](https://github.com/MDKroon)