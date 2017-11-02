(function(Chart) {

    Chart.Bar = function(context, config) {
        config.type = 'bar';

        return new Chart(context, config);
    };

}
)(Chart)
