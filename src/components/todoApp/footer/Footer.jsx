import React, { useState } from 'react';
import styles from './Footer.module.css';

const Footer = ({ todoHandler }) => {
    const [todo, setTodo] = useState("");
    const onSubmit = (e) => {
        e.preventDefault();
        todoHandler.todo = todo;
        setTodo('');
    }
    return (
        <footer className={styles.footer}>
            <form className={styles.form} onSubmit={onSubmit}>
                <input value={todo} onChange={e => setTodo(e.target.value)} type="text" placeholder='Add Todo' className={styles.input} />
                <button type='submit' className={styles.button}>Add</button>
            </form>
        </footer>
    )
}
export default Footer;