import { useRef, useState } from 'react';


function App2() {
  const [todos , setTodos]= useState([]);

  const inputRef = useRef()

  const handleAddTodo =() =>{
    const text = inputRef.current.value;
    const newItem= {completed: false , text}
    setTodos([...todos,newItem]);
    inputRef.current.value= "";
   
  
  };
  const handelItemDone=(index) =>{
    const newTodos = [...todos];
    newTodos[index].completed=!newTodos[index].completed;
    setTodos(newTodos);

  };
  const handelDeletItem=(index) =>{
    const newTodos = [...todos];
    newTodos.splice(index,1)
    setTodos(newTodos)
  }
  return (
    <div className="App2">
      <h2>To Do List</h2>
      <div className="to-do-container">
      <ul>
          {todos.map (({text,completed},index) => {
            return( 
            <div className="item">
              <li 
              className={completed ? "done" : ""} key={index} 
            onClick={() => handelItemDone(index)}>{text}
            </li>
            <span onClick={() =>handelDeletItem(index)} className="trash">❌</span>
            </div>
            );
          })}
      </ul>
      <input ref={inputRef} placeholder="Enter task..." />
     <button  onClick={handleAddTodo}>Add Task</button>
    </div>
    </div>
  );
}

export default App2;
