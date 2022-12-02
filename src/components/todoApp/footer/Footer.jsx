import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <form className={styles.form}>
                <input type="text" placeholder='Add Todo' className={styles.input} />
                <button type='submit' className={styles.button}>Add</button>
            </form>
        </footer>
    )
}
export default Footer;