/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import SVG from "react-inlinesvg";

import {toAbsoluteUrl} from "../../_helpers";

export function EnvironmentUsersWidget({ className }) {
  return (
    <>
      <div className={`card card-custom ${className}`}>
        {/* Head */}
        <div className="card-header border-0">
          <h3 className="card-title font-weight-bolder text-dark">Environment Users</h3>
        </div>
        {/* Body */}
        <div className="card-body pt-2">
          <div className="d-flex align-items-center mb-10">
            <div className="symbol symbol-40 symbol-light-success mr-5">
              <span className="symbol-label">
                <SVG
                  className="h-75 align-self-end"
                  src={toAbsoluteUrl("/media/svg/avatars/009-boy-4.svg")}
                ></SVG>
              </span>
            </div>
            <div className="d-flex flex-column flex-grow-1 font-weight-bold">
              <a
                href="#"
                className="text-dark text-hover-primary mb-1 font-size-lg"
              >
                Rudi Potgieter
              </a>
              <span className="text-muted">Development Manager</span>
            </div>

          </div>

          <div className="d-flex align-items-center mb-10">
            <div className="symbol symbol-40 symbol-light-success mr-5">
              <span className="symbol-label">
                <SVG
                  className="h-75 align-self-end"
                  src={toAbsoluteUrl("/media/svg/avatars/007-boy-2.svg")}
                ></SVG>
              </span>
            </div>
            <div className="d-flex flex-column flex-grow-1 font-weight-bold">
              <a
                href="#"
                className="text-dark text-hover-primary mb-1 font-size-lg"
              >
                Marc Taylor
              </a>
              <span className="text-muted">Architect</span>
            </div>

          </div>

          <div className="d-flex align-items-center mb-10">
            <div className="symbol symbol-40 symbol-light-success mr-5">
              <span className="symbol-label">
                <SVG
                  className="h-75 align-self-end"
                  src={toAbsoluteUrl("/media/svg/avatars/011-boy-5.svg")}
                ></SVG>
              </span>
            </div>
            <div className="d-flex flex-column flex-grow-1 font-weight-bold">
              <a
                href="#"
                className="text-dark text-hover-primary mb-1 font-size-lg"
              >
                Nepesh Pradhan
              </a>
              <span className="text-muted">Technical Lead</span>
            </div>

          </div>

          <div className="d-flex align-items-center mb-10">
            <div className="symbol symbol-40 symbol-light-success mr-5">
              <span className="symbol-label">
                <SVG
                  className="h-75 align-self-end"
                  src={toAbsoluteUrl("/media/svg/avatars/005-girl-2.svg")}
                ></SVG>
              </span>
            </div>
            <div className="d-flex flex-column flex-grow-1 font-weight-bold">
              <a
                href="#"
                className="text-dark text-hover-primary mb-1 font-size-lg"
              >
                Amulya Jagadeesh
              </a>
              <span className="text-muted">Sr. Java Developer</span>
            </div>

          </div>

          <div className="d-flex align-items-center mb-10">
            <div className="symbol symbol-40 symbol-light-success mr-5">
              <span className="symbol-label">
                <SVG
                  className="h-75 align-self-end"
                  src={toAbsoluteUrl("/media/svg/avatars/026-boy-10.svg")}
                ></SVG>
              </span>
            </div>
            <div className="d-flex flex-column flex-grow-1 font-weight-bold">
              <a
                href="#"
                className="text-dark text-hover-primary mb-1 font-size-lg"
              >
                Rommel Sumpo
              </a>
              <span className="text-muted">Sr. Java Developer</span>
            </div>

          </div>

          <div className="d-flex align-items-center mb-2">
            <div className="symbol symbol-40 symbol-light-success mr-5">
              <span className="symbol-label">
                <SVG
                  className="h-75 align-self-end"
                  src={toAbsoluteUrl("/media/svg/avatars/guest.svg")}
                ></SVG>
              </span>
            </div>
            <div className="d-flex flex-column flex-grow-1 font-weight-bold">
              <a
                href="#"
                className="text-dark text-hover-primary mb-1 font-size-lg"
              >
                Guest
              </a>
              <span className="text-muted">...</span>
            </div>

          </div>


        </div>
      </div>
    </>
  );
}
