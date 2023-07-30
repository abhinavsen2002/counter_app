
import { useState } from 'react';
import Navbar from './navbar';
import Counter from './Counter';
import RenderCounter from './renderCounter';

function App() {  
  const[value1, setName1] = useState(1);
  const[value2, setName2] = useState(1);
  // const[value2, setName] = useState(1);
  const[value3, setName3] = useState(0);

  const handleFilter1 = () => {
    setName1((value1+1)%2);
    console.log('decreased value');
  }

  const handleFilter2 = () => {
    setName2((value2+1)%2);
    console.log('decreased value');
  }

  const handleCallbackIncrement = (childCounter) =>{
    if(childCounter==0){
      setName3(value3+1);
      console.log("increased cart no");
    }
    // if(childCounter==0){
    //   setName3(value3-1);
    //   console.log("decreased cart value");
    // }
    console.log(childCounter);    
}

const handleCallbackDecrement = (childCounter) =>{
  if(childCounter==1){
    setName3(value3-1);
    console.log("decreased cart no");
  }
  console.log(childCounter);
}

  return (
    <div className="App">
      <Navbar value = {value3}/>
      <div className = "filters">
        <h1>Filters:</h1>
        <button className = {value1? "clicked": "unclicked"}onClick = {()=>handleFilter1()}>fruits</button>
        <button className = {value2? "clicked": "unclicked"}onClick = {()=>handleFilter2()}>vegetables</button>      
      </div>
      
      <div className="orange">
        <RenderCounter title = "orange" value = {value1} parentCallbackIncrement = {handleCallbackIncrement}parentCallbackDecrement = {handleCallbackDecrement}/>
      </div>
      
      <div className="banana">
        <RenderCounter title = "banana" value = {value1} parentCallbackIncrement = {handleCallbackIncrement}parentCallbackDecrement = {handleCallbackDecrement}/>
      </div>
      
      <div className="apple">
        <RenderCounter title = "apple" value = {value1} parentCallbackIncrement = {handleCallbackIncrement}parentCallbackDecrement = {handleCallbackDecrement}/>
      </div>
      
      <div className="mango">
        <RenderCounter title = "mango" value = {value1} parentCallbackIncrement = {handleCallbackIncrement}parentCallbackDecrement = {handleCallbackDecrement}/>
      </div>

      <div className="cauliflower">
        <RenderCounter title = "cauliflower" value = {value2} parentCallbackIncrement = {handleCallbackIncrement}parentCallbackDecrement = {handleCallbackDecrement}/>
      </div>
      
      <div className="bittergourd">
        <RenderCounter title = "bittergourd" value = {value2} parentCallbackIncrement = {handleCallbackIncrement}IncrementparentCallbackDecrement = {handleCallbackDecrement}/>
      </div>
      
      <div className="cabbage">
        <RenderCounter title = "cabbage" value = {value2} parentCallbackIncrement = {handleCallbackIncrement}parentCallbackDecrement = {handleCallbackDecrement}/>
      </div>
      
      <div className="spinach">
        <RenderCounter title = "spinach" value = {value2} parentCallbackIncrement = {handleCallbackIncrement}parentCallbackDecrement = {handleCallbackDecrement}/>
      </div>
    </div>
  );
}

export default App;
