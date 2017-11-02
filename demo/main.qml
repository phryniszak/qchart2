import QtQuick 2.9
import QtQuick.Controls 2.2
import QtQuick.Layouts 1.3

import "./config.js" as Config

ApplicationWindow {
    visible: true
    width: 1024
    height: 700
    title: qsTr("Hello qcharts2")
    id: window

    property variant allConfig: Config.config()
    property variant currentConfig

   ListModel {
       id: chartsModel
        ListElement {
            type: "Bar charts"
            text: "Vertical"
        }
        ListElement {
            type: "Bar charts"
            text: "Horizontal"
        }
        ListElement {
            type: "Bar charts"
            text:"Multi Axis"
        }
        ListElement {
            type: "Bar charts"
            text: "Stacked"
        }
        ListElement {
            type: "Bar charts"
            text: "Stacked groups"
        }
        ListElement {
            type: "Other charts"
            text: "Combo bar/line"
        }
    }

    Component {
        id: whiteSquare
        Rectangle {
            color: "white"
            anchors.fill: parent
        }
    }

    header: ToolBar {
        id: headerToolBar

        ToolButton {
            contentItem: Image {
                source: "qrc:/images/ic_menu_black_24px.svg"
            }

            onClicked: {
                if (drawer.visible) {
                    drawer.close()
                } else {
                    drawer.open()
                }
            }
        }

        Button {
            id: randomizeData
            text: "Randomize Data"
            anchors.right: parent.right
            onClicked: window.randomizeData()
        }
    }

    Loader {
        id: chartLoader
        asynchronous: true
        visible: status == Loader.Ready
        anchors.fill: parent
        onLoaded: {
            if (currentConfig) {
                item.chartData = currentConfig.data
                chartLoader.item.chartOptions = currentConfig.options
                chartLoader.item.chartType = currentConfig.type
                chartLoader.item.requestPaint()
            }
        }
    }

    Drawer {
        id: drawer
        width: Math.min(window.width, window.height) / 3 * 2
        height: window.height

        property int elementHeight: 30

        ListView {
            anchors.fill: parent
            id: listView
            clip: true
            model: chartsModel
            section.property: "type"
            section.delegate: Pane {
                width: listView.width
                height: sectionLabel.implicitHeight + 20

                Label {
                    id: sectionLabel
                    text: section
                    anchors.centerIn: parent
                }
            }

            delegate: ItemDelegate {
                id: listDelegate
                text: model.text
                width: parent.width
                height: drawer.elementHeight
                highlighted: ListView.isCurrentItem
                onClicked: listView.currentIndex = index
            }

            onCurrentIndexChanged: {
                drawer.close()
            }
        }

        onClosed: {
            chartLoader.source = ""
            currentConfig = allConfig[listView.currentIndex]
            chartLoader.source = "qrc:/Qchart2.qml"
        }
    }

    Component.onCompleted: {
        currentConfig = allConfig[listView.currentIndex]
        chartLoader.source = "qrc:/Qchart2.qml"
    }

    function randomizeData() {
        currentConfig.data.datasets.forEach(function (dataset) {
            dataset.data = dataset.data.map(function () {
                return Config.randomScalingFactor()
            })
        })
        chartLoader.item.redraw()
    }
}
