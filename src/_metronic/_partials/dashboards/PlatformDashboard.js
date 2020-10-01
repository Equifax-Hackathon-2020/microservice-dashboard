import React from "react";
import {
    StatisticsWidget,
    InfraDebtsWidget,
    MicroServicesWidget,
    EnvironmentUsersWidget,
    HistoryWidget
} from "../widgets";

import { MicroServicesUIProvider } from "../context/MicroServicesUIContext";

export function PlatformDashboard({catalogues}) {
    return (<>
            <div className="row">
                <div className="col-lg-6 col-xxl-4">
                    <StatisticsWidget className="card-stretch gutter-b"/>
                </div>

                <div className="col-xxl-8 order-2 order-xxl-1">
                    <MicroServicesUIProvider>
                      <MicroServicesWidget className="card-stretch gutter-b" catalogues = {catalogues}/>
                    </MicroServicesUIProvider>
                </div>

                <div className="col-lg-6 col-xxl-4 order-1 order-xxl-2">
                    <EnvironmentUsersWidget className="card-stretch gutter-b"/>
                </div>
                <div className="col-lg-6 col-xxl-4 order-1 order-xxl-2">
                    <HistoryWidget className="card-stretch gutter-b"/>
                </div>

                <div className="col-lg-6">
                    <InfraDebtsWidget className="card-stretch gutter-b" />
                </div>

              </div>

    </>);
}
