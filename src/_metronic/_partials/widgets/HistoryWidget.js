/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import moment from 'moment';

export function HistoryWidget({ className }) {


  return (
    <>
      <div className={`card card-custom ${className}`}>
        {/* Head */}
        <div className="card-header border-0">
          <h3 className="card-title font-weight-bolder text-dark">History</h3>

        </div>
        {/* Body */}
        <div className="card-body pt-2">
        <div className="d-flex align-items-center mb-10">
          <span className="bullet bullet-bar bg-success align-self-stretch"></span>

          <label className="checkbox checkbox-lg checkbox-light-success checkbox-single flex-shrink-0 m-0 mx-4">
            <input type="checkbox" name="" disabled value="1" checked />
            <span></span>
          </label>

          <div className="d-flex flex-column flex-grow-1">
            <a
              href="#"
              className="text-dark-75 text-hover-primary font-weight-bold font-size-lg mb-1"
            >
              Checkout services in GitHub
            </a>
            <span className="text-muted font-weight-bold">{moment().add(-5, 'hours').format('MMMM Do YYYY hh:mm A')}</span>
          </div>

        </div>

          <div className="d-flex align-items-center mb-10">
            <span className="bullet bullet-bar bg-success align-self-stretch"></span>

            <label className="checkbox checkbox-lg checkbox-light-success checkbox-single flex-shrink-0 m-0 mx-4">
              <input type="checkbox" name="" disabled value="1" checked />
              <span></span>
            </label>

            <div className="d-flex flex-column flex-grow-1">
              <a
                href="#"
                className="text-dark-75 text-hover-primary font-weight-bold font-size-lg mb-1"
              >
                Changes committed in GitHub
              </a>
              <span className="text-muted font-weight-bold">{moment().add(-3, 'hours').format('MMMM Do YYYY hh:mm A')}</span>
            </div>

          </div>

          <div className="d-flex align-items-center mb-10">
            <span className="bullet bullet-bar bg-primary align-self-stretch"></span>

            <label className="checkbox checkbox-lg checkbox-light-primary checkbox-single flex-shrink-0 m-0 mx-4">
              <input type="checkbox" disabled value="1" checked />
              <span></span>
            </label>

            <div className="d-flex flex-column flex-grow-1">
              <a
                href="#"
                className="text-dark-75 text-hover-primary font-weight-bold font-size-lg mb-1"
              >
                Run Jenkins for building the services
              </a>
              <span className="text-muted font-weight-bold">{moment().add(-2.5, 'hours').format('MMMM Do YYYY hh:mm A')}</span>
            </div>

          </div>

          <div className="d-flex align-items-center mb-10">
            <span className="bullet bullet-bar bg-primary align-self-stretch"></span>

            <label className="checkbox checkbox-lg checkbox-light-primary checkbox-single flex-shrink-0 m-0 mx-4">
              <input type="checkbox" disabled value="1" checked />
              <span></span>
            </label>

            <div className="d-flex flex-column flex-grow-1">
              <a
                href="#"
                className="text-dark-75 text-hover-primary font-weight-bold font-size-lg mb-1"
              >
                Completion of building the artifacts of services in Jenkins
              </a>
              <span className="text-muted font-weight-bold">{moment().add(-2, 'hours').format('MMMM Do YYYY hh:mm A')}</span>
            </div>

          </div>

          <div className="d-flex align-items-center mb-10">
            <span className="bullet bullet-bar bg-warning align-self-stretch"></span>

            <label className="checkbox checkbox-lg checkbox-light-warning checkbox-single flex-shrink-0 m-0 mx-4">
              <input type="checkbox" value="1" disabled checked />
              <span></span>
            </label>

            <div className="d-flex flex-column flex-grow-1">
              <a
                href="#"
                className="text-dark-75 text-hover-primary font-size-sm font-weight-bold font-size-lg mb-1"
              >
                Auto-Deployment of services in GCP
              </a>
              <span className="text-muted font-weight-bold">{moment().add(-1.8, 'hours').format('MMMM Do YYYY hh:mm A')}</span>
            </div>

          </div>

          <div className="d-flex align-items-center mb-10">
            <span className="bullet bullet-bar bg-info align-self-stretch"></span>

            <label className="checkbox checkbox-lg checkbox-light-info checkbox-single flex-shrink-0 m-0 mx-4">
              <input type="checkbox" value="1" disabled checked />
              <span></span>
            </label>

            <div className="d-flex flex-column flex-grow-1">
              <a
                href="#"
                className="text-dark-75 text-hover-primary font-weight-bold font-size-lg mb-1"
              >
                Enabled the access logging management
              </a>
              <span className="text-muted font-weight-bold">{moment().add(-1, 'hours').format('MMMM Do YYYY hh:mm A')}</span>
            </div>

          </div>


        </div>
      </div>
    </>
  );
}
