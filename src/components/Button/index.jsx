import React from 'react'

import classes from "./style.module.css"

function Button({ children, filled, size="normal", className="", ...props }) {
  return (
    <button className={`${classes.btn} ${filled ? classes.filled : ""} ${classes[size]} ${className}`} {...props}>
      { children }
    </button>
  )
}

export default Button
