import React, { useState, useEffect } from 'react';
import Custom from './Custom';
import './Lista.css';
import data from './data.json';

const Todo = () => {
  const [todoData, setTodoData] = useState(null);

  useEffect(() => {
    // Aquí puedes cargar los datos desde el archivo JSON
    setTodoData(data);
  }, []);

  if (!todoData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="todo-list">
      <Custom
        title={todoData.title}
        description={todoData.description}
        image={todoData.image}
        features={todoData.features}
      />
    </div>
  );
};

export default Todo;