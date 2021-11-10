Ext.define('DashboardApp.store.Sessions',{
  extend: 'Ext.data.Store',
  model: 'DashboardApp.model.Session',
  alias: 'store.sessions',
  groupField: 'browser',
  sorters: ['browser','username'],

  proxy: {
    type: 'rest',
    url: 'http://localhost:3000/sessions',

    render: {
      type: 'json',
      rootProperty: 'sessions',
      totalProperty: 'totalCount'
    },


  }
});
