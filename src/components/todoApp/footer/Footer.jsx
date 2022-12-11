import React, { useState } from 'react';
import styles from './Footer.module.css';

const Footer = ({ todoHandler, setTodos, darkTheme }) => {
    const [todo, setTodo] = useState("");
    const onSubmit = (e) => {
        e.preventDefault();
        todoHandler.todo = todo;
        setTodos(prev => {
            console.log(prev);
            return [...prev, todoHandler.todo];
        })
        setTodo('');
    }
    return (
        <footer className={darkTheme ? `${styles.dark} ${styles.footer}` : `${styles.footer}`}>
            <form className={darkTheme ? `${styles.dark} ${styles.form}` : `${styles.form}`} onSubmit={onSubmit}>
                <input value={todo} onChange={e => setTodo(e.target.value)} type="text" placeholder='Add Todo' className={styles.input} />
                <button type='submit' className={darkTheme ? `${styles.dark} ${styles.button}` : `${styles.button}`}>Add</button>
            </form>
        </footer>
    )
}
export default Footer;