import React from 'react';
import simpleReduxHook from '../hooks/simpleReduxHook';



export default function SimpleRedux() {

    const { OnIncrement, OnDecrement, getState}=simpleReduxHook();
    return (
        <>
        <div>
            <h1>Simple redux hook</h1>
            <div>
            <button onClick={OnIncrement}>Increment</button>
            </div>
            <div>
            <button onClick={OnDecrement}>Decrement</button>
            </div>
            <p>
                {getState}
            </p>
        </div>
        </>
    )
}
