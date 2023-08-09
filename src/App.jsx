import React, { useState } from 'react'
import Todo from './components/Todo'
import TodoList from './components/TodoList'

export default function App() {
  const [listtodo, setListTodo] =useState([])
  let addList = (inputText) =>{
    setListTodo([...listtodo,inputText]);

  }
  const deleteListItem = (key) =>{
    let newList = [...listtodo];
    newList.splice(key,1)
    setListTodo([...newList])
  }
  return (
    <div className="main-container d-flex justify-content-center align-items-canter m-5 p-5 rounded" style={{height : '100vh'}}>
      <div className="center-container p-5 bg-dark" style={{height: '500px',border:'2px black solid' }}>
        <Todo addList={addList}/>
        <h1 className="app-heading text-white">TODOLIST</h1>
        <hr/>
        {listtodo.map((listItem, i)=>{
          return (
            <TodoList key={i} index={i} item={listItem} deleteitem= {deleteListItem}/>
          )
        })}
      </div>
    </div>
  )
}
