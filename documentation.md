# Documentation

## Content

Layout:
- [Gutter](#gutter)
- [MaxWidth](#maxwidth)
- [Spacer](#spacer)

Text:
- [SplitText](#splittext)
- [TruncText](#trunctext)

## Layout

### Gutter

| Prop | Type | Required | Default | Note |
|---|---|---|---|---|
size|number|yes|-|gutter size i.e. the padding-left and padding-right
children|node|yes|-|content of the component
className| string or object|no|`gutter`|CSS classname or CSS Module
unit|string|no|`px`|to change the unit of the size (to  `%` or `vw`)

### MaxWidth

| Prop | Type | Required | Default | Note |
|---|---|---|---|---|
size|number|yes|-|maximum with of the content
children|node|yes|-|content of the component
className| string or object|no|`max-width`|CSS classname or CSS Module
unit|string|no|`px`|to change the unit of the size (to  `%` or `vw`)

### Spacer

| Prop | Type | Required | Default | Note |
|---|---|---|---|---|
height|number|yes|-|height in px of de spacer
className| string or object|no|`spacer`|CSS classname or CSS Module

## Text

### SpitText

Convert plain text with new line characters into html text.
Supported for:
- `\n` = CR (Carriage Return)
- `\r` = LF (Line Feed)
- `\r\n` = CRLF (End Of Line)

| Prop | Type | Required | Default | Note |
|---|---|---|---|---|
children|node|yes|-|content of the component
breaks|bool|no|true|add breaks `<br />` (useful for inline html tags)
tagName|string|no|`span`|to change the html tag (i.e. `p` or `div`)


### TruncText

If the text doesn't fit on one line in the component, truncate the text and add ellipsis (`...`).

| Prop | Type | Required | Default | Note |
|---|---|---|---|---|
children|node|yes|-|content of the component
className| string or object|no|`trunc-text`|CSS classname or CSS Module
maxWidth|string|no|`none`|to set the maxWidth (i.e. `200px` or `50vw`)
tagName|string|no|`div`|to change the html tag (i.e. `p`)
