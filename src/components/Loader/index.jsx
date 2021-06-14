import React from 'react'
import { AiOutlineReload} from "react-icons/ai"

import classes from "./style.module.css"

const Loader = () => {
  return (
    <div className={classes.container}>
      <AiOutlineReload fontSize={30}/>
    </div>
  )
}

export default Loader
