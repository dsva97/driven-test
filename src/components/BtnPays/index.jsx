import React, { useContext } from 'react'
import { AppContext } from '../../App'

import Button from '../Button'

const BtnPays = () => {
  const { data,setData } = useContext(AppContext)
  const cleanProducts = () => {
    setData({...data, products: []})
  }
  const pay = () => {
    alert("Pedido comprado :)\nRecargaré la página por ti")
    window.location.href = "/"
  }
  return (
    <>
      <Button onClick={pay} filled={true} size="full">Pagar</Button>
      <Button onClick={cleanProducts} style={{fontSize: "0.85em", fontWeight: "900", alignSelf: "flex-end", float: "right"}}>Limpiar carro</Button>
    </>
  )
}

export default BtnPays
