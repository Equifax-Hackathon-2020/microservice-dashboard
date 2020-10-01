import {createSlice} from "@reduxjs/toolkit";

const initialCataloguesState = {
  listLoading: false,
  actionsLoading: false,
  catalogues: null,
  catalogue: null
};
export const callTypes = {
  list: "list",
  action: "action"
};

export const microServicesSlice = createSlice({
  name: "microservices",
  initialState: initialCataloguesState,
  reducers: {
    catchError: (state, action) => {
      state.error = `${action.type}: ${action.payload.error}`;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = false;
      } else {
        state.actionsLoading = false;
      }
    },
    startCall: (state, action) => {
      state.error = null;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = true;
      } else {
        state.actionsLoading = true;
      }
    },
    cataloguesFetched: (state, action) => {
      const { catalogues } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.catalogues = catalogues;
    },
    catalogueFetched: (state, action) => {
      const { catalogue } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.catalogue = catalogue;
    },
  }
});
