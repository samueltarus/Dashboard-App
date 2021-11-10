Ext.define('DashboardApp.view.base.Footer',{
  extend: 'Ext.container.Container',
  xtype: 'appfooter',
  layout: 'center',

  items: [
    {
      xtype: 'component',
      bind: {
        html: '{footer}'
      }
    }
  ]
});
