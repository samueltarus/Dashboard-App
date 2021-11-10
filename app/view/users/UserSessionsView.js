Ext.define('DashboardApp.view.users.UserSessionsView',{
  extend: 'Ext.grid.Panel',
  controller:'usersessionviewcontroler',
  xtype: 'usersessionview',
  requires: [
      'Ext.grid.feature.Grouping',
      'Ext.grid.filters.Filters',
  ],
  plugins: {
    gridfilters: true
  },
  emptyText: 'No Matching Records',
  loadMask: true,
  title: 'User sessions',
  width: 600,
  height: 400,

  store: {
    type: 'sessions'
},
  bind: '{sessions}',
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
      text: 'user Id',
      dataIndex: 'userId',
      flex: 1,
      filter:{

        type: 'string',
        loadOnShow: true,
        itemDefaults: {
          emptyText: 'Search..'
        }
      }
    },
    {
      text: 'username',
      dataIndex: 'username',
      flex: 1,
      filter:{

        type: 'string',
        loadOnShow: true,
        itemDefaults: {
          emptyText: 'Search..'
        }
      }
    },
    {
      text: 'browser',
      dataIndex: 'browser',
      flex: 1,
      loadingText: 'Loading records ',
      filter: {

        type: 'list',
        loadOnShow:true,
      }
    },
    {
      xtype: 'datecolumn',
      text: 'last Login',
      dataIndex: 'lastLogin',
      flex: 1,
      filter: true,
    },
    {
      text: 'Method Submitted',
      dataIndex: 'submitMethod',
      flex: 1,
      filter: {
        type: 'list',
        loadOnShow:true,
        // itemDefaults: {
        //
        //   emptyText: 'Search for...'
        // }
      }
    },
    {
      text: 'Client Port No',
      dataIndex: 'cientPortNo',
      flex: 1,
      filter: {
        type: 'string',
        loadOnShow:true,
        itemDefaults: {
          emptyText: 'Search for.....'
        }
      }
    }, {
      text: 'Server Port Number',
      dataIndex: 'serverPortNo',
      flex: 1,
      filter: {
        type: 'string',
        loadOnShow:true,
        itemDefaults: {
          emptyText: 'Search for.....'
        }
      }
    }, {
      text: 'Ip Address',
      dataIndex: 'ipAddress',
      flex: 1,
      filter: {
        type: 'string',
        loadOnShow:true,
        itemDefaults: {
          emptyText: 'Search for.....'
        }
      }

    }, {
      text: 'Status Code',
      dataIndex: 'status',
      flex: 1,
      filter: 'number',
    }
  ],

  features: [
    {
      ftype: 'grouping',
      startCollapsed: true,
      groupHeaderTpl: '{columnName}: {browser} ({rows.length} Item{[values.rows.length > 1 ? "s" : ""]})'
    }
  ],

  viewModel: {
    data: {
      groupBy: null
    },
    stores: {
      sessions: {
        type: 'sessions',
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

})
