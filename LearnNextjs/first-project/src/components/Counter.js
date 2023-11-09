'use client'
import React, { useState } from 'react'
import Button from './Button'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const [show, setShow] = useState(false)
    const showAlert = () => {
        alert("hello")
    }
    const increment = () => {
        // counter++
        setCounter(counter + 1)
    }
    const decrement = () => {
        setCounter(counter - 1)
    }
    return (
        <div className='flex gap-3 items-center'>
            <Button title="-" onClick={decrement} />
            <h1>{counter}</h1>
            <Button title="+" onClick={increment} />
            <Button title="toogle Paragraph" onClick={() => {
                setShow(!show)
            }} />
            {show && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto accusantium fugit saepe inventore. Ab voluptatibus, ducimus illum laborum itaque debitis non, eos, reiciendis id nobis commodi labore consectetur eum ipsam?</p>}
        </div>
    )
}

export default Counter
