import React from 'react';
import styles from './TodoList.module.css';
import { BsTrash2 } from 'react-icons/bs';

const TodoList = ({ todoHandler, todos, darkTheme }) => {
    const checkState = (e) => {
        e.preventDefault();
        const li = e.target.parentNode.parentElement;
        const isChecked = e.target.checked;
        todoHandler.updateTodo(isChecked, li.id);
    }
    const onDelete = (e) => {
        e.preventDefault();
        const li = e.target.parentNode.parentElement;
        const todoState = li.dataset.state;
        todoHandler.deleteTodo(todoState, li.id);
    }
    return (
        <main className={darkTheme ? `${styles.dark} ${styles.main}` : `${styles.main}`}>
            <ul className={darkTheme ? `${styles.dark} ${styles.todos}` : `${styles.todos}`}>
                {todos.map(todo => (
                    <li id={todo.id} data-state={todo.state} key={todo.id} className={styles.todo}>
                        <div className={styles.checkboxContainer}>
                            <input defaultChecked={todo['state'] === "active" ? false : true} onChange={checkState} className={styles.checkbox} type="checkbox" id="horns" name="horns" />
                            <label className={styles.label} htmlFor="horns">{todo.todo}</label>
                        </div>
                        <div onClick={onDelete} className={darkTheme ? `${styles.dark} ${styles.trash}` : `${styles.trash}`}>
                            <BsTrash2 className={styles.trashIcon} />
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default TodoList;