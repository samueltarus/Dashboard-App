Ext.define('DashboardApp.view.requests.RequestGridView',{
    extend: 'Ext.grid.Panel',
    xtype: 'dashboardgridview',
    enableLocking: true,
    
    scrollable: true,
    border: true, 
    loadMask: true,
    width: 840,
    grouped: true,
    height: 450,
    frame: true,
    title: 'Server Responses',
    iconCls: 'icon-grid',
    
    plugins: {        
        gridfilters: true,
            cellediting: {
                clicksToEdit: 1
            }
        },

    reference:'dashboardgridview',
    store: {
        type: 'server'
    },
    features: [{
        id: 'group',
        ftype: 'groupingsummary',
        groupHeaderTpl: '{name}',
        hideGroupedHeader: true,
        enableGroupingMenu: false
    }],
    viewModel:{
        // type: 'dashboadgridviewmodel',           
    },   

    bind: {
        title: '{myTitle}',
    },
    // title: 'Comments Management',
    
    
    tbar: [ {
            fieldLabel: 'Start',
            labelWidth: 60,
            allowBlank: false,
            xtype: 'datefield',
            width: 200,
            value: new Date(),
            align: 'left',
            margin: '0 0 0 0',
        },
        {
            fieldLabel: 'End',
            labelWidth: 60,
            allowBlank: false,
            xtype: 'datefield',
            width: 200,
            value: new Date(),
            align: 'left',
            margin: '0 0 0 0',
        },  
         { 
            xtype: 'button', 
            text: 'Export', 
            reference: 'exportButton', 
            handler: function(button) {
                console.log("BUTTON");
                let grid = Ext.ComponentQuery.query('grid')[0];
                console.log("GRID %o", grid);
                grid.saveDocumentAs({
                    type: 'xlsx',
                    charset: 'Shift-JIS',
                    title: 'Response Server',
                    fileName: 'sample.xlsx'
                });
            }
        },
        {
            xtype: 'combobox',
            labelWidth: 60,
            width: 200,
            editable: false,
            align: 'left',
            store: ['200', '400', '304', '500'],
            value: 'Select type',
            
            // width: 100,

        },
    ],
    columns: [
        {
            text: 'Status',
            flex: 1,
            tdCls: 'url',
            sortable: true,
            dataIndex: 'Status',
            
            hideable: false,
            summaryType: 'count',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return ((value === 0 || value > 1) ? '(' + value + ' Status)' : '(1 Status)');
            }
        },
        {
             text: 'IP', 
                dataIndex: 'IP', 
                flex: 1 ,
                
                summaryType: 'sum',
                // renderer: function(value, metaData, record, rowIdx, colIdx, store, view) {
                //     return value + ' IP';
                // },
                summaryType: 'count',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return ((value === 0 || value > 1) ? '(' + value + ' IP)' : '(1 Status)');
            }
            },
        { 
            text: 'Time',
            dataIndex: 'Time',
             flex: 1,
         },
        {
            text: 'URL',
            dataIndex: 'URL',
            flex: 1,
            summaryType: 'sum',
              renderer: function(value, metaData, record, rowIdx, colIdx, store, view) {
                  return value + ' URL';
              },
              summaryRenderer: function(value, summaryData, dataIndex) {
                  return value + ' URL';
              },
            editor: {
                xtype: 'textfield',
                allowBlank: false
            },
            
        },
        {
            text: 'Status',
            dataIndex: 'Status',
            flex: 1,
            filter: {
                type: 'string',
                itemDefaults: {
                    emptyText: 'Search for...'
                }
            },
            summaryType: 'count',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return ((value === 0 || value > 1) ? '(' + value + ' Status)' : '(1 Status)');
            }
            //  summaryType: function(records, values) {
            //     var i = 0,
            //         length = records.length,
            //         total = 0,
            //         record;

            //     for (; i < length; ++i) {
            //         record = records[i];
            //         total += record.get('Status') * record.get('Status');
            //     }

            //     return total;
            // },
        },
    ],
    selModel: {
        selType: 'checkboxmodel',
        mode: 'SINGLE',

    },   
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    },
    plugins: [{
        ptype: 'rowexpander',
        rowBodyTpl : new Ext.XTemplate(
            '<p><b>IP:</b> {IP}</p>',
            '<p><b>URL:</b> {change:this.formatChange}</p><br>',
            '<p><b>Status:</b> {Status}</p>',
        {
            formatChange: function(v){
                var color = v >= 0 ? 'green' : 'red';
                return '<span style="color: ' + color + ';">' + Ext.util.Format.usMoney(v) + '</span>';
            }
        })
    }],
});