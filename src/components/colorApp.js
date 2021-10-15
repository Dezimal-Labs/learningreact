
import React, { useState } from 'react'
import ColorList from './colorList.js'
import colorData from '../data/color-data.json'

export default function ColorApp() {

    const [colors, setColors] = useState(colorData);

    return <ColorList colors={colors}
    onRemoveColor={(id) => {
       const newColors = colors.filter((c) => c.id !== id)
       setColors(newColors);
   }}/>;
}
