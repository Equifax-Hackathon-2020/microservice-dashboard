/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,no-undef */
import React from "react";
import { useHistory } from "react-router-dom";
import {toAbsoluteUrl} from "../../../../_helpers";

export function QuickUser() {
  const history = useHistory();

  const logoutClick = () => {
      const toggle = document.getElementById("kt_quick_user_toggle");
      if (toggle) {
        toggle.click();
      }
      history.push("/logout");
  };

  return (
      <div id="kt_quick_user" className="offcanvas offcanvas-right offcanvas p-10">
        <div className="offcanvas-header d-flex align-items-center justify-content-between pb-5">
          <h3 className="font-weight-bold m-0">
            User Profile
            <small className="text-muted font-size-sm ml-2">(0) messages</small>
          </h3>
          <a
              href="#"
              className="btn btn-xs btn-icon btn-light btn-hover-primary"
              id="kt_quick_user_close"
          >
            <i className="ki ki-close icon-xs text-muted"/>
          </a>
        </div>

        <div
            className="offcanvas-content pr-5 mr-n5"
        >
          <div className="d-flex align-items-center mt-5">
            <div
                className="symbol symbol-100 mr-5"
            >
              <div className="symbol-label" style={{
                backgroundImage: `url(${toAbsoluteUrl(
                    "/media/users/300_21.jpg"
                )})`
              }}/>
              <i className="symbol-badge bg-success"/>
            </div>
            <div className="d-flex flex-column">
              <a
                  href="#"
                  className="font-weight-bold font-size-h5 text-dark-75 text-hover-primary"
              >
                H A C K A T H O N
              </a>

              {/* <Link to="/logout" className="btn btn-light-primary btn-bold">
                Sign Out
              </Link> */}
              <button className="btn btn-light-primary btn-bold" onClick={logoutClick}>Sign out</button>
            </div>
          </div>

          <div className="separator separator-dashed mt-8 mb-5"/>
        </div>
      </div>
  );
}
