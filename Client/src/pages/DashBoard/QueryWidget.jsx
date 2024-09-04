import React from 'react';
import { useSelector } from 'react-redux';
import ReactApexChart from 'react-apexcharts';

const QueryWidget = () => {

    const isDark = useSelector((state) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);
    const isRtl = useSelector((state) => state.themeConfig.rtlClass) === 'rtl';

    const simpleColumnStacked = {
        series: [
            {
                name: 'In Process Queries',
                data: [44, 55, 57, 56, 61, 58, 63],
            },
            {
                name: 'Closed Queries',
                data: [76, 85, 101, 98, 87, 105, 91],
            },
            {
                name: 'Move to Registration',
                data: [46, 75, 91, 98, 97, 85, 91],
            },
        ],
        options: {
            chart: {
                height: 300,
                type: 'bar',
                stacked: true,
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },
            colors: ['rgb(254,188,59)', 'rgb(38,160,252)', 'rgb(38,231,166)'],
            plotOptions: {
                bar: {
                    horizontal: false,
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
                    offsetX: isRtl ? -20 : 0,
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
            legend: {
                position: 'top',
            },
            tooltip: {
                theme: isDark ? 'dark' : 'light',
            },
            fill: {
                opacity: 0.8,
            },
        },
    };

    return (
        <>
            <div className="panel mt-5">
                <div className="mb-5 flex items-center justify-between">
                    <h5 className="text-lg font-semibold dark:text-white">Query Status</h5>
                </div>
                <div className="mb-5">
                    <ReactApexChart
                        series={simpleColumnStacked.series}
                        options={simpleColumnStacked.options}
                        className="rounded-lg bg-white dark:bg-black overflow-hidden"
                        type="bar"
                        height={300}
                        width={'100%'}
                    />
                </div>
            </div>
        </>
    )
}

export default QueryWidget;
