import { createElement } from 'react'
import PropTypes from 'prop-types'

const TruncText = ({ children, className, maxWidth, tagName }) => {
  if (!children) {
    return null
  }

  const props = {
    className: className,
    style: {
      display: 'inline-block',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      width: '100%',
      maxWidth: maxWidth
    }
  }

  return createElement(tagName, props, children)
}

TruncText.defaultProps = {
  className: 'trunc-text',
  maxWidth: 'none',
  tagName: 'div'
}

TruncText.PropTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  maxWidth: PropTypes.string,
  tagName: PropTypes.string
}

export default TruncText
