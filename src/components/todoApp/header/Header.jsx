import React from 'react';
import styles from './Header.module.css';
import { BsSunFill } from 'react-icons/bs'



const Header = () => {
    return (
        <header className={styles.header}>
            <BsSunFill className={styles.theme} />
            <div className={styles.navbar}>
                <div className={`${styles.navItem} ${styles.selected}`}>All</div>
                <div className={styles.navItem}>Active</div>
                <div className={styles.navItem}>Completed</div>
            </div>
        </header>
    )
}
export default Header;