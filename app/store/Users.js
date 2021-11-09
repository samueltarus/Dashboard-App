Ext.define('DashboardApp.store.Users',{
    extend: 'Ext.data.Store',
    model: 'DashboardApp.model.Server',
    alias: 'store.users',

    proxy: {
        type: 'rest',
        url: 'http://localhost:3000/users',
        render: {
            type: 'json',
            rootProperty: 'users'
        }
    },
    autoLoad: 'true',
    pageSize: 10

});
