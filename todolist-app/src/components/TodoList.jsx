import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = ({todos,onComplete,onDelete,onUpdate}) => {

const [edit,setEdit]=useState({id:null,text:"",isCompleted:false})  ;

const renderTodos=()=>{
    if(todos.length===0) return <p>add some todos</p>;
    return (
    todos.map((todo)=>{
        return (
          <Todo
            key={todo.id}
            todo={todo}
            onComplete={() => {
              onComplete(todo.id);
            }}
            onDelete={() => {
              onDelete(todo.id);
            }}
            onEdit={()=>{setEdit(todo)}}
          />
        );
    }));

}  ;  

const editTodoHandler=(newValue)=>{
    onUpdate(edit.id,newValue);
    setEdit({id:null,text:""});
}


return(
    <div>
        {edit.id ? <TodoForm submitTodoHandler={editTodoHandler} edit={edit} /> : renderTodos()}
    </div>
);
};
 
export default TodoList;