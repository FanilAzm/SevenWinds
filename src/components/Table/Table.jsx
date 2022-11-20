import React from "react";
import {useSelector} from "react-redux";
import styles from './Table.module.scss';
import TableRowContainer from './TableRowContainer';

export default function Table() {
  const documents = useSelector(state => state.documents.documents);

  const theadData = ["Уровень", "Наименование работ", "Основная з/п", "Оборудование", "Накладные расходы", "Сметная прибыль"];

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
        {documents.map((item, index) => {
          return(
            <TableRowContainer key={index} item={item} />
          )
        })}
      </tbody>
    </table>
  );
};
