import React, { createElement, Fragment } from 'react'
import PropTypes from 'prop-types'

const SplitText = ({ children, addBreaks, className, tagName }) => {
  if (!children) {
    return null
  }

  const splittedText = children
    .replace('\r\n', '\n')
    .replace('\r', '\n')
    .split('\n')

  return (
    <Fragment>
      {splittedText.map((item, index) => {
        return (
          <Fragment key={index}>
            {item.length > 0 && createElement(tagName, { className }, item)}
            {addBreaks && splittedText.length - 1 !== index && <br />}
          </Fragment>
        )
      })}
    </Fragment>
  )
}

SplitText.defaultProps = {
  addBreaks: true,
  className: 'split-text',
  tagName: 'span'
}

SplitText.PropTypes = {
  children: PropTypes.node.isRequired,
  addBreaks: PropTypes.bool,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  tagName: PropTypes.string
}

export default SplitText
