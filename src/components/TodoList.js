import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, removeTask } from '../redux/todoSlice';

export default function TodoList() {
  const [task, setTask] = useState('');
  const tasks = useSelector(state => state.todo.tasks);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (task.trim()) {
      dispatch(addTask(task));
      setTask('');
    }
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input 
        value={task} 
        onChange={e => setTask(e.target.value)} 
        placeholder="Enter task" 
      />
      <button onClick={handleAdd} style={{ marginLeft: '5px' }}>Add</button>
      <ul>
        {tasks.map(t => (
          <li key={t.id}>
            {t.text} <button onClick={() => dispatch(removeTask(t.id))}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
