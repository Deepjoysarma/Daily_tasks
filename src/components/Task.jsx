import React from 'react';

const Task = ({ title, description, completed, deleteTask, toggleTaskCompletion, index }) => {
  return (
    <div
      className="task"
      style={{
        padding: '15px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        marginBottom: '15px',
        backgroundColor: completed ? '#f0f0f0' : 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div style={{ flexGrow: 1 }}>
        <p
          style={{
            color: completed ? '#9e9e9e' : '#1e88e5',
            fontWeight: 'bold',
            fontSize: '18px',
            margin: '0 0 5px 0',
            textDecoration: completed ? 'line-through' : 'none',
          }}
        >
          {title}
        </p>
        <span
          style={{
            color: completed ? '#9e9e9e' : '#e53935',
            fontSize: '16px',
            textDecoration: completed ? 'line-through' : 'none',
          }}
        >
          {description}
        </span>
      </div>

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', marginLeft: 'auto' }}>
        <button
          style={{
            padding: '10px 15px',
            backgroundColor: completed ? '#4caf50' : '#1976d2', // Green if done, blue if not
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '18px',
            fontWeight: 'bold',
            transition: 'background-color 0.3s',
          }}
          onClick={toggleTaskCompletion}
          onMouseOver={(e) => e.target.style.backgroundColor = completed ? '#388e3c' : '#1565c0'}
          onMouseOut={(e) => e.target.style.backgroundColor = completed ? '#4caf50' : '#1976d2'}
        >
          ✔
        </button>

        <button
          style={{
            padding: '10px 15px',
            backgroundColor: '#ff5722',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '18px',
            fontWeight: 'bold',
            transition: 'background-color 0.3s',
          }}
          onClick={() => deleteTask(index)}
          onMouseOver={(e) => e.target.style.backgroundColor = '#e64a19'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#ff5722'}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Task;
