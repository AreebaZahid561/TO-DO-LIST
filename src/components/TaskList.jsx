import React from 'react';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, toggleComplete, deleteTask, onDragEnd }) => {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <p>No tasks found. Enjoy your day!</p>
      </div>
    );
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="task-list">
        {(provided) => (
          <div
            className="task-list"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tasks.map((task, index) => (
              <TaskItem
                key={task.id}
                task={task}
                index={index}
                toggleComplete={() => toggleComplete(task.id)}
                deleteTask={() => deleteTask(task.id)}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskList;
