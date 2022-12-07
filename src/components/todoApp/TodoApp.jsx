import React from 'react';
import { useState } from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import TodoList from './main/TodoList';
import styles from './TodoApp.module.css';

const TodoApp = ({ todoHandler }) => {
    const [todos, setTodos] = useState([]);
    todoHandler.setState = setTodos;
    console.log(todos);
    return (
        <div className={styles.bg}>
            <section className={styles.app}>
                <Header todoHandler={todoHandler} />
                <TodoList todoHandler={todoHandler} todos={todos} />
                <Footer todoHandler={todoHandler} setTodos={setTodos} />
            </section>
        </div>
    )
}

export default TodoApp;