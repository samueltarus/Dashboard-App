Ext.define('DashboardApp.store.Menu', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.menu',
    storeId: 'menu',

    root: {
        expanded: true,
        children: [{
                text: 'Users',
                expanded: true,
                children: [{
                        text: 'Server Request Captured',
                        leaf: true,
                        xtype: 'dashboardgridview',
                        iconCls: 'fas fa-users',
                    },
                    {
                        text: 'Add Request',
                        leaf: true,
                        // xtype: 'userinfo-form'
                    }
                ]
            },
            {
              text: 'Log Statistics',
              expanded: false,
              iconCls: 'fad fa-calculator',
              children: [
                {
                  text: 'General summary',
                  leaf: true,
                  iconCls: 'fas fa-superscript',
                  xtype: 'groupedgrid',
                }
              ]
            }
       ]
    }

});
