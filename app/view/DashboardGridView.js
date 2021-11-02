Ext.define('DashboardApp.view.DashboardGridView',{
    extend: 'Ext.grid.Panel',
    xtype: 'dashboardgridview',
    // controller: 'dashboardgridviewcontroller',
    scrollable: true,
    border: true,
    loadMask: true,
    stripeRows: true,
    columnLines: true,

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


    tbar: [{
            text: 'Add  Request',
            handler: 'addCommentButtonClick',
        },
        {
            text: 'Edit  Request',
            handler: 'editCommentButtonClick',
            bind: {
                disabled: '{!commentviewgrid.selection}'
            },
        }, {
            text: 'Delete  Request',
            itemId: 'btnDelete',
            formBind: true,
            handler: 'deleteCommentButtonClick',
        }, {
            text: 'Refresh  Request',
            handler: 'refreshCommentButtonClick',
        }, {
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
            xtype: 'combobox',
            labelWidth: 60,
            width: 200,
            editable: false,
            align: 'left',
            store: ['Active', 'Inactive', 'Suspended', 'Deleted'],
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
<<<<<<< HEAD
             text: 'IP',
                dataIndex: 'IP',
                flex: 1 },
        {
            text: 'TIME',
             dataIndex: 'TIME',
              flex: 1
=======
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
>>>>>>> c02676cf6d133bd6e5f7a0504d9889573737061b
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
});
