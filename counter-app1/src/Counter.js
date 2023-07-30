import { useState } from 'react';
//import img from './images/orange.jpg';

const Counter = (props) => {
    const title = props.title;
    const parentCallbackIncrement = props.parentCallbackIncrement;
    const parentCallbackDecrement = props.parentCallbackDecrement;

    const[value, setName] = useState(0);

    const handleIncrement = () => {
        setName(value+1);
        parentCallbackIncrement(value);
        console.log('increased value');
    }
    const handleDecrement = () => {
        setName(value-1);
        parentCallbackDecrement(value);
        console.log('decreased value');

    }

    return (  
        <div className="Counter">
            <h2>{title}</h2>
            
            <img src={'./images/'+title+'.jpg'} alt={title} /> 
            <div className = "controls">
                <button onClick={()=>handleDecrement()}>-</button>
                <p>{value}</p>
                <button onClick={()=>handleIncrement()}>+</button>
            </div>
            {/* <p>{'./images/'+title+'.jpeg'}</p> */}
            
        </div>
    );
}
 
export default Counter;