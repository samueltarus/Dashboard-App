Ext.define('DashboardApp.store.Requests', {
    extend: 'Ext.data.Store',
    alias: 'store.requests',
    storeId: 'requests',
    model: 'DashboardApp.model.Request',
    groupField: 'Status',
    sorters: ['Status','Time'],
    proxy: {
      type: 'rest',
      url: 'http://localhost:3000/server-request',
      reader: {
        type: 'json',
        rootProperty: 'requests',
        totalProperty: 'totalCount'
      }
    },
});
