import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import chef from "./images/chef.jpg"

let languaje = "JavaScript";
function Header ({name , year}){
  console.log({name , year})
  return(
    <header>
      <h1>
        {name}'s Kitchen
      </h1>
      <p>Copyright {year}</p>
    </header>
  )
}

function Main({dishes}) {
  return(
<>    
  <div>
      <h2>Welcom to this beatufil Restaurant</h2>
    </div>
  <main>
    <img 
    src={chef} height={200} alt="a Photo form a chef owner"/>
      <ul>
      {
        dishes.map((dish)=>(
          <li key={dish.id} style = {{listStyleType : "none"}}>{dish.title}</li>
        ))
      }
    </ul>
  </main>
  </>
  )
  
}
const items = [
  "Pollo",
  "Frijoles",
  "Arroz",
  "toritllas"
]
const dishObjects= items.map((dish,i)=>({
  id:i,
  title:dish
}))


function App() {
    return ( 
    <div>
      <Header name="Rolan" year={new Date().getFullYear() } />
      <Main dishes = {dishObjects}/>
    </div>);
}
export default App
