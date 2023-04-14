import * as React from "react";

function App() {
  const [tasks, setTasks] = React.useState<string[]>([]);
  // const [task, setTask] = React.useState<string>("");

  const handleDeleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const removeIndex = tasks.filter((task, index) => index !== 0);
    setTasks(removeIndex);
  };

  // const handleChange = (task: React.ChangeEvent<HTMLInputElement>) => {
  //   setTask(task.target.value);
  // };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const newTask = (target.elements.namedItem("task") as HTMLInputElement)
      .value;
    setTasks([...tasks, newTask]);
    target.reset();
  };

  React.useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <div className="App bg-slate-900	 h-screen ">
      <div className="container flex flex-row-reverse flex-wrap justify-evenly items-center content-stretch mx-auto my-0">
        <form
          className="border-2 border-blue-500 hover:border-yellow-500 p-4 space-x-4"
          onSubmit={handleSubmit}
        >
          <div className="task">
            <input type="text" name="task" />
          </div>
          <button type="submit" className="addTask text-base text-slate-100	">
            Ajouter une tâche
          </button>
        </form>
        <div className="tasksLists border-2 border-blue-500 hover:border-yellow-500 p-4 space-x-4">
          <ul className="text-slate-100">
            {tasks.map((task, index) => (
              <li
                className="flex flex-row justify-between items-center p-2"
                key={index}
              >
                {task}
                <button
                  className="text-red-500  p-1 ml-2 border-2 border-blue-500 hover:border-red-500"
                  onClick={handleDeleteClick}
                >
                  X
                </button>
                {/* <input
                  type="text"
                  value={task}
                  onChange={handleChange}
                  className="text-red-500  p-1 border-2 border-blue-500 hover:border-green-500"
                >
                  O
                </input> */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
