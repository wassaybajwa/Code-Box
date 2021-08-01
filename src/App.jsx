import React, { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    const [red, green, blue] = [9, 132, 227]
    
    function increase() {
      //count++
      setCount(count + 1)
    } 
    function decrease() {
        //count++
        setCount(count - 1)
      } 
    
    return (
      <div className="container">
        {/* <h1>{state[0]}</h1>  */}
        <h1>{count}</h1> 

        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
      
    );
    
}

export default App;
