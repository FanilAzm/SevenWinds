import React from "react";
import menuIcon from '../../assets/images/icons/menu.svg';
import backIcon from '../../assets/images/icons/back.svg';
import styles from './Header.module.scss';
import { NavLink } from "react-router-dom";


export default function Header() {
    return(
        <div className={styles.header}>
            <img className={styles.icon} src={menuIcon} alt="Menu" />
            <img className={styles.icon} src={backIcon} alt="Back" />
            <div className={styles.menuItem}>
                <NavLink activeclassname={styles.active} to="/">Просмотр</NavLink>
            </div>
            <div className={styles.menuItem}>
                <NavLink activeclassname={styles.active} to="/control">Управление</NavLink>
            </div>
        </div>
    )
}