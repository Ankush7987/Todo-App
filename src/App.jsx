import React, { useState } from 'react'
// import './App.css'
import TaskList from "./components/TaskList.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.jsx";
import TaskDetails from "./components/TaskDetails.jsx";
import WelcomeMessege from './components/WelcomeMessege.jsx';

function App() {
  const [taskData, setTaskData] = useState([]);

  const addTodoItem = (taskName, taskDate) => {
    setTaskData([...taskData, { taskName, taskDate }]);
  };

  const handleDeleteButton = (index) => {
    const newTaskData = [...taskData];
    newTaskData.splice(index, 1);
    setTaskData(newTaskData);
  }

  return (
    <>
      <Header />
      <TaskDetails onAddButton={addTodoItem} />
      {taskData.length === 0 && <WelcomeMessege></WelcomeMessege>}
      <TaskList TaskData={taskData} onDelete={handleDeleteButton}/>
    </>
  );
}

export default App;
