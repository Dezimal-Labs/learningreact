
import React, { useState } from 'react'
import ColorList from './colorList.js'
import colorData from '../data/color-data.json'
import AddColorForm from './colorForm.js';
import { v4 } from "uuid";
import UseColorHook from '../hooks/useColorHook.js';
import useColorHook from '../hooks/useColorHook.js';

export default function ColorApp() {

    const [colors, onAddColor, onRateColor, onRemoveColor] =useColorHook();

    return (
        <>
            <AddColorForm
                onNewColor={(title, color) => {
                    onAddColor(title, color);
                }}
            />

            <ColorList colors={colors}
            onRateColor={(id, rating) => {
                onRateColor(id, rating);
            }}
            onRemoveColor={(id) => {
                    onRemoveColor(id);
                }} />
        </>
    )
}
