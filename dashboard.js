

// Create the chart
Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Basic drilldown'
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
        name: 'Things',
        colorByPoint: true,
        data: [{
            name: 'Animals',
            y: 5,
            drilldown: 'animals'
        }, {
            name: 'Fruits',
            y: 2,
            drilldown: 'fruits'
        }, {
            name: 'Cars',
            y: 4,
            drilldown: 'cars'
        }]
    }],
    drilldown: {
            series: [{
                id: 'animals',
                name: 'Animals',
                data: [{
                    name: 'Cats',
                    y: 4,
                    drilldown: 'cats'
                }, ['Dogs', 2],
                    ['Cows', 1],
                    ['Sheep', 2],
                    ['Pigs', 1]
                ]
            }, {

                id: 'cats',
                data: [1, 2, 3]
            }]
        }
});

