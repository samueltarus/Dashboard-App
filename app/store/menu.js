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
                      text: 'Sessions',
                      leaf: true,
                      xtype: 'dashboardgridview',
                      url:'server-requests',
                      iconCls: 'fas fa-users',
                  },
                  {
                      text: 'All Users',
                      url: 'Add Request',
                      leaf: true,
                      // xtype: 'userinfo-form'
                  }
              ]
          },
          {
            text: 'Request',
            expanded: true,
            children: [{
                    text: 'Server Request Captured',
                    leaf: true,
                    xtype: 'dashboardgridview',
                    url:'server-requests',
                    iconCls: 'fas fa-users',
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
                url: 'statistics',
                iconCls: 'fas fa-superscript',
                xtype: 'groupedgrid',
              },
              {
                text: 'Status codes summary',
                leaf: true,
                url: 'Code Summary',
                iconCls: 'fas fa-superscript',
                xtype:'statuscodesfilter',
              }
            ]
          }, {
            text: 'Charts',
            expanded: false,
            iconCls: 'fad fa-calculator',
            children: [
              {
                text: 'Request Chart',
                leaf: true,
                url: 'request-chart',
                iconCls: 'fas fa-superscript',
                xtype: 'chart',
              },
              {
                text: 'Logs Chart',
                leaf: true,
                iconCls: 'fas fa-superscript',
                url: 'log-chart',
                xtype:'statuscodesfilter',
              }
            ]
          }
     ]
  }

});
