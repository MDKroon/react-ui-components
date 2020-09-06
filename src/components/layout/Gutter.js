import React from 'react'
import PropTypes from 'prop-types'

const Gutter = ({ size, children, className, unit }) => {
  return (
    <div
      className={className}
      style={{
        paddingLeft: `${size}${unit}`,
        paddingRight: `${size}${unit}`
      }}
    >
      {children}
    </div>
  )
}

Gutter.defaultProps = {
  className: 'gutter',
  unit: 'px'
}

Gutter.propTypes = {
  size: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  unit: PropTypes.string
}

export default Gutter
