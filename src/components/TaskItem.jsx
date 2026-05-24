import React from 'react';
import { Draggable } from '@hello-pangea/dnd';
import { Check, Trash2, GripVertical, Calendar } from 'lucide-react';
import { format, parseISO, isBefore, startOfToday } from 'date-fns';

const TaskItem = ({ task, index, toggleComplete, deleteTask }) => {
  const formattedDate = task.dueDate 
    ? format(parseISO(task.dueDate), 'MMM d, yyyy') 
    : '';

  const isOverdue = task.dueDate 
    && !task.completed 
    && isBefore(parseISO(task.dueDate), startOfToday());

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          className={`task-item ${task.completed ? 'completed' : ''} ${snapshot.isDragging ? 'is-dragging' : ''} ${isOverdue ? 'overdue' : ''}`}
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div className="drag-handle" {...provided.dragHandleProps}>
            <GripVertical size={20} />
          </div>

          <div
            className={`checkbox-wrap ${task.completed ? 'checked' : ''}`}
            onClick={toggleComplete}
          >
            <Check size={16} strokeWidth={3} />
          </div>

          <div className="task-details">
            <span className="task-content">{task.text}</span>
            <div className="task-meta">
              <span className={`priority-badge priority-${task.priority.toLowerCase()}`}>
                {task.priority}
              </span>
              {formattedDate && (
                <span className="date-badge">
                  <Calendar size={12} />
                  {formattedDate}
                </span>
              )}
            </div>
          </div>

          <div className="task-actions">
            <button className="btn-icon" onClick={deleteTask}>
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default TaskItem;
