import React from 'react'
import PropTypes from 'prop-types'

const Spacer = ({ height, className }) => {
  return <div className={className} style={{ height }} />
}

Spacer.defaultProps = {
  className: 'spacer'
}

Spacer.propTypes = {
  height: PropTypes.number.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
}

export default Spacer
