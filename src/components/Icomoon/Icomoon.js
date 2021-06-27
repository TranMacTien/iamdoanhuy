import React from "react"
import PropTypes from "prop-types"

const propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  block: PropTypes.bool,
}

const defaultProps = {
  className: "",
  color: "",
  size: 16,
  name: "",
  block: false,
  style: {},
}

const Icomoon = React.forwardRef((props, ref) => {
  const { className, color, size, name, block, style, ...otherProps } = props

  return (
    <i
      className={`icon-${name} ${className}`}
      style={{
        color,
        fontSize: size,
        display: `${block && "block"}`,
        ...style,
      }}
      ref={ref}
      {...otherProps}
    />
  )
})

Icomoon.propTypes = propTypes
Icomoon.defaultProps = defaultProps

export default Icomoon
