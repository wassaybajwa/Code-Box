import React, {useState} from "react";


function App() {
    setInterval(updateTime, 1000)
    const now =  new Date().toLocaleTimeString();
    
    const [time, setTime] = useState(now)

    function updateTime() {

        const newTime = new Date().toLocaleTimeString();
        setTime(newTime)
    }
    return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;


// import React, { useState } from "react";

// function App() {
//     const [count, setCount] = useState(0);

//     const [red, green, blue] = [9, 132, 227]
    
//     function increase() {
//       //count++
//       setCount(count + 1)
//     } 
//     function decrease() {
//         //count++
//         setCount(count - 1)
//       } 
    
//     return (
//       <div className="container">
//         {/* <h1>{state[0]}</h1>  */}
//         <h1>{count}</h1> 

//         <button onClick={increase}>+</button>
//         <button onClick={decrease}>-</button>
//       </div>
      
//     );
    
// }

// export default App;
