import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../_redux/microServicesActions";

import {
    MicroServiceWidget
} from "../../../../_metronic/_partials/widgets";


export function MicroServicePage(props) {

  console.log('microservice docId = ' + props.location.docId);



  // Getting curret state of catalogues list from store (Redux)
  const { currentState } = useSelector(
    (state) => ({ currentState: state.microservices }),
    shallowEqual
  );

  const { catalogue } = currentState;

  // Customers Redux state
  const dispatch = useDispatch();
  useEffect(() => {

  dispatch(actions.fetchCatalogue(props.location.docId));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (<MicroServiceWidget className="card-stretch gutter-b" catalogue = {catalogue}/>);
}
