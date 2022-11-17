import React from "react";
import styles from './Main.module.scss';

export default function Main() {
    return (
       <div className={styles.main}>
         <div className={styles.mainTop}>
           <div className={styles.mainName}>Строительно-монтажные работы</div>
         </div>
         {/*<div className={styles.mainContent}></div>*/}
       </div>
    )
}
