import React, { createElement, Fragment } from 'react'
import PropTypes from 'prop-types'

const SplitText = ({ children, breaks, tagName }) => {
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
            {item.length > 0 && createElement(tagName, null, item)}
            {breaks && splittedText.length - 1 !== index && <br />}
          </Fragment>
        )
      })}
    </Fragment>
  )
}

SplitText.defaultProps = {
  breaks: true,
  tagName: 'span'
}

SplitText.PropTypes = {
  children: PropTypes.node.isRequired,
  breaks: PropTypes.bool,
  tagName: PropTypes.string
}

export default SplitText
