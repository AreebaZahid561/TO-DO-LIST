import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

const TaskForm = ({ addTask }) => {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('Low');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newTask = {
      id: uuidv4(),
      text: text.trim(),
      priority,
      dueDate,
      completed: false,
    };

    addTask(newTask);
    setText('');
    setPriority('Low');
    setDueDate('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="task-form-top">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="task-form-bottom">
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="Low">Low Priority</option>
          <option value="High">High Priority</option>
        </select>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button type="submit" className="btn-add">
          <Plus size={20} /> Add Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
