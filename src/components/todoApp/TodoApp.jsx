import React from 'react';
import { useState } from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import TodoList from './main/TodoList';
import styles from './TodoApp.module.css';

const TodoApp = ({ todoHandler }) => {
    const [todos, setTodos] = useState([]);
    const [darkTheme, setDarkTheme] = useState(false);
    console.log(darkTheme);
    todoHandler.setState = setTodos;
    return (
        <div className={`${styles.light} ${styles.bg}`}>
            <section className={styles.app}>
                <Header todoHandler={todoHandler} setTodos={setTodos} darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                <TodoList todoHandler={todoHandler} todos={todos} />
                <Footer todoHandler={todoHandler} setTodos={setTodos} />
            </section>
        </div>
    )
}

export default TodoApp;