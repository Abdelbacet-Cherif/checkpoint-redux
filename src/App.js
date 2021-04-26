import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.css';
import { useSelector } from "react-redux";

function App() {
  const todos = useSelector(state => state.todos)
  const filter = useSelector(state => state.filter)
  return (
    <div className="App m-5">
    <h1 > My Plan </h1>
  <TodoInput/>
  <TodoList todos={filter==="all" ? todos : todos.filter(todo=>todo.done===(filter==='true'? true:false))} />

    </div>
  );
}

export default App;
