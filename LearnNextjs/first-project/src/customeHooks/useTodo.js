import React, { useState } from 'react'

const useTodo = () => {
    const [todoList, setTodoList] = useState([])
    const [userInput, setUserInput] = useState("")
    const [isUpdate, setIsUpdate] = useState(false)
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
    const deleteTodo = (indexNumber) => {
        console.log("todo index number", indexNumber);
        console.log("todo list", todoList);
        let newTodo = todoList.filter((item, index) => index != indexNumber)
        console.log("new todo", newTodo);
        setTodoList(newTodo)
    }
    const editTodo = (item) => {
        console.log("edit todo", item);
        setIsUpdate(true)
        setUserInput(item)

    }
    const updateTodo = (itemIndex) => {
        console.log("update todo", itemIndex);
        const updatedTodo = todoList.map((todo, index) => {
            if (index == itemIndex) {
                todo = userInput
                return todo
            }
            else {
                return todo
            }
        })
        console.log("update todo", updatedTodo);
        setTodoList(updatedTodo)
        setIsUpdate(false)
        setUserInput("")
    }
    return {
        todoList,
        setTodoList,
        userInput,
        setUserInput,
        submitTodo,
        deleteTodo,
        updateTodo, editTodo,
        isUpdate,
        setIsUpdate

    }
}

export default useTodo
