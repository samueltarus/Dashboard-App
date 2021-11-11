Ext.define('DashboardApp.view.base.Header',{
  extend: 'Ext.toolbar.Toolbar',
  xtype: 'appheader',
  items: [
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
    {
      xtype: 'component',
      bind: {
        html: '{appHeaderIcon}'
      }
    },
    {
      xtype: 'component',
      bind: {
        html: '{appName}'
      }
    },
    {
      xtype: 'tbfill'
    },
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
});
