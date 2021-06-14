import React, { useContext } from 'react'
import { AppContext } from '../../../App'

import BtnCircle from '../../BtnCircle'

import classes from "./style.module.css"

const Quantity = ({ quantity, productId }) => {
  const {data, setData} = useContext(AppContext)
  
  const modifyQuantity = (action) => {
    const products = [...data.products]
    const product = data.products.find(product=>product.id === productId)
    if(product) {
      switch(action) {
        case "plus":
          if(product.quantity<product.amount)
            product.quantity++
          break
        case "less":
          if(product.quantity)
            product.quantity--
          break
        default:
          break
      }
      setData({...data, products})
    }
  }
  return (
    <div className={classes.container}>
      <strong>Cantidad</strong>
      <br />
      <div className={classes.buttons}>
        <BtnCircle onClick={()=>modifyQuantity("less")}>-</BtnCircle>
        <span> {quantity} </span>
        <BtnCircle onClick={()=>modifyQuantity("plus")}>+</BtnCircle>
      </div>
    </div>
  )
}

export default Quantity
