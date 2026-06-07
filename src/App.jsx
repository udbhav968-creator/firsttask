import { useMemo, useState } from 'react';

const initialTasks = [
  { id: 1, title: 'Learn React basics', completed: false },
  { id: 2, title: 'Build a todo list app', completed: true },
  { id: 3, title: 'Push code to GitHub', completed: false },
];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState('');

  const activeCount = useMemo(() => tasks.filter((task) => !task.completed).length, [tasks]);

  function handleAddTask(event) {
    event.preventDefault();
    const title = newTask.trim();
    if (!title) return;

    setTasks((current) => [
      ...current,
      { id: Date.now(), title, completed: false },
    ]);
    setNewTask('');
  }

  function toggleCompletion(id) {
    setTasks((current) =>
      current.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function removeTask(id) {
    setTasks((current) => current.filter((task) => task.id !== id));
  }

  function clearCompleted() {
    setTasks((current) => current.filter((task) => !task.completed));
  }

  return (
    <main className="app-shell">
      <section className="card todo-card">
        <header className="header-row">
          <div>
            <h1>Todo List</h1>
            <p className="intro">A modern React todo app ready for GitHub deployment.</p>
          </div>
          <div className="stats">{activeCount} active task{activeCount === 1 ? '' : 's'}</div>
        </header>

        <form className="task-form" onSubmit={handleAddTask}>
          <input
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
            placeholder="Add a new task"
            aria-label="New task"
          />
          <button type="submit">Add Task</button>
        </form>

        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className={task.completed ? 'completed' : ''}>
              <label>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleCompletion(task.id)}
                />
                <span>{task.title}</span>
              </label>
              <button className="delete-btn" onClick={() => removeTask(task.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>

        <div className="footer-row">
          <button className="secondary-btn" onClick={clearCompleted}>
            Clear completed
          </button>
          <p className="footer-note">Built with React, Vite, and modern hooks.</p>
        </div>
      </section>
    </main>
  );
}
