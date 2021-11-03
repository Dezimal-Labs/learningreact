import React from 'react';
import { useSelector } from 'react-redux';
import simpleReduxHook from '../hooks/simpleReduxHook';




export default function SimpleRedux() {
    const state = useSelector(state => state)
    const { OnIncrement, OnDecrement}=simpleReduxHook();
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
                {state}
            </p>
        </div>
        </>
    )
}
