import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const TodoForm = ({ submitTodoHandler, edit }) => {
  const [todo, setTodo] = useState(edit ? edit.text : "");
  const myref = useRef(null);
  useEffect(() => {
    myref.current.focus();
  }, []);

  const changeHandler = (e) => {
    setTodo(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    //add entered todo to todos
    if (!todo) {
      alert("enter todo");
      return;
    }
    submitTodoHandler(todo);
    setTodo("");
  };
  return (
    <form onSubmit={submitHandler}>
      <>
      <div className="formControl">
        <input
          type="text"
           value={todo}
          onChange={changeHandler}
          placeholder={edit ? "Edit todo" : "Add todo"}
          ref={myref}
        />
        <button className={`btn ${edit ? "update" : "add"}` } type="submit">{edit ? "Edit" : "Add"}</button>
        </div>
      </>
    </form>
  );
};

export default TodoForm;
