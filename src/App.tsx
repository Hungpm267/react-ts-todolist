// import { useState } from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import CompletedTasks from "./pages/CompletedTasks";
import AllTasks from "./pages/AllTasks";
import "./index.css";
import { useTodoLogic } from "./hooks/useToDoLogic";

function App() {
  const { tasks, newTaskText, setNewTaskText, handleAddTask, handleDeleteTask, handleDoneTask } = useTodoLogic();
  return (
    <>
      <nav>
        <ul>
          <li>
            {" "}
            <Link to="/">danh sach tasks</Link>
          </li>
          <li>
            {" "}
            <Link to="/completed">completed tasks</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <AllTasks
              tasks={tasks}
              handleAddTask={handleAddTask}
              handleDeleteTask={handleDeleteTask}
              newTaskText={newTaskText}
              setNewTaskText={setNewTaskText}
              handleDoneTask={handleDoneTask}
            />
          }
        ></Route>
        <Route path="/completed" element={<CompletedTasks tasks={tasks} />}></Route>
      </Routes>
    </>
  );
}

export default App;
