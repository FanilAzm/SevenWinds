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
        rowName: "Название документа",
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
        rowName: "Название документа",
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
            rowName: "Название документа",
            salary: 0,
            supportCosts: 0,
            total: 0
          })
        }
        return doc;
      })
    },
    deleteDocument(state, action) {
      state.documents = state.documents.filter(doc => doc.id !== action.payload);
    },
    deleteChildDocument(state, action) {
      state.documents = state.documents.map(doc => doc.child.filter(item => item.id !== action.payload))
    },
    updateDocumentName(state, action) {
      state.documents = state.documents.map((doc) => {
        if(doc.id === action.payload.id) {
          doc.rowName = action.payload.status
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
