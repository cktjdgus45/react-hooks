import React from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import TodoList from './main/TodoList';
import styles from './TodoApp.module.css';

const TodoApp = ({ todoHandler }) => {
    return (
        <div className={styles.bg}>
            <section className={styles.app}>
                <Header todoHandler={todoHandler} />
                <TodoList todoHandler={todoHandler} />
                <Footer todoHandler={todoHandler} />
            </section>
        </div>
    )
}

export default TodoApp;