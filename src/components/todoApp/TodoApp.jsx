import React from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import TodoList from './main/TodoList';
import styles from './TodoApp.module.css';

const TodoApp = () => {
    return (
        <div className={styles.bg}>
            <section className={styles.app}>
                <Header />
                <TodoList />
                <Footer />
            </section>
        </div>
    )
}

export default TodoApp;