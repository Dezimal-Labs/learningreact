import React, { useState, useEffect } from "react";
import '../App.css';




function UseEffectHook() {
    const [val, setVal] = useState("");
    const [phrase, setPhrase] = useState("Default");

    const onChangeInput = (textval) => {
        setVal(textval)
    }

    const addPhrase = () => {
        setVal("");
        setPhrase(val)
    }
//useeffect has 2 parameters (callbackfunction, dependencyArray)
    useEffect(() => {
        console.log(val);
    },[val]);  //Empty array [] ,make one time rendering(page load)

    useEffect(() => {
        console.log(1);
    },[phrase])

    
    return (
        <div>
            <input type="text" placeholder={phrase} value={val} onChange={(e) => onChangeInput(e.target.value)} />
            <button onClick={addPhrase}>Add</button> <br />
            <label>
                {val}
            </label>
        </div>

    );
}

export default UseEffectHook;
