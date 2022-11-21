import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import styles from './EditDocument.module.scss';
import {updateDocumentName} from "../../store/documentsSlice";

const EditDocument = ({fieldValue, editMode, item, fieldName}) =>  {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState(fieldValue);

  useEffect(() => {
    setInputValue(fieldValue)
  }, [fieldValue]);

  const saveChanges = () => {
    dispatch(updateDocumentName({inputValue, id: item.id, fieldName}));
  }

  const onInputValueChange = (e) => {
    setInputValue(e.currentTarget.value);
  }

  return(
    <div className={styles.status}>
      {
        editMode
          ? <input onChange={onInputValueChange} autoFocus={true} onBlur={saveChanges} value={inputValue} />
          : <span>{fieldValue ?? ""}</span>
      }
    </div>
  )
}

export default EditDocument;
