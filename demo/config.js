Qt.include("qrc:/color/color.js")

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min
}

function randomScalingFactor() {
    return Math.round(getRandomArbitrary(-100, 100))
}

var dataBar1 = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
            label: 'Dataset 1',
            backgroundColor: color("red").alpha(0.5).rgbString(),
            borderColor: "red",
            borderWidth: 1,
            data: [randomScalingFactor(), randomScalingFactor(
                    ), randomScalingFactor(), randomScalingFactor(
                    ), randomScalingFactor(), randomScalingFactor(
                    ), randomScalingFactor()]
        }, {
            label: 'Dataset 2',
            backgroundColor: color("blue").alpha(0.5).rgbString(),
            borderColor: "blue",
            borderWidth: 1,
            data: [randomScalingFactor(), randomScalingFactor(
                    ), randomScalingFactor(), randomScalingFactor(
                    ), randomScalingFactor(), randomScalingFactor(
                    ), randomScalingFactor()]
        }]
}

var dataBar2 = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
            label: 'Dataset 1',
            backgroundColor: ["red", "orange", "yellow", "green", "blue", "purple", "red"],
            yAxisID: "y-axis-1",
            data: [randomScalingFactor(), randomScalingFactor(
                    ), randomScalingFactor(), randomScalingFactor(
                    ), randomScalingFactor(), randomScalingFactor(
                    ), randomScalingFactor()]
        }, {
            label: 'Dataset 2',
            backgroundColor: "grey",
            yAxisID: "y-axis-2",
            data: [randomScalingFactor(), randomScalingFactor(
                    ), randomScalingFactor(), randomScalingFactor(
                    ), randomScalingFactor(), randomScalingFactor(
                    ), randomScalingFactor()]
        }]
}

var dataBar3 = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
            label: 'Dataset 1',
            backgroundColor: "red",
            data: [randomScalingFactor(), randomScalingFactor(
                    ), randomScalingFactor(), randomScalingFactor(
                    ), randomScalingFactor(), randomScalingFactor(
                    ), randomScalingFactor()]
        }, {
            label: 'Dataset 2',
            backgroundColor: "blue",
            data: [randomScalingFactor(), randomScalingFactor(
                    ), randomScalingFactor(), randomScalingFactor(
                    ), randomScalingFactor(), randomScalingFactor(
                    ), randomScalingFactor()]
        }, {
            label: 'Dataset 3',
            backgroundColor: "green",
            data: [randomScalingFactor(), randomScalingFactor(
                    ), randomScalingFactor(), randomScalingFactor(
                    ), randomScalingFactor(), randomScalingFactor(
                    ), randomScalingFactor()]
        }]
}

var dataBarChartDataStacked = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
            label: 'Dataset 1',
            backgroundColor: "red",
            stack: 'Stack 0',
            data: [randomScalingFactor(), randomScalingFactor(
                    ), randomScalingFactor(), randomScalingFactor(
                    ), randomScalingFactor(), randomScalingFactor(
                    ), randomScalingFactor()]
        }, {
            label: 'Dataset 2',
            backgroundColor: "blue",
            stack: 'Stack 0',
            data: [randomScalingFactor(), randomScalingFactor(
                    ), randomScalingFactor(), randomScalingFactor(
                    ), randomScalingFactor(), randomScalingFactor(
                    ), randomScalingFactor()]
        }, {
            label: 'Dataset 3',
            backgroundColor: "green",
            stack: 'Stack 1',
            data: [randomScalingFactor(), randomScalingFactor(
                    ), randomScalingFactor(), randomScalingFactor(
                    ), randomScalingFactor(), randomScalingFactor(
                    ), randomScalingFactor()]
        }]
}

var dataComboBarLine = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
            type: 'line',
            label: 'Dataset 1',
            borderColor: "blue",
            borderWidth: 2,
            fill: false,
            data: [randomScalingFactor(), randomScalingFactor(
                    ), randomScalingFactor(), randomScalingFactor(
                    ), randomScalingFactor(), randomScalingFactor(
                    ), randomScalingFactor()]
        }, {
            type: 'bar',
            label: 'Dataset 2',
            backgroundColor: "red",
            data: [randomScalingFactor(), randomScalingFactor(
                    ), randomScalingFactor(), randomScalingFactor(
                    ), randomScalingFactor(), randomScalingFactor(
                    ), randomScalingFactor()],
            borderColor: 'white',
            borderWidth: 2
        }, {
            type: 'bar',
            label: 'Dataset 3',
            backgroundColor: "green",
            data: [randomScalingFactor(), randomScalingFactor(
                    ), randomScalingFactor(), randomScalingFactor(
                    ), randomScalingFactor(), randomScalingFactor(
                    ), randomScalingFactor()]
        }]
}

function config() {

    var vertical = {
        type: 'bar',
        data: dataBar1,
        options: {
            maintainAspectRatio: false,
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart'
            }
        }
    }

    var horizontal = {
        type: 'horizontalBar',
        data: dataBar1,
        options: {
            maintainAspectRatio: false,
            elements: {
                rectangle: {
                    borderWidth: 2
                }
            },
            legend: {
                position: 'right'
            },
            title: {
                display: true,
                text: 'Chart.js Horizontal Bar Chart'
            }
        }
    }

    var multiAxis = {
        type: "bar",
        data: dataBar2,
        options: {
            maintainAspectRatio: false,
            title: {
                display: true,
                text: "Chart.js Bar Chart - Multi Axis"
            },
            tooltips: {
                mode: 'index',
                intersect: true
            },
            scales: {
                yAxes: [{
                        type: "linear",
                        display: true,
                        position: "left",
                        id: "y-axis-1"
                    }, {
                        type: "linear",
                        display: true,
                        position: "right",
                        id: "y-axis-2",
                        gridLines: {
                            drawOnChartArea: false
                        }
                    }]
            }
        }
    }

    var stacked = {
        type: 'bar',
        data: dataBar3,
        options: {
            maintainAspectRatio: false,
            title: {
                display: true,
                text: "Chart.js Bar Chart - Stacked"
            },
            tooltips: {
                mode: 'index',
                intersect: false
            },
            scales: {
                xAxes: [{
                        stacked: true
                    }],
                yAxes: [{
                        stacked: true
                    }]
            }
        }
    }

    var stackedGroup = {
        type: 'bar',
        data: dataBarChartDataStacked,
        options: {
            maintainAspectRatio: false,
            title: {
                display: true,
                text: "Chart.js Bar Chart - Stacked"
            },
            tooltips: {
                mode: 'index',
                intersect: false
            },
            scales: {
                xAxes: [{
                        stacked: true
                    }],
                yAxes: [{
                        stacked: true
                    }]
            }
        }
    }

    var comboBarLine = {
        type: 'bar',
        data: dataComboBarLine,
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Chart.js Combo Bar Line Chart'
            },
            tooltips: {
                mode: 'index',
                intersect: true
            }
        }
    }

    var retConfig = []
    // 0
    retConfig.push(vertical)
    // 1
    retConfig.push(horizontal)
    // 2
    retConfig.push(multiAxis)
    // 3
    retConfig.push(stacked)
    // 4
    retConfig.push(stackedGroup)
    // 5
    retConfig.push(comboBarLine)

    return retConfig
}
