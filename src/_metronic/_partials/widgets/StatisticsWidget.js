/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, {useMemo, useEffect} from "react";
import SVG from "react-inlinesvg";
import objectPath from "object-path";
import ApexCharts from "apexcharts";
import {toAbsoluteUrl} from "../../_helpers";
import {useHtmlClassService} from "../../layout";

export function StatisticsWidget({ className }) {
  const uiService = useHtmlClassService();

  const layoutProps = useMemo(() => {
    return {
      colorsGrayGray500: objectPath.get(
        uiService.config,
        "js.colors.gray.gray500"
      ),
      colorsGrayGray200: objectPath.get(
        uiService.config,
        "js.colors.gray.gray200"
      ),
      colorsGrayGray300: objectPath.get(
        uiService.config,
        "js.colors.gray.gray300"
      ),
      colorsThemeBaseDanger: objectPath.get(
        uiService.config,
        "js.colors.theme.base.danger"
      ),
      fontFamily: objectPath.get(uiService.config, "js.fontFamily")
    };
  }, [uiService]);

  useEffect(() => {
    const element = document.getElementById("kt_mixed_widget_1_chart");
    if (!element) {
      return;
    }


    const chart = new ApexCharts(element, getChartOptions(layoutProps));
    chart.render();

    const chartInterval = setInterval(() => {
      chart.updateOptions(getChartOptions(layoutProps))
    }, 5000);

    return function cleanUp() {
      chart.destroy();
      clearInterval(chartInterval);
    };

  }, [layoutProps]);

  return (
    <div className={`card card-custom bg-gray-100 ${className}`}>
      {/* Header */}
      <div className="card-header border-0 bg-danger py-5">
        <h3 className="card-title font-weight-bolder text-white">Infrastructure Services</h3>

      </div>
      {/* Body */}
      <div className="card-body p-0 position-relative overflow-hidden">
        {/* Chart */}
        <div
          id="kt_mixed_widget_1_chart"
          className="card-rounded-bottom bg-danger"
          style={{ height: "200px" }}
        ></div>

        {/* Stat */}
        <div className="card-spacer mt-n25">

          <div className="row m-0 justify-content-between">

            <div className="col bg-light-warning px-6 py-8 rounded-xl justify-content-between align-items-center">
              <span className="svg-icon svg-icon-3x svg-icon-danger d-block my-2">
                <SVG
                  src={toAbsoluteUrl(
                    "/media/svg/icons/Communication/Urgent-mail.svg"
                  )}
                ></SVG>
              </span>
              <a
                href="#" onClick={() => window.open('https://servicenow.equifax.com/nav_to.do?uri=%2Fproblem_list.do%3Fsysparm_userpref_module%3Db56129b5c0a80009015268d754f79ff0%26sysparm_query%3Dknown_error%253Dtrue%255EORstate%253D2%255EEQ%26sysparm_clear_stack%3Dtrue', 'Known Errors)')}
                className="text-danger font-weight-bold font-size-h6 mt-2"
              >
                Last Known Errors
               </a>

              <span className="svg-icon svg-icon-3x svg-icon-info d-block my-2">
                <SVG
                  src={toAbsoluteUrl(
                    "/media/svg/icons/Communication/Snoozed-mail.svg"
                  )}
                ></SVG>
              </span>
              <a
                href="#" onClick={() => window.open('https://servicenow.equifax.com/nav_to.do?uri=%2Fincident_list.do%3Fsysparm_userpref_module%3D4fed4395c0a8016400fcf06c27b1e6c6%26sysparm_query%3Dactive%253Dtrue%255EEQ%26active%3Dtrue%26sysparm_clear_stack%3Dtrue', 'Incidents')}
                className="text-info font-weight-bold font-size-h6 mt-2"
              >
                Incidents
              </a>
            </div>

          </div>
        </div>

        {/* Resize */}
        <div className="resize-triggers">
          <div className="expand-trigger">
            <div style={{ width: "411px", height: "461px" }} />
          </div>
          <div className="contract-trigger" />
        </div>
      </div>
    </div>
  );
}

function getRandomStroke() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function scores() {
  return Math.floor(Math.random() * 80) + 1;
}

function getChartOptions(layoutProps) {
  const strokeColor = getRandomStroke();

  const data = [];
  const categories = ["Nginx", "Flux", "Apache Flink", "Kafka", "Jenkins", "SonarQube", "AppDynamics", "DataDog", "Kibana", "GitHub", "BitBucket", "MongoDB"];
  var service = 0;
  while (service < categories.length ) {
    data.push(scores());
    service++;
  }
  const options = {
    series: [
      {
        name: "Statistics",
        data: data
      }
    ],
    chart: {
      type: "area",
      height: 200,
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      },
      sparkline: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 5,
        left: 0,
        blur: 3,
        color: strokeColor,
        opacity: 0.5
      }
    },
    plotOptions: {},
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      type: "solid",
      opacity: 0
    },
    stroke: {
      curve: "smooth",
      show: true,
      width: 3,
      colors: [strokeColor]
    },
    xaxis: {
      categories: categories,
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false,
        style: {
          colors: layoutProps.colorsGrayGray500,
          fontSize: "12px",
          fontFamily: layoutProps.fontFamily
        }
      },
      crosshairs: {
        show: false,
        position: "front",
        stroke: {
          color: layoutProps.colorsGrayGray300,
          width: 1,
          dashArray: 3
        }
      }
    },
    yaxis: {
      min: 0,
      max: 80,
      labels: {
        show: false,
        style: {
          colors: layoutProps.colorsGrayGray500,
          fontSize: "12px",
          fontFamily: layoutProps.fontFamily
        }
      }
    },
    states: {
      normal: {
        filter: {
          type: "none",
          value: 0
        }
      },
      hover: {
        filter: {
          type: "none",
          value: 0
        }
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: "none",
          value: 0
        }
      }
    },
    tooltip: {
      style: {
        fontSize: "12px",
        fontFamily: layoutProps.fontFamily
      },
      y: {
        formatter: function(val) {
          return  val + " %";
        }
      },
      marker: {
        show: true
      }
    },
    markers: {
      colors: layoutProps.colorsThemeBaseDanger,
      strokeColor: [strokeColor],
      strokeWidth: 3
    }
  };
  return options;
}
