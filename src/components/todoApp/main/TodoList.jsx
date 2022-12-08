import React from 'react';
import styles from './TodoList.module.css';
import { BsTrash2 } from 'react-icons/bs';

const TodoList = ({ todoHandler, todos }) => {
    const checkState = (e) => {
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
        <main className={styles.main}>
            <ul className={styles.todos}>
                {todos.map(todo => (
                    <li id={todo.id} data-state={todo.state} key={todo.id} className={styles.todo}>
                        <div className={styles.checkboxContainer}>
                            <input onChange={checkState} className={styles.checkbox} type="checkbox" id="horns" name="horns" />
                            <label className={styles.label} htmlFor="horns">{todo.todo}</label>
                        </div>
                        <div onClick={onDelete} className={styles.trash}>
                            <BsTrash2 className={styles.trashIcon} />
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default TodoList;