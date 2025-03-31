import './App.css';
import Button from './components/button';
import { useState } from "react";


function App() {

  const [count, setCount] = useState(0)


  const increaseCount = () =>{
      setCount(count +1)
  }

  const decreaseCount = ()=>{
      setCount(count -1)
  }

  
  return (
    <div className="App">
      <div className="count">
        <Button 
          handleclick={increaseCount}
          title="increase"
         />
        <h1>{count}</h1>
        <Button 
          handleclick={decreaseCount}
          title="Decrease"
         />
      </div>
    </div>
  );
}

export default App;
