import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { NavLink } from "react-router-dom";

function Tasks({ tasks, onClickTask, onDeleteTask }) {
  return (
    <div>
      <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => onClickTask(task.id)}
              className={`w-full text-left bg-slate-400 text-white p-2 rounded-md ${
                task.completed ? "line-through" : ""
              }`}
            >
              {task.title}
            </button>
            <NavLink to={`/task/${task.id}`} end>
              <button className="bg-slate-400 text-white p-2 rounded-md">
                <ChevronRightIcon />
              </button>
            </NavLink>
            <button
              onClick={() => onDeleteTask(task.id)}
              className="bg-slate-400 text-white p-2 rounded-md"
            >
              <TrashIcon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Tasks;
