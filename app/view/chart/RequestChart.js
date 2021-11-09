
        Ext.define('DashboardApp.view.chart.RequestChart',{
        extend: 'Ext.grid.Panel',
        xtype: 'chart',
        title:'Chart of Requests',
        height: 410,
        padding: '10 0 0 0',
        animate: true,
        shadow: false,
        style: 'background: #fff;',
        legend: {
            position: 'bottom',
            boxStrokeWidth: 0,
            labelFont: '12px Helvetica'
        },
        store: {
            type: 'server'
        },
        insetPadding: 40,
        items: [{
            type  : 'text',
            text  : 'Column Charts - Clustered Columns',
            font  : '22px Helvetica',
            width : 100,
            height: 30,
            x : 40, //the sprite x position
            y : 12  //the sprite y position
        }, {
            type: 'text',
            text: 'Data: Browser Stats 2012',
            font: '10px Helvetica',
            x: 12,
            y: 380
        }, {
            type: 'text',
            text: 'Source: http://www.w3schools.com/',
            font: '10px Helvetica',
            x: 12,
            y: 390
        }],
        axes: [{
            type: 'numeric',
            position: 'left',
            fields: 'IP',
            grid: true,
            minimum: 0,
            label: {
                renderer: function(v) { return v + '%'; }
            }
        }, {
            type: 'category',
            position: 'bottom',
            fields: 'Status',
            grid: true,
            label: {
                rotate: {
                    degrees: -45
                }
            }
        }],
        series: [{
            type: 'column',
            axis: 'left',
            title: [ 'URL', 'IP', 'Status', 'Time' ],
            xField: 'Time',
            yField: [ 'URL', 'IP', 'Status', 'Time' ],
            style: {
                opacity: 0.80
            },
            highlight: {
                fill: '#000',
                'stroke-width': 1,
                stroke: '#000'
            },
            tips: {
                trackMouse: true,
                style: 'background: #FFF',
                height: 20,
                renderer: function(storeItem, item) {
                    var browser = item.series.title[Ext.Array.indexOf(item.series.yField, item.yField)];
                    this.setTitle(browser + ' for ' + storeItem.get('URL') + ': ' + storeItem.get(item.yField) + '%');
                }
            }
        }]
        });