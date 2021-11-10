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
    // {
    //   name: 'userId',
    //   type: 'number',
    // },
    // {
    //   name: 'username',
    //   type: 'string',
    // },
    // {
    //   name: 'browser',
    //   type: 'string',
    // },
    // {
    //   name: 'lastLogin',
    //   type: 'date',
    // },
    // {
    //   name: 'submitMethod',
    //   type: 'string',
    // },
    // {
    //   name: 'cientPortNo',
    //   type: 'number',
    // },
    // {
    //   name: 'serverPortNo',
    //   type: 'number',
    // },
    // {
    //   name: 'ipAddress',
    //   type: 'string',
    // },
    // {
    //   name: 'status',
    //   type: 'string',
    // }
  ]
});
