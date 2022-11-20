import React from "react";
import {useDispatch} from "react-redux";
import styles from "./Table.module.scss";
import firstLevel from "../../assets/images/icons/levelOne.svg";
import {addDocument, deleteDocument, addChildDocument, deleteChildDocument} from "../../store/documentsSlice";
import secondLevel from "../../assets/images/icons/levelTwo.svg";
import documentIcon from "../../assets/images/icons/document.svg";
import trashIcon from "../../assets/images/icons/trash.svg";
import EditDocument from "../EditDocument/EditDocument";

export const TableRow = React.memo(function TableRow({item, isChild}) {
  const dispatch = useDispatch();

  const onDeleteDocument = (id) => isChild ? dispatch(deleteChildDocument(id)) : dispatch(deleteDocument(id));

  return (
    <tr key={item.id}>
      <td className={styles.tableItem}>
        <span className={ !isChild ? styles.levelIcons : styles.secondLevel}>
          { !isChild ? <img src={firstLevel} onClick={() => dispatch(addDocument(item.id))} /> : null }
          <img className={ !isChild ? styles.hideIcon : ''} src={secondLevel} onClick={() => dispatch(addChildDocument(item.id))} />
          <img className={styles.hideIcon} src={documentIcon} />
          <img className={styles.hideIcon} src={trashIcon} onClick={() => onDeleteDocument(item.id)} />
        </span>
      </td>
      <td className={styles.tableItem}>{item.rowName}</td>
      <td className={styles.tableItem}>{item.salary}</td>
      <td className={styles.tableItem}>{item.equipmentCosts}</td>
      <td className={styles.tableItem}>{item.overheads}</td>
      <td className={styles.tableItem}>{item.total}</td>
    </tr>
  )
})
