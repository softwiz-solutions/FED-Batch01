'use client'
import React, { useState } from 'react'
import Button from './Button'
import useTodo from '@/customeHooks/useTodo'

const Todo = () => {
    // CRUD (create,read,update,delete)
    const { todoList, setTodoList, userInput, isUpdate, setIsUpdate, editTodo, setUserInput, submitTodo, deleteTodo, updateTodo } = useTodo()
    return (
        <div className='p-5 '>
            <input
                value={userInput}
                onChange={(e) => {
                    // console.log("event",e);
                    setUserInput(e.target.value);
                    console.log("user input", userInput);
                }} type='text' className='border-2 border-yellow-900 p-4 rounded-lg mr-4' />
            {!isUpdate && <Button title='submit' onClick={submitTodo} />}
            {todoList.map((item, index) => {
                return (
                    <div key={index}>
                        <li>{index + 1} {item}</li>
                        <Button title='delete' onClick={() => deleteTodo(index)} />
                        {isUpdate ? <Button title='Update' onClick={() => updateTodo(index)} /> : <Button title='Edit' onClick={() => editTodo(item)} />}
                    </div>
                )
            })}

        </div>
    )
}

export default Todo
