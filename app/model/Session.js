Ext.define('DashboardApp.model.Session',{
  extend: 'Ext.data.Model',
  requires: [
      'Ext.data.summary.Average'
  ],
  fields: [
    'userId',
    'username',
    'browser',
    'lastLogin',
    'submitMethod',
    'cientPortNo',
    'serverPortNo',
    'ipAddress',
    'status',
    {
        name: 'rating',
        summary: 'average'
    }
    
  ]
});
