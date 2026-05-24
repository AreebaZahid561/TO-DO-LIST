import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterBar from './components/FilterBar';
import ThemeToggle from './components/ThemeToggle';

// Safe local storage retriever
const getStoredTasks = () => {
  try {
    const saved = localStorage.getItem('todo-tasks');
    if (saved) return JSON.parse(saved);
  } catch (e) {
    console.error("Failed to load tasks from local storage", e);
  }
  return [];
};

function App() {
  const [tasks, setTasks] = useState(getStoredTasks());
  const [filter, setFilter] = useState('All'); // All, Pending, Completed
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('todo-theme') || 'light';
  });

  // Apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('todo-theme', theme);
  }, [theme]);

  // Save tasks to local storage
  useEffect(() => {
    localStorage.setItem('todo-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const addTask = (task) => {
    setTasks([task, ...tasks]);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    
    const visibleTasks = filteredTasks();
    const sourceTask = visibleTasks[result.source.index];
    const destinationTask = visibleTasks[result.destination.index];

    if (!sourceTask || !destinationTask) return;

    // Find real indexes in main tasks array
    const sourceIndexReal = tasks.findIndex(t => t.id === sourceTask.id);
    const destIndexReal = tasks.findIndex(t => t.id === destinationTask.id);

    const newTasks = Array.from(tasks);
    const [reorderedItem] = newTasks.splice(sourceIndexReal, 1);
    newTasks.splice(destIndexReal, 0, reorderedItem);

    setTasks(newTasks);
  };

  const filteredTasks = () => {
    if (filter === 'Pending') return tasks.filter((t) => !t.completed);
    if (filter === 'Completed') return tasks.filter((t) => t.completed);
    return tasks;
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>To-Do</h1>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </header>

      <TaskForm addTask={addTask} />

      <FilterBar currentFilter={filter} setFilter={setFilter} />

      <TaskList
        tasks={filteredTasks()}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        onDragEnd={handleDragEnd}
      />
    </div>
  );
}

export default App;
