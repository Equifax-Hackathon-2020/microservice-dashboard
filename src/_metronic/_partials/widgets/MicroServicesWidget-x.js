/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import {NavLink}  from "react-router-dom";
import moment from 'moment';
import { Guid } from 'guid-typescript';

export function MicroServicesWidget({ className, catalogues }) {

  if (catalogues == null || Object.values(catalogues).length === 0) {
    return (
      <div className="card-header border-0">
        <h3 className="card-title font-weight-bolder text-dark">...</h3>
      </div>
    )
  }

  return (
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
      <div className="card-body pt-3 pb-0">
        <div className="table-responsive">
          <table className="table table-borderless table-vertical-center">
            <thead>
              <tr>
                <th className="p-0" style={{ width: "100px" }}>Name</th>
                <th className="p-0" style={{ minWidth: "100px" }}>Environment</th>
                <th className="p-0" style={{ minWidth: "100px" }}>Created</th>
                <th className="p-0" style={{ minWidth: "100px" }}>Last Checked In By</th>
                <th className="p-0" style={{ minWidth: "100px" }}>Build Version Number</th>
              </tr>
            </thead>
            <tbody>
              { catalogues !== null && Object.values(catalogues).map(catalogue => {
                return(
                  <tr key= {Guid.create()}>
                    <td className="pl-0 py-4">
                      <NavLink className="menu-link" to={{
                                                        pathname: '/microservice',
                                                        docId: catalogue.docId
                                                      }}>
                        <div className="symbol symbol-50 symbol-light mr-1">
                          {catalogue.metadata.microserviceName}
                        </div>
                    </NavLink>


                    </td>
                    <td className="pl-0">
                      <div className="symbol symbol-50 symbol-light mr-1">
                        {catalogue.metadata.environment}
                      </div>

                    </td>
                    <td className="pl-0">
                      <div className="symbol symbol-50 symbol-light mr-1">
                        {moment(catalogue.metadata.created).format("lll")}
                      </div>
                    </td>
                    <td className="pl-0">
                      <div className="symbol symbol-50 symbol-light mr-1">
                        {catalogue.metadata.lastCheckinBy}
                      </div>
                    </td>
                    <td className="pl-0">
                      <div className="symbol symbol-50 symbol-light mr-1">
                        {catalogue.metadata.buildVersionNumber}
                      </div>
                    </td>

                  </tr>
                )
              })
            }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
