import { useState } from 'react';
import Counter from './Counter';
const RenderCounter = (props) => {
    const title = props.title;
    const value = props.value;
    const handleCallbackIncrement = props.parentCallbackIncrement;
    const handleCallbackDecrement = props.parentCallbackDecrement;

    if (value){
        return (  
            <Counter title = {title} parentCallbackIncrement = {handleCallbackIncrement} parentCallbackDecrement = {handleCallbackDecrement}/>
        );
    }
    return(
        null
    );
}
 
export default RenderCounter;