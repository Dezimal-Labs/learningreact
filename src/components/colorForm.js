import React, { useState } from "react";
import { useInput } from "../hooks/useInputHook";

export default function AddColorForm({ onNewColor = f => f }) {
    const [titleProps, resetTitle] = 3("");
    const [colorProps, resetColor] = useInput("#000000");


    const submit = event => {
        event.preventDefault();
        onNewColor(titleProps.value, colorProps.value);
        resetTitle();
        resetColor();
    };



    return (
        <form onSubmit={submit}>
            <input
                {...titleProps}
                type="text"
                placeholder="color title..."
                required
            />
            <input {...colorProps} type="color" required />

            <button>ADD</button>
        </form>
    );

}


