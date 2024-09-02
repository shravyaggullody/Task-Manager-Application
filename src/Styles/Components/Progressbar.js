import React, { useContext } from "react";
import NotesContext from "../context/NotesContext.js";

export default function Progressbar() {
  const { tasks } = useContext(NotesContext);

  // Calculate completed and overdue tasks
  const calculateTasks = () => {
    let completedCount = 0;
    const overdueTasks = [];

    tasks.forEach(task => {
      if (task.completed) {
        completedCount++;
      } else {
        const taskDate = new Date(task.date);
        const currentDate = new Date();

        if (taskDate <= currentDate) {
          overdueTasks.push(task);
        }
      }
    });

    return { completedCount, overdueTasks };
  };

  const { completedCount, overdueTasks } = calculateTasks();
  const totalTasks = tasks.length;

  const handleClick = () => {
    console.log(overdueTasks);
  };

  return (
    <div className="progressbar-container">
      <span className="my-4 py-4 d-flex justify-content-between">
        <span onClick={handleClick}>All Tasks</span>
        {completedCount}/{totalTasks}
      </span>

      <div
        className="progress my-2"
        role="progressbar"
        aria-label="Task Completion Progress"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className="progress-bar bg-info"
          style={{ width: `${(completedCount / totalTasks) * 100}%` }}
        ></div>
      </div>
      <hr />

      <p>{overdueTasks.length === 0 ? "No" : overdueTasks.length} tasks for today</p>
      {overdueTasks.map((task, index) => (
        <p key={index} className="text text-danger">
          {task.title} is not completed
        </p>
      ))}
    </div>
  );
}
