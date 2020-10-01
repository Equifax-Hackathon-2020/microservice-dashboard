import React from "react";
import {PlatformDashboard} from "./PlatformDashboard";


export function Dashboard({catalogues}) {

    return <>
        {<PlatformDashboard catalogues = {catalogues} />}

    </>;
}
