import React, { useEffect, useState } from "react";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([]);

  function onClickTask(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    localStorage.setItem("tasks", JSON.stringify(newTasks))
    setTasks(newTasks);
  }

  function onDeleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTasks(newTasks);
  }
  function ondAddTask(title, description) {
    const newTask = {
      id: uuidv4(),
      title: title.current.value,
      description: description.current.value,
      completed: false,
    };
    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
    let st = localStorage.getItem("tasks");
    console.log(st);
    setTasks([...tasks, newTask]);
  }

  useEffect(() => {
    (JSON.parse(localStorage.getItem("tasks")) ? setTasks(JSON.parse(localStorage.getItem("tasks"))) : []);
  }, []);
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Tasks Manager
        </h1>
        <AddTasks ondAddTask={ondAddTask} />
        <Tasks
          tasks={tasks}
          onClickTask={onClickTask}
          onDeleteTask={onDeleteTask}
        />
      </div>
    </div>
  );
}

export default App;
