import colorData from '../data/color-data.json';
import { useState, useContext, createContext } from 'react';
import { v4 } from 'uuid';

//Create Provider
const ColorContext = createContext();

//Context for retrieving values
const useColors = () => useContext(ColorContext)



const ColorProvider = ({ children }) => {
    const [colors, setColors] = useState(colorData);

    //Add color
    const onAddColor = (title, color) => {
        const newColors = [
            ...colors,
            {
                id: v4(),
                rating: 2,
                title,
                color
            }
        ];
        setColors(newColors);
    }

    //Rate color
    const onRateColor = (id, rating) => {
        const newColors = colors.map(color =>
            color.id === id ? { ...color, rating } : color
        );
        setColors(newColors);
    }

    //Remove color
    const onRemoveColor = (id) => {
        const newColors = colors.filter((c) => c.id !== id)
        setColors(newColors);
    }

    return (
        <ColorContext.Provider value={{ colors, onAddColor, onRateColor, onRemoveColor }}>
            {children}
        </ColorContext.Provider>
    )
}

export { ColorProvider, useColors };