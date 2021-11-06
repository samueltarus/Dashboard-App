Ext.define('DashboardApp.view.status.StatusCodesView',{
  extend:'Ext.grid.Panel',
  xtype:'statuscodesfilter',
  requires: [
    'Ext.grid.filters.Filters',
  ],
  title: 'Status codes Summary',
  frame: true,
  width: 700,
  height: 500,
  resizable: true,

  plugins: 'gridfilters',

  emptyText: 'No Matching Records',
  loadMask: true,

  store: 'requests',

  columns: [
    {
      text: 'Ip Address',
      dataIndex: 'IP',
      flex: 1,
      filter: {
        type: 'number',
        itemDefaults: {
          emptyText: 'Enter the IP Address to search...'
        }
      }
    },

    {
      text: 'Time accessed',
      dataIndex: 'date',
      flex: 1,
      filter: true
    },

    {

      text: 'Response Status code',
      dataIndex: 'Status',
      flex: 1,
      filter: {
        type: 'number',
        itemDefaults: {

          emptyText: 'Enter status codes to search ..'

              }
      }
    },

    {

      text: 'Url accessed',
      dataIndex: 'URL',
      flex: 1,
      filter: {
        type: 'string',
        itemDefaults: {

          emptyText: 'Enter Url accessed'
        }
      }

    }
  ]
});
