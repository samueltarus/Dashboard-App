Ext.define('DashboardApp.view.base.MainViewPortController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainviewportcontroller',
    /**
     * Called when the view is created
     */
    mixins: [

    ],
    listen: {
        controller: {
            '#': {
                unmatchedroute: 'onUnmatchedRoute'
            }
        }
    },
    routes: {
        'comments': 'onCommentView',
        'posts': 'onPostView',

    },
    onUnmatchedRoute: function(route) {
        GasOrder.Util.showError('No matching route found for route ' + route);
        this.redirectTo('comments', {
            replace: true
        });
    },
    onPostView: function(args) {

        var center = Ext.ComponentQuery.query('mainviewport #center')[0];

        var newItem = center.items.findBy(function(item, index) {
            return 'comments' === item.title;
        });

        if (newItem === null || newItem === undefined) {
            newItem = center.add({
                // xtype: 'post-view-grid',
                iconCls: 'fa fas-users',
                title: 'posts',
                closable: true,
            });
        }
        center.setActiveItem(newItem);

    },
    onUnmatchedRoute: function(route) {
        GasOrder.Util.showError('No matching route found for route ' + route);
        this.redirectTo('comments', {
            replace: true
        });
    },
    // onCommentView: function(args) {

    //     var center = Ext.ComponentQuery.query('mainviewport #center')[0];

    //     var newItem = center.items.findBy(function(item, index) {
    //         return 'comments' === item.title;
    //     });

    //     if (newItem === null || newItem === undefined) {
    //         newItem = center.add({
    //             // xtype: 'comment-view-grid',
    //             iconCls: 'fa fas-users',
    //             title: 'comments',
    //             closable: true,
    //         });

    //     }
    //     center.setActiveItem(newItem);

    // },
    init: function() {
        var me = this,
            viewport = me.getView(),
            center = viewport.lookupReference('center');
        // console.log(center);
    },

    onLogoutClick: function () {
        var me=this;
        Ext.Msg.show({
            title:'Logout?',
            message: 'Would you like to Logout?',
            buttons: Ext.Msg.YESNOCANCEL,
            icon: Ext.Msg.QUESTION,
            fn: function(btn) {
                if (btn === 'yes') {
                    localStorage.removeItem('isLoggedIn',false);

                        me.getView().destroy();
                     Ext.create({
                            xtype:"login"
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
                  me.getView().destroy();
                     Ext.create({
                            xtype:"changePassword"
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
