import React from 'react';
import styles from './TodoList.module.css';
import { BsTrash2 } from 'react-icons/bs';
import { useState } from 'react';

const TodoList = ({ todoHandler }) => {
    return (
        <main className={styles.main}>
            {todoHandler.todos.map(todo => (
                <ul className={styles.todos}>
                    <li className={styles.todo}>
                        <div className={styles.checkboxContainer}>
                            <input className={styles.checkbox} type="checkbox" id="horns" name="horns" />
                            <label className={styles.label} htmlFor="horns">{todo.todo}</label>
                        </div>
                        <div className={styles.trash}>
                            <BsTrash2 className={styles.trashIcon} />
                        </div>
                    </li>
                </ul>
            ))}
        </main>
    )
}

export default TodoList;