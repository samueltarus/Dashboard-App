Ext.define('DashboardApp.view.base.MainViewPort', {
    extend: 'Ext.container.Viewport',
    xtype: 'mainviewport',
    layout: 'border',
    controller: 'mainviewportcontroller',

    viewModel: {
      type: 'mainviewmodel'
    },

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'DashboardApp.view.base.Footer'
    ],
      plugins: 'viewport',

    items: [{
            region: 'north',
            border: false,
            margin: '0 0 5 0',
            title: 'GOSM =>' + "| Developed By Hanson Tarus",
        tbar: [
            {
                fieldLabel: 'Status',
                name: 'switchModule',
                xtype: 'combobox',
                store: ['200', '400', '404'],
                displayField: 'systemModuleName',
                valueField: 'modulextype',
                forceSelection: true,
                queryMode: 'local',


            },
            '->',
            {
                text: 'logout',
                xtype: 'button',
                iconCls: 'fa fa-sign-out fa-lg buttonIcon',
                listeners: {
                    click: 'onLogoutClick'
                }
            },
            {
                text: 'Change Password',
                xtype: 'button',
                listeners: {
                    click: 'changePassword'
                }

            },
        ]
        },
        {
            region: 'west',
            collapsible: true,
            title: 'Menu',
            width: 100,
            scrollable: true,
            split: true,
            margin: '0 5 5 0',
            height: 100,
            width: 200,
            minHeight: 100,
            // could use a TreePanel or AccordionLayout for navigational items,
            items: [{
                xtype: 'navigationpanel'
            }]
        },
        {
            region: 'south',
            collapsible: true,
            titleAlign: 'center',
            xtype: 'appfooter',
            // html: 'Welcome to innovative and growing advance technology company',
            // title: '=>' + "| Developed By Hanson Tarus",
            split: true,
            height: 25,
            minHeight: 25
        },
        // {
        //     region: 'east',
        //     title: 'East Panel',
        //     collapsible: true,
        //     split: true,
        //     width: 100
        // },
        {
            region: 'center',
            itemId: 'center',
            xtype: 'tabpanel', // TabPanel itself has no title
            activeTab: 0,
            items: [{
                xtype: 'dashboardgridview'
            }]

        }
    ]

});
