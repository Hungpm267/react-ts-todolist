// đây là file useTodoLogic.ts

import { useEffect, useState } from "react";
import type { todo } from "../interfaces/Todo";

export function useTodoLogic(){
        
    const [tasks, setTasks] = useState<todo[]>([]);
    const [newTaskText, setNewTaskText] = useState<string>("");
    useEffect(() => {
      const x: number = tasks.filter((nvu) => nvu.completed === false).length;
      document.title = `bạn còn ${x} task chưa hoàn thành`;
    }, [tasks]);
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
    return {
        tasks,
        newTaskText,
        setNewTaskText,
        handleAddTask,
        handleDeleteTask,
        handleDoneTask,
    };
}

