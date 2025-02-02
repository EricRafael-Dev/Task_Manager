import { useRef } from "react";

function AddTasks({ ondAddTask}) {
  const title = useRef();
  const description = useRef();

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      <input
        ref={title}
        type="text"
        placeholder="Task's Title"
        className="w-full p-2 rounded-md bg-slate-300 text-slate-500"
      />
      <input
        ref={description}
        type="text"
        placeholder="Task's Description"
        className="w-full p-2 rounded-md bg-slate-300 text-slate-500"
      />
      <button onClick={ () => {
        if(title.current.value.trim() && description.current.value.trim()) {
          ondAddTask(title, description)
          title.current.value = "";
          description.current.value = "";
        } else {alert("Fill in all fields!")}
        }} className="p-2 bg-slate-400 text-white rounded-md w-full cursor-pointer">
        Adicione
      </button>
    </div>
  );
}
export default AddTasks;
