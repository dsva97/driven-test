import React from 'react'
import Button from "../components/Button";

import classes from "./style.module.css"

const URL_API = process.env.REACT_APP_API + "/shopping-cart/list";
console.log(URL_API);

const App = () => {
  return (
    <div className={classes.app}>
      <header >
        <h1>Carrito de compras</h1>
        <hr />
      </header>
      <main>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, eaque, quasi fugiat excepturi tenetur in neque rem veritatis fuga libero ad repellat necessitatibus architecto magni. Expedita similique dolor voluptatibus perferendis.</p>

        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, eaque, quasi fugiat excepturi tenetur in neque rem veritatis fuga libero ad repellat necessitatibus architecto magni. Expedita similique dolor voluptatibus perferendis.</p>

        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, eaque, quasi fugiat excepturi tenetur in neque rem veritatis fuga libero ad repellat necessitatibus architecto magni. Expedita similique dolor voluptatibus perferendis.</p>

        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, eaque, quasi fugiat excepturi tenetur in neque rem veritatis fuga libero ad repellat necessitatibus architecto magni. Expedita similique dolor voluptatibus perferendis.</p>

        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, eaque, quasi fugiat excepturi tenetur in neque rem veritatis fuga libero ad repellat necessitatibus architecto magni. Expedita similique dolor voluptatibus perferendis.</p>

        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, eaque, quasi fugiat excepturi tenetur in neque rem veritatis fuga libero ad repellat necessitatibus architecto magni. Expedita similique dolor voluptatibus perferendis.</p>

        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, eaque, quasi fugiat excepturi tenetur in neque rem veritatis fuga libero ad repellat necessitatibus architecto magni. Expedita similique dolor voluptatibus perferendis.</p>

        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, eaque, quasi fugiat excepturi tenetur in neque rem veritatis fuga libero ad repellat necessitatibus architecto magni. Expedita similique dolor voluptatibus perferendis.</p>

        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, eaque, quasi fugiat excepturi tenetur in neque rem veritatis fuga libero ad repellat necessitatibus architecto magni. Expedita similique dolor voluptatibus perferendis.</p>
      </main>
      <footer>
        <Button onClick={console.log} filled={true} size="full">Pagar</Button>
        <Button onClick={console.log} style={{fontSize: "0.85em", fontWeight: "900", alignSelf: "flex-end"}}>Limpiar carro</Button>
      </footer>
    </div>
  )
}

export default App
