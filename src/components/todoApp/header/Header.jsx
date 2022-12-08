import React from 'react';
import styles from './Header.module.css';
import { BsSunFill } from 'react-icons/bs'
import { useState } from 'react';



const Header = ({ todoHandler, setTodos }) => {
    const [clicked, setClicked] = useState();
    const onClick = (e) => {
        const nav = e.target;
        setClicked(null);
        if (nav.nodeName !== "LI") {
            return;
        }
        setClicked(nav);
        setTodos([...todoHandler.filterTodo(nav.dataset.state)]);
    }
    return (
        <header className={styles.header}>
            <BsSunFill className={styles.theme} />
            <ul className={styles.navbar} onClick={onClick}>
                <li data-state="" className={`${styles.navItem} ${clicked?.textContent === "All" ? styles.selected : ""}`}>All</li>
                <li data-state="active" className={`${styles.navItem} ${clicked?.textContent === "Active" ? styles.selected : ""}`}>Active</li>
                <li data-state="completed" className={`${styles.navItem} ${clicked?.textContent === "Completed" ? styles.selected : ""}`}>Completed</li>
            </ul>
        </header>
    )
}
export default Header;