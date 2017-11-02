(function(Chart) {
    Chart.Scatter = function(context, config) {
        config.type = 'scatter';
        return new Chart(context, config);
    };
}
)(Chart)
