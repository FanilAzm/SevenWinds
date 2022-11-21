import {createSlice} from "@reduxjs/toolkit";

const documentsSlice = createSlice({
  name: 'documents',
  initialState: {
    documents: [
      {
        parentId: null,
        child: [],
        equipmentCosts: 0,
        estimatedProfit: 0,
        id: 0,
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
    ]
  },
  reducers: {
    addDocument(state, action) {
      state.documents.push({
        parentId: action.payload,
        child: [],
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
      });
    },
    addChildDocument(state, action) {
      state.documents = state.documents.map(doc => {
        if(doc.id === action.payload) {
          doc.child.push({
            parentId: doc.parentId,
            child: [],
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
          })
        }
        return doc;
      })
    },
    deleteDocument(state, action) {
      state.documents = state.documents.filter(doc => doc.id !== action.payload.id);
    },
    deleteChildDocument(state, action) {
      state.documents = state.documents.map(doc => {
        doc.child = doc.child.filter(item => item.id !== action.payload.id);
        return doc;
      })
    },
    updateDocumentName(state, action) {
      state.documents = state.documents.map((doc) => {
        if(doc.id === action.payload.id) {
          doc[action.payload.fieldName] = action.payload.inputValue;
        }
        if(doc.child) {
          doc.child = doc.child.map(item => {
            if(item.id === action.payload.id) {
              item[action.payload.fieldName] = action.payload.inputValue;
            }
            return item;
          })
        }
        return doc;
      })
    }
  }
});

export const {
  addDocument,
  deleteDocument,
  updateDocumentName,
  addChildDocument,
  deleteChildDocument
} = documentsSlice.actions;

export default documentsSlice.reducer;
