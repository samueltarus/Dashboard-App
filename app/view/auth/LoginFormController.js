Ext.define('DashboardApp.view.auth.LoginFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.loginformcontroller',
    onLoginClick: function() {
      console.log("login is clicked");
      var me = this;
      var window = me.getView();
      var store = Ext.getStore('users');
      var form = window.lookupReference('login-form').getForm();
      var model = me.getViewModel();
      var username = form.findField('username').getValue();
      var password = form.findField('password').getValue();
      localStorage.setItem('isLoggedIn',true);
      window.destroy();
      Ext.widget('mainviewport');
    },
    loginLogic: function (username, password) {
      // var store = Ext.getStore('users');
      // var matched = store.queryBy(function(userstore){
      //   return (record.get('username') == username && record.get('password') == password);
      // });

    },
    onRegisterClick: function () {
      console.log("register clicked");
    }

});
