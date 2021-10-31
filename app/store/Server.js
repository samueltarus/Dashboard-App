Ext.define('DashboardApp.store.Server',{
    extend: 'Ext.data.Store',
    model: 'DashboardApp.model.Server',
    alias: 'store.server',
    groupField: 'server',

    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/server-request',
        render: {
            type: 'json',
            rootProperty: 'server-request'
        }
    },
    autoLoad: 'true',
    sorters: [{
        property: 'name',
        direction: 'ASC'
    }],
    pageSize: 10
});