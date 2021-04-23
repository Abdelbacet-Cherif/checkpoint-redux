import {ADD_TODO,UPDATE_TODO,DELETE_TODO,DONE_TODO,FILTER_TODO } from './actions';
import {initState} from './State';

export let reducer = (state=initState,action) => {
    let newTodos;

    switch (action.type) 
    {

        case ADD_TODO:
            newTodos = [...state.todos] ;
            newTodos.push(action.payload);
            return {
                ...state,
                todos:newTodos};
                
            case DONE_TODO:
                return {...state, todos:state.todos.map(el=> el.id===action.payload? {...el,done:!el.done}:el)}
         
        case DELETE_TODO:
            newTodos = [...state.todos] ;
            newTodos = newTodos.filter ( todo => todo.id !== action.payload)
            return {...state,
                todos:newTodos};
        case UPDATE_TODO:
            newTodos = [...state.todos] ;
            let index = -1;
            for (let i = 0; i < newTodos.length; i++) {
                index++;
                if (newTodos [i].id === action.payload.id){
                    break;
                }
            }
           if (index !== -1){
          newTodos[index] = action.payload
          return {...state,
            todos:newTodos};
}            

case FILTER_TODO:
    return {
     ...state,
    filter:action.payload
   }

                 
    }
    
    return state;
}