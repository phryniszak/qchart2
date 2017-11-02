
/**
 * Platform fallback implementation (minimal).
 * @see https://github.com/chartjs/Chart.js/pull/4591#issuecomment-319575939
 */

// lineTo dashed polyfill
// https://gist.github.com/danschumann/ec0745f9e1889c0c6e9d
var reqEventTypes = []

function createEvent(type, chart, x, y, nativeEvent) {
    return {
        type: type,
        chart: chart,
        native: nativeEvent || null,
        x: x !== undefined ? x : null,
                             y: y !== undefined ? y : null
    }
}

function canvasEvent(type, nativeEvent) {

    // console.log("qmlEvent", type, nativeEvent);
    reqEventTypes.forEach(function (ev) {
        if (type === ev.type) {
            if (nativeEvent !== undefined) {
                ev.listener(createEvent(type, ev.node, nativeEvent.x,
                                        nativeEvent.y, nativeEvent))
            } else {
                ev.listener({
                                type: type,
                                chart: ev.node
                            })
            }
        }
    })
}

var implementation = {
    acquireContext: function (item, config) {

        if (item && item.canvas) {
            // Support for any object associated to a canvas (including a context2d)
            item = item.canvas
        }

        // QML
        helpers.requestAnimFrame = item.requestAnimationFrame
        item.addCanvasEvent(canvasEvent)

        if (item.available){
            return item.getContext('2d')
        }

        console.error("no context")
        return null;
    },

    releaseContext: function(context) {
        // context.reset();
        // delete context;
    },

    /**
     * Registers the specified listener on the given chart.
     * @param {Chart} chart - Chart from which to listen for event
     * @param {String} type - The ({@link IEvent}) type to listen for
     * @param {Function} listener - Receives a notification (an object that implements
     * the {@link IEvent} interface) when an event of the specified type occurs.
     */
    addEventListener : function (node, type, listener) {

        // console.log("addEventListener", type)

        reqEventTypes.push({
                               node: node,
                               type: type,
                               listener: listener
                           })
    },
    removeEventListener: function (node, type, listener) {
        reqEventTypes.forEach(function (item, index, array) {
            if ((item.type === type) && (item.node === node)
                    && (item.listener === listener)) {
                reqEventTypes.splice(index, 1)
            }
        })
    }
}
