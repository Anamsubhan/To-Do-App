import React from 'react'

export default function TodoList(props) {
  return (
    <li className='list-items d-flex justify-content-between text-white'>
       
        {props.item}
        <button className='icons'
        >
            <i className="fa-solid fa-trash-can icon-delete" onClick={e=>{
            props.deleteitem(props.index)
        }}></i>
        </button>
        

    </li>
  )
}
