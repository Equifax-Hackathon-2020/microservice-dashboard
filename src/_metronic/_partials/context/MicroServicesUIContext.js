import React, {createContext, useContext, useState, useCallback} from "react";
import {isEqual, isFunction} from "lodash";
const MicroServicesUIContext = createContext();

export function useMicroServicesUIContext() {
  return useContext(MicroServicesUIContext);
}

export const MicroServicesUIConsumer = MicroServicesUIContext.Consumer;

export function MicroServicesUIProvider({children}) {
  const initialFilter = {
      filter: {},
      sortOrder: "asc", // asc||desc
      sortField: "docId",
      pageNumber: 1,
      pageSize: 5
    };

  const [queryParams, setQueryParamsBase] = useState(initialFilter);
  const [ids, setIds] = useState([]);
  const setQueryParams = useCallback(nextQueryParams => {
    setQueryParamsBase(prevQueryParams => {
      if (isFunction(nextQueryParams)) {
        nextQueryParams = nextQueryParams(prevQueryParams);
      }

      if (isEqual(prevQueryParams, nextQueryParams)) {
        return prevQueryParams;
      }

      return nextQueryParams;
    });
  }, []);

  const initCatalogue = {
      docId: "",
      name: "",
      environment: "",
      created: "",
      lastCheckinBy: "",
      buildVersionNumber: ""
    };

  const value = {
    queryParams,
    setQueryParamsBase,
    ids,
    setIds,
    setQueryParams,
    initCatalogue
  };

  return <MicroServicesUIContext.Provider value={value}>{children}</MicroServicesUIContext.Provider>;
}
