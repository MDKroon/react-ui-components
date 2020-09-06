import React from 'react'
import PropTypes from 'prop-types'

const MaxWidth = ({ size, children, className, unit }) => {
  return (
    <div
      className={className}
      style={{
        maxWidth: `${size}${unit}`,
        marginLeft: 'auto',
        marginRight: 'auto'
      }}
    >
      {children}
    </div>
  )
}

MaxWidth.defaultProps = {
  className: 'max-width',
  unit: 'px'
}

MaxWidth.PropTypes = {
  maxWidth: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  unit: PropTypes.string
}

export default MaxWidth
