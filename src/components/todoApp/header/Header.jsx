import React from 'react';
import styles from './Header.module.css';
import { BsSunFill } from 'react-icons/bs'
import { useState } from 'react';



const Header = ({ todoHandler }) => {
    const [clicked, setClicked] = useState();
    const onClick = (e) => {
        const nav = e.target;
        setClicked();
        if (nav.nodeName !== "LI") {
            return;
        }
        setClicked(nav);
        console.dir(clicked);
    }
    return (
        <header className={styles.header}>
            <BsSunFill className={styles.theme} />
            <ul className={styles.navbar} onClick={onClick}>
                <li className={`${styles.navItem} ${clicked?.textContent === "All" ? styles.selected : ""}`}>All</li>
                <li className={`${styles.navItem} ${clicked?.textContent === "Active" ? styles.selected : ""}`}>Active</li>
                <li className={`${styles.navItem} ${clicked?.textContent === "Completed" ? styles.selected : ""}`}>Completed</li>
            </ul>
        </header>
    )
}
export default Header;