Ext.define('DashboardApp.model.Server', {
    extend: 'Ext.data.Model',

    
    fields: [{
        name: 'IP',
        type: 'string'
    },
    {
        name: 'TIME',
        type: 'int'
    },
    {
        name: 'URL',
        type: 'string'
    },
    {
        name: 'STATUS',
        type: 'int'
    }
]


});
