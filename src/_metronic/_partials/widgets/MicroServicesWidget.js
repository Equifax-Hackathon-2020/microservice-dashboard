/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, {useMemo} from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";
import ActionsColumnFormatter from "./ActionsColumnFormatter";
import { Pagination } from "../controls";
import { useMicroServicesUIContext } from "../context/MicroServicesUIContext";
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

import {
  getHandlerTableChange,
  sortCaret,
  headerSortingClasses,
} from "../../_helpers";

import moment from 'moment';

export function MicroServicesWidget({ className, catalogues }) {


  const microServicesUIContext = useMicroServicesUIContext();

  const microServicesUIProps = useMemo(() => {
    return {
      ids: microServicesUIContext.ids,
      setIds: microServicesUIContext.setIds,
      queryParams: microServicesUIContext.queryParams,
      setQueryParams: microServicesUIContext.setQueryParams,
    };
  }, [microServicesUIContext]);


  if (catalogues == null || Object.values(catalogues).length === 0) {
    return (
      <div className="card-header border-0">
        <h3 className="card-title font-weight-bolder text-dark">...</h3>
      </div>
    )
  }

  const data = [];
  Object.values(catalogues).map(catalogue => {
    data.push(
      {
        docId: catalogue.docId,
        name: catalogue.metadata.microserviceName,
        created: moment.unix(catalogue.metadata.createdDateTime).format("lll"),
        build: moment.unix(catalogue.metadata.lastBuildDateTime).format("lll"),
        environment: catalogue.metadata.environment,
        lastCheckedInBy: catalogue.metadata.lastCheckedInBy,
        buildVersionNumber: catalogue.metadata.buildVersionNumber
      }
    );
    return data;
  });

  const sizePerPageList = [
    { text: "3", value: 3 },
    { text: "5", value: 5 },
    { text: "10", value: 10 }
  ];
  const defaultSorted = [{ dataField: "docId", order: "asc" }];
  const columns = [
    {
      dataField: "docId",
      text: "Document ID",
      sort: true,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "name",
      text: "Name",
      sort: true,
      filter: textFilter(),
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "environment",
      text: "Environment",
      sort: true,
      filter: textFilter(),
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "created",
      text: "Created",
      sort: true,
      filter: textFilter(),
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "build",
      text: "Build",
      sort: true,
      filter: textFilter(),
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "lastCheckedInBy",
      text: "Last CheckedIn By",
      sort: true,
      filter: textFilter(),
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "buildVersionNumber",
      text: "Build Version No.",
      sort: false,
      sortCaret: sortCaret,
      headerSortingClasses,
    },
    {
      dataField: "action",
      text: "Actions",
      formatter: ActionsColumnFormatter,
      classes: "text-center pr-0",
      headerClasses: "text-center pr-3",
      style: {
        minWidth: "100px",
      },
    },
  ];




    // Table pagination properties
  const paginationOptions = {
    custom: true,
    totalSize: data.length,
    sizePerPageList: sizePerPageList,
    sizePerPage: microServicesUIProps.queryParams.pageSize,
    page: microServicesUIProps.queryParams.pageNumber
  };

  return (
    <>
    <div className={`card card-custom ${className}`}>
      {/* Head */}
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label font-weight-bolder text-dark">
            MicroServices Access Management
          </span>
        </h3>

      </div>
      {/* Body */}
      <PaginationProvider pagination={paginationFactory(paginationOptions)}>
        {({ paginationProps, paginationTableProps }) => {
          return (
            <Pagination
              isLoading={false}
              paginationProps={paginationProps}
            >
              <BootstrapTable
                wrapperClasses="table-responsive"
                bordered={false}
                classes="table table-head-custom table-vertical-center overflow-hidden"
                bootstrap4
                keyField="docId"
                data={data}
                columns={columns}
                defaultSorted={defaultSorted}
                filter={ filterFactory() }
                onTableChange={getHandlerTableChange(
                  microServicesUIProps.setQueryParams
                )}

                {...paginationTableProps}
              >
              </BootstrapTable>
            </Pagination>
          );
        }}
      </PaginationProvider>
      </div>
    </>
  );
}
