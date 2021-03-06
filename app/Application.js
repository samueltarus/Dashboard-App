/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
 Ext.define('DashboardApp.Application', {
     extend: 'Ext.app.Application',

     name: 'DashboardApp',

     quickTips: false,
     platformConfig: {
         desktop: {
             quickTips: true
         }
     },
     launch: function(profile) {
         let isLoggedIn = localStorage.getItem('isLoggedIn');

         if (isLoggedIn) {
             Ext.widget('mainviewport');
         } else {
             Ext.widget('loginform');
         }
     },
     onAppUpdate: function () {
         Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
             function (choice) {
                 if (choice === 'yes') {
                     window.location.reload();
                 }
             }
         );
     }
 });
