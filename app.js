/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'DashboardApp.Application',

    name: 'DashboardApp',

    requires: [
        // This will automatically load all classes in the DashboardApp namespace
        // so that application classes do not need to require each other.
        'DashboardApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'DashboardApp.view.base.Dashboard'
});
