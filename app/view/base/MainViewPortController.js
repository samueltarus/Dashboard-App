Ext.define('DashboardApp.view.base.MainViewPortController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainviewportcontroller',
    /**
     * Called when the view is created
     */
    mixins: [

    ],
    routes: {
        'server-requests': 'onServerUrlActivated',
        'statistics': 'onStatisticsActivated',
        'requestchart': 'onRequestChartStatisticsActivated',

        'student-form-panel': {
            before: 'checkIfHasAdminRights',
            action: 'onShowStudentFormPanel',
        },

        "students/:regNo": {
            action: 'onStudentRegistration',
            conditions: {
                ':regNo': '([0-9]{10})'
            }
        },
        "students/:id": {
            action: 'onShowStudentWithId',
            conditions: {
                ':id': '([0-9]{2})'
            }
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
    onStudentRegistration: function(regNo) {
        console.log(regNo);
    },
    onShowStudentWithId: function(id) {
        console.log("Student with id routes was executed");
        //? show form panel
        this.onShowStudentFormPanel();
        //? fill the form with the data
        //! http://localhost:3000/students/2
        let form = Ext.ComponentQuery.query('studentformpanel')[0];
        form.load({
            url: `http://localhost:3000/students/${id}`,
            method: 'GET',
            failure: function(form, action) {
                console.log(action.responseText);
                // Ext.Msg.alert("Load failed", action.result.errorMessage);
            }
        });



    },
    onShowStudentFormPanel: function() {
        console.log("Student new form  was executed");
        //? show add form panel
        this.showView('Add Student', 'studentformpanel', 'fa fa-plus-square');
    },

    onServerUrlActivated: function() {
        this.showView("Server Request", "dashboardgridview", "fa fa-list-alt");
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

    onStatisticsActivated: function() {
        this.showView("Log Statistics", "groupedgrid", "fa fa-list-alt");
    },
    init: function() {
        var me = this,
            viewport = me.getView(),
            center = viewport.lookupReference('center');
        // console.log(center);
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