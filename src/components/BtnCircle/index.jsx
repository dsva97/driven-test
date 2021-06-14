import React from 'react'

import classes from "./style.module.css"

const BtnCircle = ({children, onClick, filled = true}) => {
  return (
    <button onClick={onClick} className={`${classes.btnCircle} ${filled?classes.filled:""}`}>
      {children}
    </button>
  )
}

export default BtnCircle
