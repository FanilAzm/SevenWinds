import React from "react";
import styles from './Navbar.module.scss';
import Accordion from "../Accordion";

export default function Navbar({projects}) {
    return (
        <div className={styles.navbar}>
          {projects.map((project, index) => (
            <Accordion
              key={index}
              name={project.name}
              abb={project.abb}
              options={project.options}
            />
          ))}
        </div>
    )
}
