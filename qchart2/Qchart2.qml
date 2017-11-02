import QtQuick 2.9
import "./chart.js" as Charts

Canvas {
    id: canvas

    property variant _chart
    property string chartType
    property variant chartData
    property variant chartOptions

    // Uncomment below lines to use OpenGL hardware accelerated rendering.
    // See Canvas documentation for available options.
    renderTarget: Canvas.FramebufferObject
    renderStrategy: Canvas.Threaded

    signal canvasEvent(string type, variant event)

    onPaint: {
        if (!_chart) {
            _chart = new Charts.Chart(canvas, getConfig())
        } else {
            _chart.resize()
        }
    }

    MouseArea {
        anchors.fill: canvas
        hoverEnabled: true

        onClicked: function (event) {
            canvas.canvasEvent("click", event)
        }

        onPositionChanged: function (event) {
            canvas.canvasEvent("mousemove", event)
        }

        onExited: function (event) {
            canvas.canvasEvent("mouseout", event)
        }
    }

    function addCanvasEvent(handler) {
        canvas.canvasEvent.connect(handler)
    }

    function getConfig() {
        return {
            type: chartType,
            data: chartData,
            options: chartOptions
        }
    }

    function redraw() {
        _chart.update();
    }
}
