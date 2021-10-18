import colorData from '../data/color-data.json';
import { useState } from 'react';
import { v4 } from 'uuid';


const useColorHook = () => {
    const [colors, setColors] = useState(colorData);

    //Add color
    const onAddColor = (title, color) => {
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

    return [colors, onAddColor, onRateColor, onRemoveColor];
}

export default useColorHook;