Ext.define('DashboardApp.model.Server', {
    extend: 'Ext.data.Model',
    idProperty: 'serverId',
    
    fields: [{
        name: 'IP',
        type: 'string'
    },
    {
        name: 'Time',
        type: 'string'
    },
    {
        name: 'URL',
        type: 'string'
    },
    {
        name: 'Status',
        type: 'string'
    }
]


});
