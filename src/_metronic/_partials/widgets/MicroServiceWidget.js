/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, {useState} from "react";
import moment from 'moment';
import { Tabs, Tab } from 'react-bootstrap';
import { toAbsoluteUrl } from "../../_helpers";
import { Guid } from 'guid-typescript';

export function MicroServiceWidget({ className, catalogue }) {
  const [key, setKey] = useState('logs');
  if (catalogue === null ) {
    return (
      <div className="card-header border-0">
        <h3 className="card-title font-weight-bolder text-dark">...</h3>
      </div>
    )
  }

  const metadata = catalogue.metadata;

  return (
    <>
      <div className={`card card-custom ${className}`}>
        {/* Head */}
        <div className="card-header border-0">
          <h3 className="card-title font-weight-bolder text-dark">[{catalogue.metadata.microserviceId}] - {catalogue.metadata.microserviceName}</h3>
        </div>
        {/* Body */}
        <div className="card-body pt-2">
          <div className="d-flex align-items-center mb-10">
            <div className="d-flex flex-column flex-grow-1 font-weight-bold">
              <span
                className="text-dark text-hover-primary mb-1 font-size-lg"
              >
                {metadata.environment}
              </span>
              <span className="text-muted">Environment</span>
            </div>

          </div>

          <div className="d-flex align-items-center mb-10">
            <div className="d-flex flex-column flex-grow-1 font-weight-bold">
              <span
                className="text-dark text-hover-primary mb-1 font-size-lg"
              >
                {moment.unix(metadata.createdDateTime).format("lll")}
              </span>
              <span className="text-muted">Created</span>
            </div>

          </div>

          <div className="d-flex align-items-center mb-10">
            <div className="d-flex flex-column flex-grow-1 font-weight-bold">
              <span
                className="text-dark text-hover-primary mb-1 font-size-lg"
              >
                {moment.unix(metadata.lastBuildDateTime).format("lll")}
              </span>
              <span className="text-muted">Build</span>
            </div>

          </div>

          <div className="d-flex align-items-center mb-10">
            <div className="d-flex flex-column flex-grow-1 font-weight-bold">
              <span
                className="text-dark text-hover-primary mb-1 font-size-lg"
              >
                {metadata.lastCheckedInBy}
              </span>
              <span className="text-muted">Last CheckedIn By </span>
            </div>

          </div>

          <div className="d-flex align-items-center mb-10">
            <div className="d-flex flex-column flex-grow-1 font-weight-bold">
              <span
                className="text-dark text-hover-primary mb-1 font-size-lg"
              >
                {metadata.buildVersionNumber}
              </span>
              <span className="text-muted">Build Version Number</span>
            </div>

          </div>


          <div>
            <Tabs
              id="microservice-tabs"
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >
              <Tab eventKey="logs" title={
                                    <span className="symbol-label">
                                      <img
                                        src={toAbsoluteUrl("/media/others/logs.png")}
                                        alt={Guid.create()}
                                      ></img>
                                      Logs
                                    </span>
                                }>
                                <div className="d-flex align-items-center mb-10">
                                  <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                      Logs
                                  </div>
                                </div>

                                <div className="card-body pt-2">
                                  {metadata.services.logs !== undefined &&
                                   metadata.services.logs.splunk !== undefined &&
                                   metadata.services.logs.splunk !== '' &&
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                       <a href="#"
                                         className="text-dark text-hover-primary mb-1 font-size-lg"
                                       >
                                         More Info ...
                                       </a>
                                       <span className="text-muted">Splunk</span>
                                     </div>
                                   </div>
                                  }
                                  {metadata.services.logs !== undefined &&
                                   metadata.services.logs.kibana !== undefined &&
                                   metadata.services.logs.kibana !== '' &&
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                       <a href="#"
                                         className="text-dark text-hover-primary mb-1 font-size-lg"
                                       >
                                         More Info ...
                                       </a>
                                       <span className="text-muted">Kibana</span>
                                     </div>
                                   </div>
                                  }
                                  {metadata.services.logs !== undefined &&
                                   metadata.services.logs.stackdriver !== undefined &&
                                   metadata.services.logs.stackdriver !== '' &&
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                       <a href="#"
                                         className="text-dark text-hover-primary mb-1 font-size-lg"
                                       >
                                         More Info ...
                                       </a>
                                       <span className="text-muted">StackDriver</span>
                                     </div>
                                   </div>
                                  }
                                </div>
              </Tab>
              <Tab eventKey="github" title={<span className="symbol-label">
                                      <img
                                        src={toAbsoluteUrl("/media/others/github.png")}
                                        alt={Guid.create()}
                                      ></img>
                                      GitHub
                                    </span>
                                }>
                                <div className="d-flex align-items-center mb-10">
                                  <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                      GitHub
                                  </div>
                                </div>
                                {metadata.services.github !== undefined &&
                                  <div className="card-body pt-2">
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                       {moment.unix(metadata.services.github.lastDateTimeCheckout).format("lll")}
                                       <span className="text-muted">Last DateTime Checkout</span>
                                     </div>
                                   </div>
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                        {moment.unix(metadata.services.github.lastDateTimeCommit).format("lll")}
                                        <span className="text-muted">Last DateTime Commit</span>
                                     </div>
                                   </div>
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                         {moment.unix(metadata.services.github.lastDateTimeCommit).format("lll")}
                                       <span className="text-muted">Last DateTime Commit</span>
                                     </div>
                                   </div>
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                         {metadata.services.github.lastCheckedInBy}
                                       <span className="text-muted">Last Checked In By</span>
                                     </div>
                                   </div>
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                         {metadata.services.github.reviewers}
                                       <span className="text-muted">Reviewers</span>
                                     </div>
                                   </div>
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                         {metadata.services.github.comments}
                                       <span className="text-muted">Comments</span>
                                     </div>
                                   </div>
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                       <a href="#"
                                         className="text-dark text-hover-primary mb-1 font-size-lg"
                                       >
                                         More Info ...
                                       </a>
                                       <span className="text-muted">...</span>
                                     </div>
                                   </div>
                                  </div>
                                  }
              </Tab>
              <Tab eventKey="appdynamics" title={<span className="symbol-label">
                                      <img
                                        src={toAbsoluteUrl("/media/others/appdynamics.png")}
                                        alt={Guid.create()}
                                      ></img>
                                      AppDynamics
                                    </span>
                                }>
                                <div className="d-flex align-items-center mb-10">
                                  <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                      AppDynamics
                                  </div>
                                </div>
                                {metadata.services.appdynamics !== undefined &&
                                  <div className="card-body pt-2">
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                       {moment.unix(metadata.services.appdynamics.lastDateTimeErrors).format("lll")}
                                       <span className="text-muted">Last DateTime Errors</span>
                                     </div>
                                   </div>
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                        {metadata.services.appdynamics.memoryUsage}
                                        <span className="text-muted">Memory Usage</span>
                                     </div>
                                   </div>
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                        {metadata.services.appdynamics.cpuUsage}
                                        <span className="text-muted">CPU Usage</span>
                                     </div>
                                   </div>
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                        {metadata.services.appdynamics.comments}
                                        <span className="text-muted">Comments</span>
                                     </div>
                                   </div>
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                       <a href="#"
                                         className="text-dark text-hover-primary mb-1 font-size-lg"
                                       >
                                         More Info ...
                                       </a>
                                       <span className="text-muted">...</span>
                                     </div>
                                   </div>
                                  </div>
                                  }
              </Tab>
              <Tab eventKey="sonarqube" title={<span className="symbol-label">
                                      <img
                                        src={toAbsoluteUrl("/media/others/sonarqube.jpg")}
                                        alt={Guid.create()}
                                      ></img>
                                      SonarQube
                                    </span>
                                }>
                                <div className="d-flex align-items-center mb-10">
                                  <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                      SonarQube
                                  </div>
                                </div>
                                {metadata.services.sonarqube !== undefined &&
                                  <div className="card-body pt-2">
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                       {moment.unix(metadata.services.sonarqube.lastDateTimeAnalysis).format("lll")}
                                       <span className="text-muted">Last DateTime Analysis</span>
                                     </div>
                                   </div>
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                        {metadata.services.sonarqube.codeSmells}
                                        <span className="text-muted">Code Smells</span>
                                     </div>
                                   </div>
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                        {metadata.services.sonarqube.bugs}
                                        <span className="text-muted">Bugs</span>
                                     </div>
                                   </div>
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                        {metadata.services.sonarqube.securityHotspot}
                                        <span className="text-muted">Security Hotspots</span>
                                     </div>
                                   </div>
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                        {metadata.services.sonarqube.testCoverage}
                                        <span className="text-muted">Test Coverage</span>
                                     </div>
                                   </div>
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                        {metadata.services.sonarqube.comments}
                                        <span className="text-muted">Comments</span>
                                     </div>
                                   </div>
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                       <a href="#"
                                         className="text-dark text-hover-primary mb-1 font-size-lg"
                                       >
                                         More Info ...
                                       </a>
                                       <span className="text-muted">...</span>
                                     </div>
                                   </div>
                                  </div>
                                  }
              </Tab>
              <Tab eventKey="jenkins" title={<span className="symbol-label">
                                      <img
                                        src={toAbsoluteUrl("/media/others/jenkins.png")}
                                        alt={Guid.create()}
                                      ></img>
                                      Jenkins
                                    </span>
                                }>
                                <div className="d-flex align-items-center mb-10">
                                  <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                      Jenkins
                                  </div>
                                </div>
                                {metadata.services.jenkins !== undefined &&
                                  <div className="card-body pt-2">
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                       {moment.unix(metadata.services.jenkins.lastDateTimeRun).format("lll")}
                                       <span className="text-muted">Last DateTime Run</span>
                                     </div>
                                   </div>
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                        {metadata.services.jenkins.latestBuildImage}
                                        <span className="text-muted">Latest Build Image</span>
                                     </div>
                                   </div>
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                       <a href="#"
                                         className="text-dark text-hover-primary mb-1 font-size-lg"
                                       >
                                         More Info ...
                                       </a>
                                       <span className="text-muted">...</span>
                                     </div>
                                   </div>
                                  </div>
                                  }
              </Tab>
              <Tab eventKey="openapi" title={<span className="symbol-label">
                                      <img
                                        src={toAbsoluteUrl("/media/others/openapi.png")}
                                        alt={Guid.create()}
                                      ></img>
                                      OpenAPI
                                    </span>
                                }>
                                <div className="d-flex align-items-center mb-10">
                                  <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                      OpenAPI
                                  </div>
                                </div>
                                {metadata.services.openapi !== undefined &&
                                  <div className="card-body pt-2">
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                       {moment.unix(metadata.services.openapi.lastDateTimeRevision).format("lll")}
                                       <span className="text-muted">Last DateTime Revision</span>
                                     </div>
                                   </div>
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                        {metadata.services.openapi.latestRevision}
                                        <span className="text-muted">Latest Revision</span>
                                     </div>
                                   </div>
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                        {metadata.services.openapi.comments}
                                        <span className="text-muted">Comments</span>
                                     </div>
                                   </div>
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                       <a href="#"
                                         className="text-dark text-hover-primary mb-1 font-size-lg"
                                       >
                                         More Info ...
                                       </a>
                                       <span className="text-muted">...</span>
                                     </div>
                                   </div>
                                  </div>
                                  }
              </Tab>
              <Tab eventKey="jira" title={<span className="symbol-label">
                                      <img
                                        src={toAbsoluteUrl("/media/others/jira.png")}
                                        alt={Guid.create()}
                                      ></img>
                                      Jira
                                    </span>
                                }>
                                <div className="d-flex align-items-center mb-10">
                                  <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                      Jira
                                  </div>
                                </div>
                                {metadata.services.jira !== undefined &&
                                  <div className="card-body pt-2">
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                       {moment.unix(metadata.services.jira.inDevelopmentDateTime).format("lll")}
                                       <span className="text-muted">DateTime In Development</span>
                                     </div>
                                   </div>
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                       {moment.unix(metadata.services.jira.readyForTestDateTime).format("lll")}
                                       <span className="text-muted">DateTime Ready For Test</span>
                                     </div>
                                   </div>
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                       {moment.unix(metadata.services.jira.inTestDateTime).format("lll")}
                                       <span className="text-muted">DateTime In Test</span>
                                     </div>
                                   </div>
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                       {moment.unix(metadata.services.jira.poReviewDateTime).format("lll")}
                                       <span className="text-muted">DateTime PO Review</span>
                                     </div>
                                   </div>
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                       {metadata.services.jira.comments}
                                       <span className="text-muted">Comments</span>
                                     </div>
                                   </div>
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                       <a href="#"
                                         className="text-dark text-hover-primary mb-1 font-size-lg"
                                       >
                                         More Info ...
                                       </a>
                                       <span className="text-muted">...</span>
                                     </div>
                                   </div>
                                  </div>
                                  }
              </Tab>
              <Tab eventKey="datadog" title={<span className="symbol-label">
                                      <img
                                        src={toAbsoluteUrl("/media/others/datadog.png")}
                                        alt={Guid.create()}
                                      ></img>
                                      DataDog
                                    </span>
                                }>
                                <div className="d-flex align-items-center mb-10">
                                  <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                      DataDog
                                  </div>
                                </div>
                                {metadata.services.datadog !== undefined &&
                                  <div className="card-body pt-2">
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                       {moment.unix(metadata.services.datadog.lastDateTimeServiceFailure).format("lll")}
                                       <span className="text-muted">Last DateTime Service Failure</span>
                                     </div>
                                   </div>
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                       {metadata.services.datadog.comments}
                                       <span className="text-muted">Comments</span>
                                     </div>
                                   </div>
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                       <a href="#"
                                         className="text-dark text-hover-primary mb-1 font-size-lg"
                                       >
                                         More Info ...
                                       </a>
                                       <span className="text-muted">...</span>
                                     </div>
                                   </div>
                                  </div>
                                  }
              </Tab>
              <Tab eventKey="fortify" title={<span className="symbol-label">
                                      <img
                                        src={toAbsoluteUrl("/media/others/fortify.png")}
                                        alt={Guid.create()}
                                      ></img>
                                      Fortify
                                    </span>
                                }>
                                <div className="d-flex align-items-center mb-10">
                                  <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                      Fortify
                                  </div>
                                </div>
                                {metadata.services.fortify !== undefined &&
                                  <div className="card-body pt-2">
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                       {moment.unix(metadata.services.fortify.lastDateTimeScan).format("lll")}
                                       <span className="text-muted">Last DateTime Scan</span>
                                     </div>
                                   </div>
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                       {metadata.services.fortify.critical}
                                       <span className="text-muted">Critical</span>
                                     </div>
                                   </div>
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                       {metadata.services.fortify.high}
                                       <span className="text-muted">High</span>
                                     </div>
                                   </div>
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                       {metadata.services.fortify.low}
                                       <span className="text-muted">Low</span>
                                     </div>
                                   </div>
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                       {metadata.services.fortify.comments}
                                       <span className="text-muted">Comments</span>
                                     </div>
                                   </div>
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                       <a href="#"
                                         className="text-dark text-hover-primary mb-1 font-size-lg"
                                       >
                                         More Info ...
                                       </a>
                                       <span className="text-muted">...</span>
                                     </div>
                                   </div>
                                  </div>
                                  }
              </Tab>
              <Tab eventKey="nexus" title={<span className="symbol-label">
                                      <img
                                        src={toAbsoluteUrl("/media/others/nexus.png")}
                                        alt={Guid.create()}
                                      ></img>
                                      Nexus
                                    </span>
                                }>
                                <div className="d-flex align-items-center mb-10">
                                  <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                      Nexus
                                  </div>
                                </div>
                                {metadata.services.nexus !== undefined &&
                                  <div className="card-body pt-2">
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                       {moment.unix(metadata.services.nexus.lastDateTimeBuild).format("lll")}
                                       <span className="text-muted">Last DateTime Build</span>
                                     </div>
                                   </div>
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                       {metadata.services.nexus.comments}
                                       <span className="text-muted">Comments</span>
                                     </div>
                                   </div>
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                       <a href="#"
                                         className="text-dark text-hover-primary mb-1 font-size-lg"
                                       >
                                         More Info ...
                                       </a>
                                       <span className="text-muted">...</span>
                                     </div>
                                   </div>
                                  </div>
                                  }
              </Tab>
              <Tab eventKey="confluence" title={<span className="symbol-label">
                                      <img
                                        src={toAbsoluteUrl("/media/others/confluence.png")}
                                        alt={Guid.create()}
                                      ></img>
                                      Confluence
                                    </span>
                                }>
                                <div className="d-flex align-items-center mb-10">
                                  <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                      Confluence
                                  </div>
                                </div>
                                {metadata.services.confluence !== undefined &&
                                  Object.values(metadata.services.confluence).length > 0 &&
                                  <div className="card-body pt-2">
                                  {
                                    Object.values(metadata.services.confluence).map(confluence => {
                                      return(
                                        <div key={Guid.create()} className="d-flex align-items-center mb-10">
                                          <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                          <a href="#"
                                            className="text-dark text-hover-primary mb-1 font-size-lg"
                                          >
                                            {confluence.title}
                                          </a>
                                            <span className="text-muted">Created By: {confluence.createdBy}</span>
                                          </div>
                                        </div>

                                      )
                                    })
                                  }
                                  </div>
                                  }
              </Tab>
              <Tab eventKey="gcp" title={<span className="symbol-label">
                                      <img
                                        src={toAbsoluteUrl("/media/others/gcp.png")}
                                        alt={Guid.create()}
                                      ></img>
                                      GCP
                                    </span>
                                }>
                                <div className="d-flex align-items-center mb-10">
                                  <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                      GCP
                                  </div>
                                </div>
                                {metadata.services.gcp !== undefined &&
                                  <div className="card-body pt-2">
                                  <div className="d-flex align-items-center mb-10">
                                    <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                      {metadata.services.gcp.namespace}
                                      <span className="text-muted">Namespace</span>
                                    </div>
                                  </div>
                                  <div className="d-flex align-items-center mb-10">
                                    <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                      <a href="#"
                                        className="text-dark text-hover-primary mb-1 font-size-lg"
                                      >
                                        More Info ...
                                      </a>
                                      <span className="text-muted">Service</span>
                                    </div>
                                  </div>
                                  <div className="d-flex align-items-center mb-10">
                                    <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                      <a href="#"
                                        className="text-dark text-hover-primary mb-1 font-size-lg"
                                      >
                                        More Info ...
                                      </a>
                                      <span className="text-muted">Deployment</span>
                                    </div>
                                  </div>
                                  <div className="d-flex align-items-center mb-10">
                                    <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                      <a href="#"
                                        className="text-dark text-hover-primary mb-1 font-size-lg"
                                      >
                                        More Info ...
                                      </a>
                                      <span className="text-muted">Metrics</span>
                                    </div>
                                  </div>
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                       {metadata.services.gcp.comments}
                                       <span className="text-muted">Comments</span>
                                     </div>
                                   </div>
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                       <a href="#"
                                         className="text-dark text-hover-primary mb-1 font-size-lg"
                                       >
                                         More Info ...
                                       </a>
                                       <span className="text-muted">...</span>
                                     </div>
                                   </div>
                                  </div>
                                  }
              </Tab>
              <Tab eventKey="servicenow" title={<span className="symbol-label">
                                      <img
                                        src={toAbsoluteUrl("/media/others/servicenow.png")}
                                        alt={Guid.create()}
                                      ></img>
                                      ServiceNow
                                    </span>
                                }>
                                <div className="d-flex align-items-center mb-10">
                                  <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                      ServiceNow
                                  </div>
                                </div>
                                {metadata.services.servicenow !== undefined &&
                                  <div className="card-body pt-2">
                                  <div className="d-flex align-items-center mb-10">
                                    <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                      {moment.unix(metadata.services.servicenow.lastDateTimeChangeRequest).format("lll")}
                                      <span className="text-muted">Last DateTime Change Request</span>
                                    </div>
                                  </div>
                                  <div className="d-flex align-items-center mb-10">
                                    <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                      {moment.unix(metadata.services.servicenow.lastDateTimeIncidentReports).format("lll")}
                                      <span className="text-muted">Last DateTime Incident Reports</span>
                                    </div>
                                  </div>
                                  <div className="d-flex align-items-center mb-10">
                                    <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                      {moment.unix(metadata.services.servicenow.lastDateTimeKnownErrors).format("lll")}
                                      <span className="text-muted">Last DateTime Known Errors</span>
                                    </div>
                                  </div>
                                  <div className="d-flex align-items-center mb-10">
                                    <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                      {metadata.services.servicenow.lastRequestedBy}
                                      <span className="text-muted">Last Requested By</span>
                                    </div>
                                  </div>
                                  <div className="d-flex align-items-center mb-10">
                                    <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                      {metadata.services.servicenow.comments}
                                      <span className="text-muted">Comments</span>
                                    </div>
                                  </div>
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                       <a href="#"
                                         className="text-dark text-hover-primary mb-1 font-size-lg"
                                       >
                                         More Info ...
                                       </a>
                                       <span className="text-muted">...</span>
                                     </div>
                                   </div>
                                  </div>
                                  }
              </Tab>
              <Tab eventKey="dependencies" title={<span className="symbol-label">
                                      <img
                                        src={toAbsoluteUrl("/media/others/dependencies.png")}
                                        alt={Guid.create()}
                                      ></img>
                                      Dependencies
                                    </span>
                                }>
                                <div className="d-flex align-items-center mb-10">
                                  <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                      Dependencies
                                  </div>
                                </div>
                                {metadata.services.dependencies !== undefined &&
                                  Object.values(metadata.services.dependencies).length > 0 &&
                                  <div className="card-body pt-2">
                                  {
                                    Object.values(metadata.services.dependencies).map(dependency => {
                                      return(
                                        <div  key={Guid.create()} className="d-flex align-items-center mb-10">
                                          <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                            {dependency.name}
                                          </div>
                                        </div>

                                      )
                                    })
                                  }
                                  </div>
                                  }
              </Tab>
              <Tab eventKey="vault" title={<span className="symbol-label">
                                      <img
                                        src={toAbsoluteUrl("/media/others/hashicorp.png")}
                                        alt={Guid.create()}
                                      ></img>
                                      CyberArk/HashiCorp
                                    </span>
                                }>
                                <div className="d-flex align-items-center mb-10">
                                  <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                      CyberArk/hashiCorp
                                  </div>
                                </div>
                                {metadata.services.vault !== undefined &&
                                  <div className="card-body pt-2">
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                       {moment.unix(metadata.services.vault.lastDateTimeSecurityUpdates).format("lll")}
                                       <span className="text-muted">Last DateTime Security Updates</span>
                                     </div>
                                   </div>
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                       {metadata.services.vault.lastUpdateBy}
                                       <span className="text-muted">Last Updated By</span>
                                     </div>
                                   </div>
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                       {metadata.services.vault.comments}
                                       <span className="text-muted">Comments</span>
                                     </div>
                                   </div>
                                   <div className="d-flex align-items-center mb-10">
                                     <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                       <a href="#"
                                         className="text-dark text-hover-primary mb-1 font-size-lg"
                                       >
                                         More Info ...
                                       </a>
                                       <span className="text-muted">...</span>
                                     </div>
                                   </div>
                                  </div>
                                  }
              </Tab>
              <Tab eventKey="contactdetails" title={<span className="symbol-label">
                                      <img
                                        src={toAbsoluteUrl("/media/others/contactdetails.png")}
                                        alt={Guid.create()}
                                      ></img>
                                      Contact Details
                                    </span>
                                }>
                                <div className="d-flex align-items-center mb-10">
                                  <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                      Contact Details
                                  </div>
                                </div>
                                {metadata.services.contactdetails !== undefined &&
                                  Object.values(metadata.services.contactdetails).length > 0 &&
                                  <div className="card-body pt-2">
                                  {
                                    Object.values(metadata.services.contactdetails).map(contactdetails => {
                                      return(
                                        <div  key={Guid.create()} className="d-flex align-items-center mb-10">
                                          <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                                          Name:{contactdetails.name} <br/>
                                          Role:{contactdetails.role} <br/>
                                          Contact #: {contactdetails.contactnos}
                                          <span className="text-muted">{contactdetails.position}</span>
                                          </div>
                                        </div>

                                      )
                                    })
                                  }
                                  </div>
                                  }
              </Tab>
            </Tabs>
          </div>

        </div>
      </div>
    </>
  );
}
