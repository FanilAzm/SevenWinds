import React, {useState} from "react";
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

  const onDeleteDocument = (item) => isChild ? dispatch(deleteChildDocument(item)) : dispatch(deleteDocument(item));

  const [editMode, setEditMode] = useState(false);

  const editableMode = (edit) => {
    setEditMode(edit);
  }

  return (
    <tr key={item.id} onDoubleClick={editMode ? () => editableMode(false) : () => editableMode(true)}>
      <td className={styles.tableItem}>
        <span className={ !isChild ? styles.levelIcons : styles.secondLevel}>
          { !isChild ? <img src={firstLevel} onClick={() => dispatch(addDocument(item.id))} /> : null }
          <img className={ !isChild ? styles.hideIcon : ''} src={secondLevel} onClick={() => dispatch(addChildDocument(item.id))} />
          <img className={styles.hideIcon} src={documentIcon} />
          <img className={styles.hideIcon} src={trashIcon} onClick={() => onDeleteDocument(item)} />
        </span>
      </td>
      <td className={styles.tableItem}>
        <EditDocument
          item={item}
          editMode={editMode}
          fieldValue={item.rowName}
          fieldName='rowName'
        />
      </td>
      <td className={styles.tableItem}>
        <EditDocument
          item={item}
          editMode={editMode}
          fieldValue={item.salary}
          fieldName='salary'
        />
      </td>
      <td className={styles.tableItem}>
        <EditDocument
          item={item}
          editMode={editMode}
          fieldValue={item.equipmentCosts}
          fieldName='equipmentCosts'
        />
      </td>
      <td className={styles.tableItem}>
        <EditDocument
          item={item}
          editMode={editMode}
          fieldValue={item.overheads}
          fieldName='overheads'
        />
      </td>
      <td className={styles.tableItem}>
        <EditDocument
          item={item}
          editMode={editMode}
          fieldValue={item.total}
          fieldName='total'
        />
      </td>
    </tr>
  )
})
