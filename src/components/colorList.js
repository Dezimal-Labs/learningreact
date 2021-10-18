import React from 'react'
import Color from './color.js'

export default function colorList({ colors = [], onRemoveColor = (f) => f, onRateColor = f => f }) {
    if (!colors.length) return <div>No color</div>

    return (
        <div>
            {colors.map(c => <Color key={c.id} {...c} onRemove={onRemoveColor} onRate={onRateColor} />)}
        </div>
    )
}
