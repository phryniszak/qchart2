(function(Chart) {

    Chart.Radar = function(context, config) {
        config.type = 'radar';

        return new Chart(context, config);
    };

}
)(Chart)
