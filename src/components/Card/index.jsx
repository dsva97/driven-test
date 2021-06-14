import React from 'react'

import classes from "./style.module.css"
import { intlRound } from "../../utils"
import Quantity from './Quantity'
import Remover from './Remover'

const Card = ({ id, price=150.12, quantity=1, amount=3, name="Producto 1", image="https://via.placeholder.com/150" }) => {
  
  return (
    <div className={classes.card} key={id}>
      <img src={image} alt="" />
      <main>
        <header>
          <h1>{name}</h1>
          <span>S/.{intlRound(price*quantity)}</span>
        </header>
        <footer>
            <Quantity productId={id} quantity={quantity} />
            <Remover productId={id} />
        </footer>
      </main>
    </div>
  )
}

export default Card
