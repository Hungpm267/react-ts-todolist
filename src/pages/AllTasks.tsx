import type { todo } from "../interfaces/Todo";
import React from "react";

// import "../index.css";

interface AllTasksProps {
  tasks: todo[];
  handleAddTask: (e: React.FormEvent) => void;
  handleDeleteTask: (id: number) => void;
  newTaskText: string;
  setNewTaskText: React.Dispatch<React.SetStateAction<string>>;
  handleDoneTask: (id: number) => void;
}

const AllTasks: React.FC<AllTasksProps> = ({ tasks, handleAddTask, handleDeleteTask, newTaskText, setNewTaskText, handleDoneTask }) => {
  const tasknotdone = tasks.filter((nvu) => nvu.completed == false);
  
  
  return (
    <div>
      <h3>bạn có {tasknotdone.length} công việc chưa hoàn thành</h3>
      <h1 className="">nhap task: </h1>
      <form action="" onSubmit={handleAddTask}>
        <input
          className="border border-gray-300 py-2 px-2"
          type="text"
          placeholder="them cong viec moi"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
        />
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          type="submit"
        >
          Them
        </button>
      </form>

      <ul>
        {tasknotdone.map((nvu) => (
          <li key={nvu.id}>
            {nvu.text}
            <button
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              type="button"
              onClick={() => handleDoneTask(nvu.id)}
            >
              Done
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
              type="button"
              onClick={() => handleDeleteTask(nvu.id)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllTasks;
