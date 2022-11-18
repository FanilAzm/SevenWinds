import {createSlice} from "@reduxjs/toolkit";

const documentsSlice = createSlice({
  name: 'documents',
  initialState: {
    documents: [
      {
        child: [
          null
        ],
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
      state.documents.push(action.payload);
    },
    deleteDocument(state, action) {
      state.documents = state.documents.filter(doc => doc.id !== action.payload);
    },
    updateDocumentName(state, action) {
      console.log(action)
      state.documents = state.documents.filter((doc) => {
        if(doc.id === action.payload.id) {
          doc.rowName = action.payload.status
        }
      })
    }
  }
});

export const {addDocument, deleteDocument, updateDocumentName} = documentsSlice.actions;

export default documentsSlice.reducer;
