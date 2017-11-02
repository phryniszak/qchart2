//.pragma library
.import QtQuick 2.7 as QQ

Qt.include("./color/color.js")

/**
 * @namespace Chart
 */

Qt.include("./helpers/index.js")

// core.defaults.js
var defaults = {};

defaults._set = function(scope, values) {
        return helpers.merge(this[scope] || (this[scope] = {}), values);
    }

Qt.include("./core/core.js")

// Occupy the global variable of Chart, and create a simple base class
var Chart = function(item, config) {
    this.construct(item, config);
    return this;
};

Chart.Chart = Chart;

Qt.include('./core/core.helpers.js')
Qt.include('./core/core.element.js')
Qt.include('./elements/index.js');
Qt.include('./core/core.interaction.js')

// @TODO adapt impelentation to QML
Qt.include('./platforms/platform.qml.js');
Qt.include('./platforms/platform.js');

Qt.include('./core/core.plugin.js');
Qt.include('./core/core.animation.js');
Qt.include('./core/core.controller.js');
Qt.include('./core/core.datasetController.js');
Qt.include('./core/core.layoutService.js');
Qt.include('./core/core.ticks.js');
Qt.include('./core/core.scaleService.js')
Qt.include('./core/core.scale.js');
Qt.include('./core/core.tooltip.js');

Qt.include('./scales/scale.linearbase.js');
Qt.include('./scales/scale.category.js');
Qt.include('./scales/scale.linear.js');
Qt.include('./scales/scale.logarithmic.js');
Qt.include('./scales/scale.radialLinear.js');
// Qt.include('./scales/scale.time.js');

//// Controllers must be loaded after elements
//// See Chart.core.datasetController.dataElementType
Qt.include('./controllers/controller.bar.js');
Qt.include('./controllers/controller.bubble.js');
Qt.include('./controllers/controller.doughnut.js');
Qt.include('./controllers/controller.line.js');
Qt.include('./controllers/controller.polarArea.js');
Qt.include('./controllers/controller.radar.js');
Qt.include('./controllers/controller.scatter.js');


Qt.include('./charts/Chart.Bar.js');
Qt.include('./charts/Chart.Bubble.js');
Qt.include('./charts/Chart.Doughnut.js');
Qt.include('./charts/Chart.Line.js');
Qt.include('./charts/Chart.PolarArea.js');
Qt.include('./charts/Chart.Radar.js');
Qt.include('./charts/Chart.Scatter.js');

//// Loading built-it plugins
var plugins = [];
Qt.include('./plugins/plugin.filler.js')
Qt.include('./plugins/plugin.legend.js')
Qt.include('./plugins/plugin.title.js')

Chart.plugins.register(plugins);

Chart.platform.initialize();
