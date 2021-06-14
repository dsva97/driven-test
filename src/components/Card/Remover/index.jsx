import React, { useContext } from 'react'
import { FaTrash } from "react-icons/fa"
import { AppContext } from '../../../App'

import classes from "./style.module.css"

const Remover = ({ productId }) => {
  const { data, setData } = useContext(AppContext)
  const onClick = () => {
    const products = data.products.filter(product=>product.id!==productId)
    setData({...data, products})
  }
  return (
    <button onClick={onClick} className={classes.container}>
      <FaTrash></FaTrash>
      <span>
        Quitar producto
      </span>
    </button>
  )
}

export default Remover
