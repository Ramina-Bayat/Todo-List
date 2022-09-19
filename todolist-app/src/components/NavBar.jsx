import { useState } from "react";
import Select from "react-select";

const NavBar = ({ remained, change, selectedOption }) => {
  const options = [
    { value: "All", label: "All" },
    { value: "Completed", label: "Completed" },
    { value: "UnCompleted", label: "UnCompleted" },
  ];
  return (
    <>
      {remained !== 0 ? (
        <h1>{remained} are not completed</h1>
      ) : (
        <h1>Set your todos</h1>
      )}
      {/* <select onChange={change} value={status}>
    <option value="All">All</option>
    <option value="Completed">Completed</option>
    <option value="UnCompleted">UnCompleted</option>
    </select> */}
      <Select options={options} onChange={change} value={selectedOption} className="select" />
    </>
  );
};

export default NavBar;
