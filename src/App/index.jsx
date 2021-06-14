import React, { useState, useEffect } from 'react'
import { AiOutlineReload } from "react-icons/ai"
import BtnPays from '../components/BtnPays';
import BtnCircle from '../components/BtnCircle';
import Card from "../components/Card";
import Result from "../components/Result";
import Loader from '../components/Loader';

import classes from "./style.module.css"

const URL_API = process.env.REACT_APP_API + "/shopping-cart/list";

export const AppContext = React.createContext({});

const App = () => {
  const [data, setData] = useState({
    products: [],
    shipping: 40,
    hasPaid: false,
    isLoading: true,
    loadError: ""
  })
  const initData = () => {
    setData({...data, shipping: 40, hasPaid: false, isLoading: true, loadError: "" })
    fetch(URL_API).then(res=>res.json())
    .then(res=> {
      const newData = {...data, shipping: 40, hasPaid: false, isLoading: false, loadError: "" }
      newData.products = res.map(product=>({...product, quantity: 1}))
      setData(newData)
    })
    .catch((err) => {
      setData({products:[], shipping: 40, hasPaid: false, isLoading: false, loadError: err.toString()})
    })
  }

  useEffect(() => {
    initData()
    // eslint-disable-next-line
  }, [])
  const stateApp = { data, setData }
  return (
    <AppContext.Provider value={stateApp}>
      <div className={classes.app}>
        <header >
          <h1>Carrito de compras</h1>
          <BtnCircle onClick={initData} filled={false}>
            <AiOutlineReload/>
          </BtnCircle>
        </header>
        <main>
          { 
            stateApp.data.isLoading 
            ? <Loader />
            : (
              stateApp.data.loadError 
                ? <div>
                <h1>Hubo un error:</h1>
                <p>{stateApp.data.loadError}</p>
                </div>
                : stateApp.data.products.map(Card) 
              )
          }
        </main>
        <footer>
          <Result />
          <BtnPays />
        </footer>
      </div>
    </AppContext.Provider>
  )
}

export default App
