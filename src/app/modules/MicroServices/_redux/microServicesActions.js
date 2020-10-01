import * as requestFromServer from "./microServicesCrud";
import {microServicesSlice, callTypes} from "./microServicesSlice";

const {actions} = microServicesSlice;

export const fetchCatalogues = () => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .catalogues()
    .then(response => {
      const catalogues = response.data;
      dispatch(actions.cataloguesFetched({ catalogues }));
    })
    .catch(error => {
      error.clientMessage = "Can't find catalogues";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};

export const fetchCatalogue = docId => dispatch => {
  dispatch(actions.startCall({ callType: callTypes.list }));
  return requestFromServer
    .catalogue(docId)
    .then(response => {
      const catalogue = response.data;
      dispatch(actions.catalogueFetched({ catalogue }));
    })
    .catch(error => {
      error.clientMessage = "Can't find catalogue";
      dispatch(actions.catchError({ error, callType: callTypes.list }));
    });
};
