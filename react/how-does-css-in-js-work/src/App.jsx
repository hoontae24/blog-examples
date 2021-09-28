import { useState } from "react";

import Task from "./components/ClassBasedTask";
// import Task from "./components/PropsBasedTask";
// import Task from "./components/StyledComponentBasedTask";
// import Task from "./components/EmotionBasedTask";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "대청소", done: false },
    { id: 2, title: "설거지", done: false },
    { id: 3, title: "빨래", done: false },
    { id: 4, title: "가출", done: false },
  ]);

  const handleDoneChange = (task) => () => {
    setTasks(
      tasks.map((t) => (t.id === task.id ? { ...t, done: !task.done } : t))
    );
  };

  console.log(document.styleSheets);

  return (
    <div>
      <h1>TASKER</h1>
      <hr />
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            title={task.title}
            done={task.done}
            onDoneChange={handleDoneChange(task)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
