import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoHandler from './components/todoApp/service/todo';
import TodoApp from './components/todoApp/TodoApp';
import './index.css';

const todoHandler = new TodoHandler();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoApp todoHandler={todoHandler} />
  </React.StrictMode>
);

