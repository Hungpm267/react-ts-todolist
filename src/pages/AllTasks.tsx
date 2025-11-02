import type { todo } from "../interfaces/Todo";
import React from "react";

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
      <h1>nhap task </h1>
      <form action="" onSubmit={handleAddTask}>
        <input type="text" placeholder="them cong viec moi" value={newTaskText} onChange={(e) => setNewTaskText(e.target.value)} />
        <button type="submit">Them</button>
      </form>

      <ul>
        {tasknotdone.map((nvu) => (
          <li key={nvu.id}>
            {nvu.text}
            <button type="button" onClick={() => handleDoneTask(nvu.id)}>
              done
            </button>
            <button type="button" onClick={() => handleDeleteTask(nvu.id)}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllTasks;
