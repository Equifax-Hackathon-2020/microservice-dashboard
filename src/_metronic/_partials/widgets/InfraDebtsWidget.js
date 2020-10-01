/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, {useMemo, useEffect} from "react";
import objectPath from "object-path";
import ApexCharts from "apexcharts";
import {useHtmlClassService} from "../../layout";
import {KTUtil} from "../../_assets/js/components/util";

export function InfraDebtsWidget({ className }) {
  const uiService = useHtmlClassService();

  const layoutProps = useMemo(() => {
    return {
      colorsGrayGray100: objectPath.get(uiService.config, "js.colors.gray.gray100"),
      colorsGrayGray700: objectPath.get(uiService.config, "js.colors.gray.gray700"),
      colorsThemeBaseSuccess: objectPath.get(
          uiService.config,
          "js.colors.theme.base.success"
      ),
      colorsThemeLightSuccess: objectPath.get(
          uiService.config,
          "js.colors.theme.light.success"
      ),
      fontFamily: objectPath.get(uiService.config, "js.fontFamily")
    };
  }, [uiService]);

  useEffect(() => {
    const element = document.getElementById("kt_mixed_widget_14_chart");
    if (!element) {
      return;
    }

    const height = parseInt(KTUtil.css(element, 'height'));
    const chart = new ApexCharts(element, getChartOptions(layoutProps, height));
    chart.render();

    const chartInterval = setInterval(() => {
      chart.updateOptions(getChartOptions(layoutProps, height))
    }, 8000);

    return function cleanUp() {
      chart.destroy();
      clearInterval(chartInterval);
    };
  }, [layoutProps]);

  return (
    <div className={`card card-custom ${className}`}>
      {/* Header */}
      <div className="card-header border-0 pt-5">
        <h3 className="card-title font-weight-bolder ">Infrastructure Technical Debts</h3>
      </div>
      {/* Body */}
      <div className="card-body d-flex flex-column">
        <div className="flex-grow-1">
          <div id="kt_mixed_widget_14_chart" style={{height: "200px"}}></div>
        </div>
        <div className="pt-5">
          <p className="text-center font-weight-normal font-size-lg pb-7">
            Notes: Existing infrastructure requires additional services i.e , Jenkins, SonarQube, AppDynamics
          </p>
        </div>
      </div>
    </div>
  );
}


function percentage() {
  return Math.floor(Math.random() * 95) + 1;
}

function getChartOptions(layoutProps, height) {
  const series = [];
  series.push(percentage());

  const options = {
    series: series,
    chart: {
      height: height,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "65%"
        },
        dataLabels: {
          showOn: "always",
          name: {
            show: false,
            fontWeight: "700",
          },
          value: {
            color: layoutProps.colorsGrayGray700,
            fontSize: "30px",
            fontWeight: "700",
            offsetY: 12,
            show: true
          },
        },
        track: {
          background: layoutProps.colorsThemeLightSuccess,
          strokeWidth: '100%'
        }
      }
    },
    colors: [layoutProps.colorsThemeBaseSuccess],
    stroke: {
      lineCap: "round",
    },
    labels: ["Progress"]
  };
  return options;
}
