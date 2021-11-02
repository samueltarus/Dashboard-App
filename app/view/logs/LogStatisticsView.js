Ext.define('DashboardApp.view.logs.LogStatisticsView',{
  extend: 'Ext.grid.Panel',
  xtype: 'groupedgrid',
  controller: 'Logstatisticsviewcontroller',
  requires: [
      'Ext.grid.feature.Grouping'
  ],
  title: 'Log Statistics',
  width: 600,
  height: 400,

  bind: '{requests}',
  collapsible: true,
  collapseFirst: false,
  frame: true,
  minHeight: 200,

  tools:[
    {
      type: 'plus',
      handler: 'onExpandAll',
      tooltip: 'Expand all groups',
      bind: {
        hidden: '{!groupBy}'
      }
    },
    {
      type: 'minus',
      handler: 'onCollapseAll',
      tooltip: 'Collapse all groups',
      bind: {
        hidden: '{!groupBy}'
      }
    }
  ],

  columns: [
    {
      text: 'IP',
      dataIndex: 'IP',
      flex: 1
    },
    {
      text: 'Time',
      dataIndex: 'Time',
      flex: 1
    },
    {
      text: 'Status',
      dataIndex: 'Status',
      flex: 1
    },
    {
      text: 'URL',
      dataIndex: 'URL',
      flex: 1
    }
  ],

  features: [
    {
      ftype: 'grouping',
      startCollapsed: true,
      groupHeaderTpl: '{columnName}: {Status} ({rows.length} Item{[values.rows.length > 1 ? "s" : ""]})'
    }
  ],

  viewModel: {
    data: {
      groupBy: null
    },
    stores: {
      requests: {
        type: 'requests',
        autoLoad: true,
        listeners: {
          groupchange: 'onGroupChange',
          buffer: 100
        }
      }
    }
  },

  viewConfig: {
    listeners:{
      groupcollapse: 'onGroupCollapse',
      groupexpand: 'onGroupExpand'
    }
  },
  tbar: ['->',{
    text: 'Toggle groups...',
    reference: 'groupsBtn',

    bind: {
      disabled: '{!groupBy}'
    },
    destroyMenu: true,
    menu: {
      hideOnScroll: false,
      items: []
    }
  }],

  fbar:[{
    text: 'Clear Grouping',
    handler: 'onClearGroupingClick',
    bind: {
      disabled: '{!groupBy}'
    }
  }]

});
