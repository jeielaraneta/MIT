// Create the chart
Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Enrollment Population'
    },
    xAxis: {
        type: 'category'
    },

    legend: {
        enabled: false
    },

    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true
            }
        }
    },

    series: [{
        name: 'Population of Enrollees',
        colorByPoint: true,
        data: [{
            name: '2017-2018',
            y: 450,
            drilldown: '201718'
        }, {
            name: '2018-2019',
            y: 20,
            drilldown: '201819'
        }, {
            name: '2019-2020',
            y: 0,
            drilldown: ' '
        }]
    }],
    drilldown: {
            series: [{
                id: '201718',
                name: 'Population',
                data: [{
                        name: 'Summer',
                        y: 200,
                        drilldown: 'summer2018'
                    }, {
                        name: '1st Semester',
                        y: 100,
                        drilldown: 'firstSem2018'
                    }, {
                        name: '2nd Semester',
                        y: 150,
                        drilldown: 'secondSem2018'
                    }
                ]

            }, {
                id: 'summer2018',
                data: [{
                    name: 'Engineering',
                    y: 30
                }, {
                    name: 'Computer Studies',
                    y: 44
                }, {
                    name: 'Business and Public Administration',
                    y: 35
                }, {
                    name: 'Education',
                    y: 25
                }, {
                    name: 'Arts and Sciences',
                    y: 65
                }]
            }, {
                id: 'firstSem2018',
                data: [{
                    name: 'Engineering',
                    y: 10
                }, {
                    name: 'Computer Studies',
                    y: 20
                }, {
                    name: 'Business and Public Administration',
                    y: 30
                }, {
                    name: 'Education',
                    y: 25
                }, {
                    name: 'Arts and Sciences',
                    y: 15
                }]
            }, {
                id: 'secondSem2018',
                data: [{
                    name: 'Engineering',
                    y: 10
                }, {
                    name: 'Computer Studies',
                    y: 30
                }, {
                    name: 'Business and Public Administration',
                    y: 50
                }, {
                    name: 'Education',
                    y: 10
                }, {
                    name: 'Arts and Sciences',
                    y: 50
                }]
            }, {
                id: '201819',
                name: 'Population',
                data: [{
                        name: 'Summer',
                        y: 5,
                        drilldown: 'summer2019'
                    }, {
                        name: '1st Semester',
                        y: 15,
                        drilldown: 'summer'
                    }, {
                        name: '2nd Semester',
                        y: 5,
                        drilldown: 'summer'
                    }
                ]

            }, {
                id: 'summer2019',
                data: [1,2,3]
            }]
        }
});





