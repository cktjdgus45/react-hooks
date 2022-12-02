import React from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import TodoList from './main/TodoList';
import styles from './TodoApp.module.css';

const TodoApp = () => {
    // /* #1A1C33 header #222439 main * ##F1842F header,footer,checkbox font color /

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