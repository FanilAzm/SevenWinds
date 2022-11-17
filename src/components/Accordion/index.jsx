import React, {useState} from "react";
import styles from "./Accordion.module.scss";
import arrowIcon from "../../assets/images/icons/arrow.svg";
import sidebarIcon from "../../assets/images/icons/icon.svg";

export default function Accordion({ name, abb, options }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((isActive) => !isActive);
  };

  return (
    <article className={styles.accordion}>
      <div className={styles.item} onClick={handleClick}>
        <div>
          <div className={styles.itemName}>{name}</div>
          <div className={styles.itemAbb}>{abb}</div>
        </div>
        <img className={isActive ? styles.icon : styles.iconActive} src={arrowIcon} alt="Menu" />
      </div>
      <div className={styles.itemContent} aria-expanded={!isActive}>
        {options?.map((project, index) => (
          <div key={index} className={styles.contentText}>
            <img className={styles.icon} src={sidebarIcon} alt="Menu" />
            {project.optionName}
          </div>
        ))}
      </div>
    </article>
  );
};
