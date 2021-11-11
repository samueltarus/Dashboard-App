Ext.define('DashboardApp.model.User', {
    extend: 'Ext.data.Model',

    fields: [
      {
        name: 'id',
        type: 'int',
      },
    {
        name: 'first',
        type: 'string'
    },
    {
        name: 'Last Name',
        type: 'string'
    },
    {
        name: 'username',
        type: 'string'
    },
    {
        name: 'email',
        type: 'string'
    },
    {
        name: 'password',
        type: 'string'
    }
]


});
