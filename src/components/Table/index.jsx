import React from "react";
import styles from './Table.module.scss';
import firstLevel from '../../assets/images/icons/levelOne.svg';
import secondLevel from '../../assets/images/icons/levelTwo.svg';
import documentIcon from '../../assets/images/icons/document.svg';
import trashIcon from '../../assets/images/icons/trash.svg';

export default function Table() {
  const theadData = ["Уровень", "Наименование работ", "Основная з/п", "Оборудование", "Накладные расходы", "Сметная прибыль"];

  const tbodyData = [
    {
      child: [
        null
      ],
      equipmentCosts: 1750,
      estimatedProfit: 0,
      id: 0,
      machineOperatorSalary: 0,
      mainCosts: 0,
      materials: 0,
      mimExploitation: 0,
      overheads: 108.07,
      rowName: "Южная строительная площадка",
      salary: 20348,
      supportCosts: 0,
      total: 1209122.5
    },
  ];

  return (
    <table className={styles.table} cellSpacing="0">
      <thead>
        <tr>
          {theadData.map((item, index) => {
            return(
              <td key={index} title={item} className={styles.tableHead}>
                {item}
              </td>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {tbodyData.map((item) => {
          return(
            <tr key={item.id}>
              <td className={styles.tableItem}>
                <span className={styles.levelIcons}>
                  <img src={firstLevel} />
                  <img className={styles.hideIcon} src={secondLevel} />
                  <img className={styles.hideIcon} src={documentIcon} />
                  <img className={styles.hideIcon} src={trashIcon} />
                </span>
              </td>
              <td className={styles.tableItem}>{item.rowName}</td>
              <td className={styles.tableItem}>{item.salary}</td>
              <td className={styles.tableItem}>{item.equipmentCosts}</td>
              <td className={styles.tableItem}>{item.overheads}</td>
              <td className={styles.tableItem}>{item.total}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
};
