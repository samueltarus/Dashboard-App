Ext.define('DashboardApp.view.users.UserSessionsViewController',{
  extend: 'Ext.app.ViewController',
  alias: 'controller.usersessionviewcontroler',
  init: function (view) {
    this.groupingFeature = view.view.findFeature('grouping');
  },

  onClearGroupingClick: function () {

    this.groupingFeature.disable();
  },

  onCollapseAll: function () {

    this.groupingFeature.collapseAll();
  },

  onExpandAll: function () {
    this.groupingFeature.expandAll();
  },

  onGroupChange: function (store, grouper) {
    var me = this,
        groupingFeature = me.groupingFeature,
        groupBy = grouper ? grouper.getProperty() : '',
        groupsBtn = me.lookup('groupsBtn'),
        vm = me.getViewModel(),
        groups, users, menu,
        len, i;

    me.groupBy = groupBy;

    if (vm) {
      vm.set({
        groupBy: groupBy
      });
    }

    if (groupBy) {
      menu = groupsBtn.menu;

      if (groupsBtn.groupBy !== groupBy) {
        groupsBtn.groupBy = groupBy;
        groups = store.getGroups();
        users = [];

        groups.each(function (group) {
          users.push({
            xtype: 'menucheckitem',
            text: group.getGroupKey(),
            handler: 'onToggleGroup'
          });
        });

        menu.removeAll(true);
        if (users.length) {
          menu.add(users);
        }

      }
      users = menu.items.items;
      for (i = 0, len = users.length; i < len; ++i) {
        users[i].setChecked(groupingFeature.isExpanded(users[i].text));
      }

    }
  },
  onToggleGroup: function (user) {
    this.groupingFeature[user.checked ? 'expand' : 'collapse'](user.text, {
      highlight: true
    });
  },

  onGroupCollapse: function (v, n, groupName) {
    this.syncGroup(groupName, false);
  },

  onGroupExpand: function (v, n, groupName) {
    this.syncGroup(groupName, true);
  },

  syncGroup: function (groupName, state) {
    var groupsBtn = this.lookup('groupsBtn'),
    users = groupsBtn.menu.users.users,
    i;

    for (i = users.length; i-- > 0; ) {
      if (users[i].text === groupName) {
        users[i].setChecked(state, true);
        break;
      }
    }

  }

})
