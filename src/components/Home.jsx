import React, { useState } from 'react';
import Task from './Task';
import './Home.css'; // Import the CSS file if not already

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    setTasks([...tasks, { title, description, completed: false }]);

    setTitle('');
    setDescription('');
  };

  const deleteTask = (index) => {
    const filteredArr = tasks.filter((_, i) => i !== index);
    setTasks(filteredArr);
  };

  const toggleTaskCompletion = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="container">
      <h1>Daily Tasks</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <button type="submit">ADD</button>
      </form>

      {tasks.map((item, index) => (
        <Task
          key={index}
          title={item.title}
          description={item.description}
          completed={item.completed}
          deleteTask={deleteTask}
          toggleTaskCompletion={() => toggleTaskCompletion(index)}
          index={index}
        />
      ))}
    </div>
  );
};

export default Home;
