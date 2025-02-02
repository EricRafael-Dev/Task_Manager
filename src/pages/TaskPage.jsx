import { ChevronLeftIcon } from "lucide-react";
import { NavLink, useParams } from "react-router-dom";

function TaskPage() {
  const { id } = useParams();
  const task = JSON.parse(localStorage.getItem("tasks"));
  const currentTask = task.find((task) => task.id === id);

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative gap-4">
          <NavLink to='/' end>
            <button className="absolute left-0 top-0 bottom-0 text-slate-100">
              <ChevronLeftIcon />
            </button>
          </NavLink>
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Task Description
          </h1>
        </div>
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
          <p className="font-medium text-3xl text-slate-500">Title: <span className="font-normal">{currentTask.title}</span></p>
          <p className="font-medium text-2xl text-slate-500">{currentTask.description}</p>
        </div>
      </div>
    </div>
  );
}
export default TaskPage;
