import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';

const LeadWidget = () => {

    const isDark = useSelector((state) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);
    const isRtl = useSelector((state) => state.themeConfig.rtlClass) === 'rtl';

    const columnChart = {
        series: [
            {
                name: 'In Process Leads',
                data: [44, 55, 57, 56, 61, 58, 63],
            },
            {
                name: 'Closed Leads',
                data: [76, 85, 101, 98, 87, 105, 91],
            },
            {
                name: 'Move to Query',
                data: [46, 75, 91, 98, 97, 85, 91],
            },
        ],
        options: {
            chart: {
                height: 300,
                type: 'bar',
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },
            colors: ['rgb(254,188,59)', 'rgb(38,160,252)', 'rgb(38,231,166)'],
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent'],
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded',
                },
            },
            grid: {
                borderColor: isDark ? '#191e3a' : '#e0e6ed',
                xaxis: {
                    lines: {
                        show: false,
                    },
                },
            },
            xaxis: {
                categories: ['SFK', 'SFL', 'SFI', 'SFS', 'SFH', 'SFIR', 'SFC'],
                axisBorder: {
                    color: isDark ? '#191e3a' : '#e0e6ed',
                },
            },
            yaxis: {
                opposite: isRtl ? true : false,
                labels: {
                    offsetX: isRtl ? -10 : 0,
                },
            },
            tooltip: {
                theme: isDark ? 'dark' : 'light',
                y: {
                    formatter: function (val) {
                        return val;
                    },
                },
            },
            legend: {
                position: "top",
            },
        },
    };

    return (
        <>
            <div className="panel mt-5">
                <div className="mb-5 flex items-center justify-between">
                    <h5 className="text-lg font-semibold dark:text-white">Leads Status</h5>
                </div>
                <div className="mb-5">
                    <ReactApexChart
                        series={columnChart.series}
                        options={columnChart.options}
                        className="rounded-lg bg-white dark:bg-black overflow-hidden"
                        type="bar"
                        height={300} />
                </div>
            </div>
        </>
    )
}

export default LeadWidget
