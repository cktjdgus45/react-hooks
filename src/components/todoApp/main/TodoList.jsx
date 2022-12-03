import React from 'react';
import styles from './TodoList.module.css';
import { BsTrash2 } from 'react-icons/bs';

const TodoList = (props) => {
    return (
        <main className={styles.main}>
            <ul className={styles.todos}>
                <li className={styles.todo}>
                    <div className={styles.checkboxContainer}>
                        <input className={styles.checkbox} type="checkbox" id="horns" name="horns" />
                        <label className={styles.label} for="horns">공부하기</label>
                    </div>
                    <div className={styles.trash}>
                        <BsTrash2 className={styles.trashIcon} />
                    </div>
                </li>
            </ul>
        </main>
    )
}

export default TodoList;