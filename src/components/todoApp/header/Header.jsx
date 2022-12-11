import React from 'react';
import styles from './Header.module.css';
import { BsSunFill, BsFillMoonFill } from 'react-icons/bs'
import { useState } from 'react';



const Header = ({ todoHandler, setTodos, setDarkTheme, darkTheme }) => {
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
    const toggleTheme = (e) => {
        e.preventDefault();
        setDarkTheme(prev => !prev);
    }
    return (
        <header className={darkTheme ? `${styles.dark} ${styles.header}` : `${styles.header}`}>
            {darkTheme ? <BsFillMoonFill onClick={toggleTheme} className={styles.theme} /> : <BsSunFill onClick={toggleTheme} className={`${styles.dark} ${styles.theme}`} />}
            <ul className={darkTheme ? `${styles.dark} ${styles.navbar}` : `${styles.navbar}`} onClick={onClick}>
                <li data-state="" className={darkTheme ? `${styles.navItem} ${clicked?.textContent === "All" ? styles.selected : ""}` : `${styles.navItem} ${clicked?.textContent === "All" ? styles.selected : ""}`}>All</li>
                <li data-state="active" className={darkTheme ? `${styles.navItem} ${clicked?.textContent === "Active" ? styles.selected : ""}` : `${styles.navItem} ${clicked?.textContent === "Active" ? styles.selected : ""}`}>Active</li>
                <li data-state="completed" className={darkTheme ? `${styles.navItem} ${clicked?.textContent === "Completed" ? styles.selected : ""}` : `${styles.navItem} ${clicked?.textContent === "Completed" ? styles.selected : ""} ${styles.navItem}`}>Completed</li>
            </ul>
        </header>
    )
}
export default Header;