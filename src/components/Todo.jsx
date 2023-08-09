import React, {useState} from 'react'

export default function Todo(props) {
    const [inputText, setInputText] = useState('')
    

  return (
        
         <div className='input-container mb-3'>
            <input type="text" className='input-box-todo'
             placeholder='Enter our ToDo'
             value = {inputText} onChange={e =>{setInputText(e.target.value)}}/>
            <button className='add-btn'onClick={()=>{
                props.addList(inputText)
                setInputText("")            
                }}>+</button>
        </div>
    )
}

