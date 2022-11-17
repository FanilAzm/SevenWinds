import React from "react";
import styles from './Main.module.scss';
import Table from "../../components/Table";

export default function Main() {
    return (
       <div className={styles.main}>
         <div className={styles.mainTop}>
           <div className={styles.mainName}>Строительно-монтажные работы</div>
         </div>
         <Table />
       </div>
    )
}
