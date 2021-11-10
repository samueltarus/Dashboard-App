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
<<<<<<< HEAD
=======
        'requestchart': 'onRequestChartStatisticsActivated',
        },
    },
    checkIfHasAdminRights: function() {
        //* Case 1 => Calling stop/resume on the action
        //* The function should be receiving the last parameter as
        //! ACTION
        // //? make a request to the server to check if the user has the right to access this page.

        // let hasAccess = false;
        // if (hasAccess) {
        //     //? process the request
        //     action.resume();
        // } else {
        //     //? stop the current request
        //     TrainingJs.Util.showError("You do not have permission to access this page", action);
        //     action.stop();
        // }

        //* Case 2 => making use of promises
        //? return a promise

        return new Promise(function(resolve, reject) {
            //? make the request to the server to determine if the user is allowed to access this page.
            let hasAccess = false;
            //? if successful
            if (hasAccess) {
                //? return resolve
                resolve();

            } else {
                //! return reject
                reject("You do not have permission to access this page.");
            }

        });


    },

    onServerUrlActivated: function() {
        this.showView("Server Request", "dashboardgridview", "fa fa-list-alt");
    },
<<<<<<< HEAD
    onStatisticsActivated: function() {
        this.showView("Log Statistics", "groupedgrid", "fa fa-list-alt");
=======

    onRequestChartStatisticsActivated: function() {
        this.showView("Server Request Chart", "chart", "fa fa-list-alt");
>>>>>>> 79514c0db6b9f9fb309d522a2d00ac72db1b443c
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
