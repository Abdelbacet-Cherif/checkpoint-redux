import React from 'react'
import { addTodo,filterTodo } from '../reduxs/actions'
import {useState} from 'react'
import {v1 as uuid} from 'uuid'
import { useDispatch } from 'react-redux'
import button from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';


function TodoInput() {
    let [name , setName] = useState();
    let dispatch = useDispatch();
  const handlefilter = (e)=>{
      e.preventDefault()
      dispatch(filterTodo(e.target.id))
  }



    return (
        <div>
            <div className ="row m-2">
                <input
                onChange={(e)=> setName(e.target.value) }
                value ={name}
                type ="text" 
                className ="col form-control"/>
                <button 
                onClick ={()=> {
            dispatch(
                addTodo(
                    {
                        id:uuid(),
                        name:name,
                        done:false,
                    }
                )
            );
                    setName ('');  
                } }
                className ="btn btn-primary mx-2 ">Add</button>
                        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" 
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown button
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item"  id="all" onClick={handlefilter} >ALL</a>
              <a class="dropdown-item" id="false" onClick={handlefilter} >UNDONE</a>
              <a class="dropdown-item"  id="true" onClick={handlefilter} >DONE</a>
              </div>
          </div>
            </div>
        </div>
    )
}

export default TodoInput
