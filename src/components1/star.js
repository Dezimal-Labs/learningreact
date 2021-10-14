import React from 'react'
import { FaStar } from 'react-icons/fa'

// const star=({selected=false})=>{
//     return <FaStar color={selected ? "red" :"gray"} />
// };

const star = ({ selected = false, onSelect = (f) => f }) => {
    return <FaStar color={selected ? "red" : "gray"} onClick={onSelect} />
};

export default star;