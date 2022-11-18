import React from "react";
import {useDispatch, useSelector} from "react-redux";
import styles from './Table.module.scss';
import firstLevel from '../../assets/images/icons/levelOne.svg';
import secondLevel from '../../assets/images/icons/levelTwo.svg';
import documentIcon from '../../assets/images/icons/document.svg';
import trashIcon from '../../assets/images/icons/trash.svg';
import {addDocument, deleteDocument} from "../../store/documentsSlice";
import EditDocument from "../EditDocument";

export default function Table() {
  const dispatch = useDispatch();

  const documents = useSelector(state => state.documents.documents);

  const theadData = ["Уровень", "Наименование работ", "Основная з/п", "Оборудование", "Накладные расходы", "Сметная прибыль"];

  const documentData = {
    child: [
      null
    ],
    equipmentCosts: 0,
    estimatedProfit: 0,
    id: new Date().toISOString(),
    machineOperatorSalary: 0,
    mainCosts: 0,
    materials: 0,
    mimExploitation: 0,
    overheads: 0,
    rowName: "",
    salary: 0,
    supportCosts: 0,
    total: 0
  }

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
        {documents.map((item) => {
          return(
            <tr key={item.id}>
              <td className={styles.tableItem}>
                <span className={styles.levelIcons}>
                  <img src={firstLevel} onClick={() => dispatch(addDocument(documentData))} />
                  <img className={styles.hideIcon} src={secondLevel} />
                  <img className={styles.hideIcon} src={documentIcon} />
                  <img className={styles.hideIcon} src={trashIcon} onClick={() => dispatch(deleteDocument(item.id))} />
                </span>
              </td>
              <td className={styles.tableItem}>
                <EditDocument fieldValue={item.rowName} id={item.id} />
              </td>
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
