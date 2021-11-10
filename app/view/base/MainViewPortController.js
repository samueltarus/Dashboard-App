Ext.define('DashboardApp.view.base.MainViewPortController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainviewportcontroller',
    /**
     * Called when the view is created
     */
     init: function() {
         var me = this,
             viewport = me.getView(),
             center = viewport.lookupReference('center');
     },
    mixins: [

    ],
    routes: {
        'server-requests': 'onServerUrlActivated',
        'statistics': 'onStatisticsActivated',
        'user-sessions-view': 'onUserSessionViewActivated',

      },

      
    onServerUrlActivated: function() {
        this.showView("Server Request", "dashboardgridview", "fa fa-list-alt");
    },

    onStatisticsActivated: function() {
        this.showView("Log Statistics", "groupedgrid", "fa fa-list-alt");
      },
      onUserSessionViewActivated: function() {
        this.showView("User Sessions", "usersessionview", "fa fa-list-alt");
      },


    onRequestChartStatisticsActivated: function() {
        this.showView("Server Request Chart", "chart", "fa fa-list-alt");
    },
    showView: function(title, xtype, iconCls) {
        //? get hold of the center panel
        var centerPanel = Ext.ComponentQuery.query('mainviewport #center')[0];
        //? create the view with students
        let tab = centerPanel.items.findBy((item, index) => {
            return title === item.title;
        });
        //? add the view to the tabpanel and make it active
        if (!tab) {
            tab = centerPanel.add({
                xtype: xtype,
                title: title,
                iconCls: iconCls,
                closable: true,
            });
        }
        //? make the item active
        centerPanel.setActiveItem(tab);

    },
    onLogoutClick: function () {
        var me=this;
        var view = me.getView();
        localStorage.removeItem('isLoggedIn');
        view.destroy();
        console.log("logout clicked");

        Ext.Msg.show({
            title:'Logout?',
            message: 'Would you like to Logout?',
            buttons: Ext.Msg.YESNOCANCEL,
            icon: Ext.Msg.QUESTION,
            fn: function(btn) {
                if (btn === 'yes') {
                    localStorage.removeItem('isLoggedIn',false);
                        view.destroy();
                     Ext.create({
                            xtype: 'loginform',
                    });
                } else if (btn === 'no') {
                    console.log('No pressed');
                } else {
                    console.log('Cancel pressed');
                }
            }
        });

    },
    changePassword: function () {
        var me=this;
        Ext.Msg.show({
            title:'Logout?',
            message: 'Would you like to Change Your Password?',
            buttons: Ext.Msg.YESNOCANCEL,
            icon: Ext.Msg.QUESTION,
            fn: function(btn) {
                if (btn === 'yes') {
                    me.getView.destroy();
                     Ext.create({
                            xtype:'changePassword'
                    });
                } else if (btn === 'no') {
                    console.log('No pressed');
                } else {
                    console.log('Cancel pressed');
                }
            }
        });

    }
});
