import * as React from "react";

function App() {
  const [tasks, setTasks] = React.useState<string[]>([]);
  const [editingIndex, setEditingIndex] = React.useState<number | null>(null);

  const handleDeleteClick = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleEditClick = (index: number) => {
    setEditingIndex(index);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const taskValue = (target.elements.namedItem("task") as HTMLInputElement)
      .value;

    if (editingIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editingIndex] = taskValue;
      setTasks(updatedTasks);
      setEditingIndex(null);
    } else {
      setTasks([...tasks, taskValue]);
    }

    target.reset();
  };

  React.useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  return (
    <div className="App bg-slate-900 h-screen">
      <div className="container flex flex-row-reverse flex-wrap justify-evenly items-center content-stretch mx-auto my-0">
        <form
          className="border-2 rounded-lg border-violet-400 hover:border-slate-50 p-4 space-x-4"
          onSubmit={handleSubmit}
        >
          <div className="w-full">
            <div className="task">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="task"
              >
                {editingIndex !== null
                  ? "Modifier la tâche"
                  : "Ajouter une tâche"}
              </label>
              <input
                type="text"
                name="task"
                id="task"
                defaultValue={editingIndex !== null ? tasks[editingIndex] : ""}
                className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:shadow-outline"
              />
            </div>
            <button
              type="submit"
              className="w-full mt-2 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            >
              {editingIndex !== null ? "Mettre à jour" : "Ajouter une tâche"}
            </button>
          </div>
        </form>
        <div className="tasksLists border rounded-lg p-4 space-x-4">
          <ul className="text-slate-100">
            {tasks.map((task, index) => (
              <li
                className="flex flex-row justify-between items-center p-2"
                key={index}
              >
                {task}
                <button
                  className="text-blue-500 p-1 ml-2 border-2 border-blue-500 hover:border-green-500"
                  onClick={() => handleEditClick(index)}
                >
                  Edit
                </button>
                <button
                  className="text-red-500 p-1 ml-2 border-2 border-blue-500 hover:border-red-500"
                  onClick={() => handleDeleteClick(index)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
