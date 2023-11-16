'use client'
import React, { useState } from 'react'
import Button from './Button'

const Todo = () => {
    const [todoList, setTodoList] = useState([])
    const [userInput, setUserInput] = useState("")
    const submitTodo = () => {
        if (userInput == "") {
            alert("please enter the value")
        }
        else {
            let todo = [...todoList, userInput]
            setTodoList(todo)
            setUserInput("")
            console.log("todo", todo);
        }
    }
    return (
        <div className='p-5 '>
            <input
                value={userInput}
                onChange={(e) => {
                    // console.log("event",e);
                    setUserInput(e.target.value);
                    console.log("user input", userInput);
                }} type='text' className='border-2 border-yellow-900 p-4 rounded-lg mr-4' />
            <Button title='submit' onClick={submitTodo} />
            <ul>
                {todoList.map((item, index) => {
                    return (
                        <div>
                            <li>{index + 1} {item}</li>
                            <Button title='delete' />
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default Todo
