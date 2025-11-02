import type { todo } from "../interfaces/Todo";
import React from "react";

interface ListTasksProps {
    tasks: todo[];
}

const CompletedTasks: React.FC<ListTasksProps> = ({ tasks }) => {
    const nvu = tasks.filter((tmp) => tmp.completed == true);
    return (
        <div>
            <h1>tat ca cong viec da hoan thanh: </h1>
            <ul>
                {nvu.map((nhiemvu) => (
                    <li key={nhiemvu.id}> {nhiemvu.text} </li>
                ))}
            </ul>
        </div>
    );
};

export default CompletedTasks;
