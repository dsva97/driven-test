import React, { useContext, useMemo } from 'react'
import { AppContext } from '../../App'
import { intlRound } from "../../utils"

import classes from "./style.module.css"

const Result = () => {
  const data = useContext(AppContext).data
  const subTotal = useMemo(()=>{
    return data.products.reduce((_acum, product)=> {
      return _acum + product.quantity * product.price
    }, 0)
  }, [data.products])
  const total = useMemo(() => subTotal + data.shipping, [subTotal, data.shipping]) 
  return (
    <div className={classes.container}>
      <header>
        <div className={classes.row}>
          <span>Subtotal:</span>
          <span>S/.{intlRound(subTotal)}</span>
        </div>
        <div className={classes.row}>
          <span>Envio:</span>
          <span>S/.{intlRound(data.shipping)}</span>
        </div>
      </header>
      <footer>
        <div className={classes.row}>
          <span>Total:</span>
          <span>S/.{intlRound(total)}</span>
        </div>
      </footer>
    </div>
  )
}

export default Result
