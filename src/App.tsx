// import { useState } from "react";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import CompletedTasks from "./pages/CompletedTasks";
import AllTasks from "./pages/AllTasks";
import { useState } from "react";
import type { todo } from "./interfaces/Todo";

function App() {
  const [tasks, setTasks] = useState<todo[]>([]);
  const [newTaskText, setNewTaskText] = useState<string>("");
  function handleAddTask(e: React.FormEvent): void {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      text: newTaskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setNewTaskText("");
  }
  function handleDeleteTask(id: number): void {
    const newListTasks = tasks.filter((nvu) => nvu.id != id);
    setTasks(newListTasks);
  }
  function handleDoneTask(id: number): void {
    const updatedTasks = tasks.map((nvu): todo => {
      if (nvu.id === id) {
        return { ...nvu, completed: true };
      }
      return nvu;
    });
    setTasks(updatedTasks);
  }
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
