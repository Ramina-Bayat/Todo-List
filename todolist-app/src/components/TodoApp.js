import { useEffect, useState } from "react";
import "../App.css";
import NavBar from "./NavBar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
    const[todos,setTodos]=useState([]);
    const [filteredTodos,setFilteredTodos]=useState([]);
    const[selectedOption,setSelectedOption]  =useState("All"); 

    useEffect(()=>{
      console.log("filtered");
      filterTodos(selectedOption.value)
    },[todos]);
    
const addTodoHandler=(input)=>{
 const newTodo={
    id:Math.floor(Math.random()*1000),
    text:input,
    isCompleted :false
 };
 setTodos([...todos,newTodo]);
}    
const completeHandler=(id)=>{
    // console.log(id);
    const index=todos.findIndex((todo,index)=>todo.id===id);
    const completed={...todos[index]}; //clone to not mutate state 
    completed.isCompleted=!completed.isCompleted;
    const todos2=[...todos];
    todos2[index] =completed;
    setTodos(todos2);
}
const deleteHandler=(id)=>{
    const filtered=todos.filter((todo)=>todo.id!==id);
    setTodos(filtered);

}
const editTodoHandler=(id,newValue)=>{
  const index=todos.findIndex((todo)=>todo.id===id);
  const Edited={...todos[index]}; //clone to not mutate state 
  Edited.text=newValue;
  const todos2=[...todos];
  todos2[index] =Edited;
  setTodos(todos2);

}
const remained=todos.filter((todo)=> !todo.isCompleted).length;
const changeHandler=(e)=>{
  console.log(e)
  setSelectedOption(e);
  filterTodos(e.value);
} 
const filterTodos=(status)=>{
 switch(status){
  case "All": {
   return setFilteredTodos(todos)
  }
  case "Completed" :{
   return setFilteredTodos(todos.filter((todo)=>todo.isCompleted));
  }
  case "UnCompleted" : {
    return setFilteredTodos(todos.filter((todo)=>!todo.isCompleted));
  } 
  default:
  return setFilteredTodos(todos)
 }

}
console.log("render");
  return (
    <div className="container">
      <NavBar remained={remained} change={changeHandler} selectedOption={selectedOption} />
      <TodoForm submitTodoHandler={addTodoHandler} />
      <TodoList
        todos={filteredTodos}
        onComplete={completeHandler}
        onDelete={deleteHandler}
        onUpdate={editTodoHandler}
      />
    </div>
  );
};

export default TodoApp;
