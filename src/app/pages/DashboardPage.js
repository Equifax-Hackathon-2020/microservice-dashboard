import React, { useEffect } from "react";

import {
  Dashboard
} from "../../_metronic/_partials";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../modules/MicroServices/_redux/microServicesActions";

export function DashboardPage() {

  // Getting curret state of catalogues list from store (Redux)
  const { currentState } = useSelector(
    (state) => ({ currentState: state.microservices }),
    shallowEqual
  );

  const { catalogues } = currentState;

  // Customers Redux state
  const dispatch = useDispatch();
  useEffect(() => {

    dispatch(actions.fetchCatalogues());

    return function cleanUp() {
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return <Dashboard catalogues = {catalogues}/>;
}
