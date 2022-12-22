import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';import './TodoApp.css'
import TodoList from './TodoList';
const TodoApp=()=> {
 
    const[inputList,setInputList]=useState("")
    const[item,setItem]=useState([])
   const  itemEvent=(event)=>{
    setInputList(event.target.value)
    };
    const listofItem=()=>{
      setItem((oldItems)=>{
        return[...oldItems,inputList];
      })
      setInputList('')
    }
    const deleteItem=(id)=>{
      console.log("deleted")
      setItem((oldItems)=>{
         return oldItems.filter((arrElem,index)=>{
           return index!==id
         })
      })
    }
  return (
    <div  className='main-div'>
      <div className='center-div'>
        <h1>Todo List</h1>
        <input type="text" placeholder='Add A Item' value={inputList} className='mt-5' onChange={itemEvent}/>
        <button className='addIcon' onClick={listofItem}> <AddIcon/> </button>
         <ol>
             {item.map((itemval,index)=>{
               return <TodoList key={index} id={index} onSelect={deleteItem} text={itemval}/>
            })}
         </ol>
        </div>
    </div>
  )
}

export default TodoApp