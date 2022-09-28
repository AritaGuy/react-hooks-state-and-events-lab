import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import items from "../data/items";

function App() {
 

  const[mode, setMode] = useState(
    false
  )
  
  

  function toogle2(){
   setMode(!mode)
  }

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = mode ? "App dark" : "App light"
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toogle2} >Dark Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
