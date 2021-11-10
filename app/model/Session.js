Ext.define('DashboardApp.model.Session',{
  extend: 'Ext.data.Model',
  requires: [
      'Ext.data.summary.Average'
  ],
  fields: [
    {
      name: 'userId',
      type: 'int'
    },
    {
      name: 'username',
      type: 'string'
    },
    {
      name: 'browser',
      type: 'string'
    },
    {
      name: 'lastLogin',
      type: 'date',
      dateFormat: 'd/m/Y'
    },
    {
      name: 'submitMethod',
      type: 'string'
    },
    {
      name: 'cientPortNo',
      type: 'string'
    },
    {
      name: 'serverPortNo',
      type: 'string'
    },
    {
      name: 'ipAddress',
      type: 'string'
    },
    {
      name: 'status',
      type: 'number'
    },

  ]
});
