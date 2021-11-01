Ext.define('DashboardApp.model.Request', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.summary.Average'
    ],

    fields: [
        'IP',
        'Time',
        'URL',
        'Status',
        {
            name: 'rating',
            summary: 'average'
        }
    ]
});
