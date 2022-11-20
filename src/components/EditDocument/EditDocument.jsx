import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import styles from './EditDocument.module.scss';
import {updateDocumentName} from "../../store/documentsSlice";

const EditDocument = ({fieldValue, id}) =>  {
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(fieldValue);

  useEffect(() => {
    setStatus(fieldValue)
  }, [fieldValue]);

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    dispatch(updateDocumentName({status, id}));
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  }

  return(
    <div className={styles.status}>
      {
        editMode
          ? <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />
          : <span onDoubleClick={activateEditMode}>{fieldValue || ""}</span>
      }
    </div>
  )
}

export default EditDocument;
