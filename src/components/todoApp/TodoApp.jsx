import React from 'react';
import { useState } from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import TodoList from './main/TodoList';
import styles from './TodoApp.module.css';

const TodoApp = ({ todoHandler }) => {
    const [todos, setTodos] = useState([]);
    const [darkTheme, setDarkTheme] = useState(false);
    todoHandler.setState = setTodos;
    return (
        <div className={darkTheme ? `${styles.dark} ${styles.bg}` : `${styles.bg}`}>
            <section className={styles.app}>
                <Header todoHandler={todoHandler} setTodos={setTodos} darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                <TodoList todoHandler={todoHandler} todos={todos} darkTheme={darkTheme} />
                <Footer todoHandler={todoHandler} setTodos={setTodos} darkTheme={darkTheme} />
            </section>
        </div>
    )
}

export default TodoApp;