import React, { useState, useEffect } from 'react'
import BtnPays from '../components/BtnPays';
import Card from "../components/Card";
import Result from "../components/Result";
import Loader from '../components/Loader';
import BtnReload from '../components/BtnReload';

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
          <BtnReload load={initData} />
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
                : (
                  stateApp.data.products.length
                    ? stateApp.data.products.map(Card) 
                    :  <div style={{padding: "2em 0"}}>
                      <h1>Productos no agregados</h1>
                      <p>Para cargar los productos haz click aquí:</p>
                      <BtnReload load={initData} />
                    </div>
                )
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
