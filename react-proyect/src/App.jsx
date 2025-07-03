import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import chef from "./images/chef.jpg"
import { useReducer, useEffect } from 'react';

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

function Main({dishes , openStatus , onStatus}) {
  return(
<>    
  <div>
    <button onClick={()=>onStatus(true)}>i want to be open</button>
      <h2>Welcom to this beatufil Restaurant {" "} {openStatus ? "Open":"Close"}</h2>
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

const [status , toggle] =useReducer(
  (status)=>!status,true
);
  
useEffect(()=>{
  console.log(`The restaurat is ${status ? "Open" : "Closed"}`)
,[status]});
return ( 
    <div>
      <h1>The restaurand es currently {" "} {status ? "Open":"Close"}. </h1>
      < button onClick={toggle } >
      {status ? "Open":"Close"} Restaurant
      </button>

      <Header name="Rolan" year={new Date().getFullYear() } />
      <Main 
      dishes = {dishObjects} 
      openStatus={status} 
      onStatus={toggle}/>
    </div>
    );
}
export default App
