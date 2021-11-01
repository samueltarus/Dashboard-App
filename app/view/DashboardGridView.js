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
             text: 'IP',
                dataIndex: 'IP',
                flex: 1 },
        {
            text: 'TIME',
             dataIndex: 'TIME',
              flex: 1
         },
        {
            text: 'URL',
            dataIndex: 'URL',
            flex: 1,
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        },
        {
            text: 'STATUS',
            dataIndex: 'STATUS',
            flex: 1
        },
    ],
    selModel: {
        selType: 'checkboxmodel',
        mode: 'MULTI',

    },
    selModel: 'rowmodel',
    // plugins: {
    //     ptype: 'rowediting',
    //     clicksToEdit: 1
    // },
    bbar: [{
        xtype: 'pagingtoolbar',
        displayInfo: true,
    }],
    selModel: {
        selType: 'checkboxmodel',
        mode: 'SINGLE',

    },
});
