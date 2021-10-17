
import React, { useState } from 'react'
import ColorList from './colorList.js'
import colorData from '../data/color-data.json'
import AddColorForm from './colorForm.js';
import { v4 } from "uuid";

export default function ColorApp() {

    const [colors, setColors] = useState(colorData);

    return (
        <>
            <AddColorForm
                onNewColor={(title, color) => {
                    const newColors = [
                        ...colors,
                        {
                            id: v4(),
                            rating: 0,
                            title,
                            color
                        }
                    ];
                    setColors(newColors);
                }}
            />

            <ColorList colors={colors}
                onRemoveColor={(id) => {
                    const newColors = colors.filter((c) => c.id !== id)
                    setColors(newColors);
                }} />
        </>
    )
}
