import React from "react";
import Navbar from '../../components/Navbar';
import MainContent from '../../components/MainContent';
import styles from './Main.module.scss';

export default function Main() {
    return (
       <div className={styles.main}>
        <Navbar />
        <MainContent />
       </div>
    )
}