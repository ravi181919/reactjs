import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  const increaseValue = () => {
    if(counter <  20)
    {
      setCounter(counter + 1)

      // interview qeution => 
      /* 
      setCounter(counter + 1) 
      setCounter(counter + 1) 
      setCounter(counter + 1) 
      setCounter(counter + 1)  
      // OutPut is =>  16 
      */

     /* setCounter((prevCounter) => prevCounter + 1 )
      setCounter((prevCounter) => prevCounter + 1 )
      setCounter((prevCounter) => prevCounter + 1 )
      setCounter((prevCounter) => prevCounter + 1 )
      // Output is => 19
      */
    }
  }
  const decreaseValue = () => {
    if(counter > 1 )
    {
      setCounter(counter - 1 )
    }
  }
  return (
   <div>
    <h1>Counter App With Hooks </h1>
    <h2>Counter App</h2>
    <p>count is: {counter}</p>
    <div>
      <button onClick={increaseValue}>Increase By one </button>
      <button onClick={decreaseValue}>Decrease By one </button>
    </div>
    <h3>Here consider, it is a about section {counter} </h3>
    <h3>Here consider, it is a footer section {counter} </h3>
   </div>
  )
}

export default App
