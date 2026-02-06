import React, { useState } from "react";

let TaskDetails = ({ onAddButton }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDate, setTaskDate] = useState("");

  const handleAdd = () => {
    if (taskName && taskDate) {
      onAddButton(taskName, taskDate);
      setTaskName("");
      setTaskDate("");
    }
    else {      alert("Please fill in both fields");
    }
  };

  return (
    <div className="container mt-3">
      <div className="row g-2 align-items-center">
        <div className="col-md-5">
          <input
            type="text"
            className="input-tag form-control"
            placeholder="Enter task"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <input
            type="date"
            className="form-control"
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <button onClick={handleAdd} className="btn btn-success w-100">
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};
export default TaskDetails;
