import React from 'react'
import TodoItem from './TodoItem'
import {useSelector} from 'react-redux'

function TodoList() {
    const todos = useSelector(state => state.todos)
    const filter = useSelector(state => state.filter)
    console.log(filter,todos)
const filterT=(todos,filter)=>   {
if (filter=== 'all'){
    return todos
}
else if ( filter ==='undone'){
    return todos.filter(el=>el.done==false)
}
else if ( filter ==='done'){
    return todos.filter(el=>el.done==true)
}
}
let newfilterdlist = filterT(todos,filter)
    return (
        <div className="my-4">
            {todos.map (todo => {
                return <TodoItem key = {todo.id} todo ={todo} />
            } )}
        </div>
    )
}

export default TodoList
