'use client'
import React from 'react'

const Button = ({ title = "", onClick = () => { } }) => {
    // console.log("onclick", onClick);
    return (
        <button onClick={onClick} className='bg-blue-700 py-4 px-6 rounded-xl'>{title}</button>
    )
}

export default Button
