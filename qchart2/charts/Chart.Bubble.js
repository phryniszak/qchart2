(function(Chart) {

    Chart.Bubble = function(context, config) {
        config.type = 'bubble';
        return new Chart(context, config);
    };

}
)(Chart)
