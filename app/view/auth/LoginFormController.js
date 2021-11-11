Ext.define('DashboardApp.view.auth.LoginFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.loginformcontroller',
    mixins: [
      'DashboardApp.mixins.WindowMixins'
    ],
    onLoginClick: function(btn) {
      var me = this,
          i = 0,
          fn, val;
      var window = me.getView();
      var store = Ext.getStore('users');
      var form = window.lookupReference('login-form').getForm();
      var model = me.getViewModel();
      var username = form.findField('username').getValue();
      var password = form.findField('password').getValue();

      me.showProgressBar(btn);

      // Fake progress fn
      fn = function() {
          me.timer = null;
          ++i;

          if (i === 12 || !Ext.MessageBox.isVisible()) {
              Ext.MessageBox.hide();
              localStorage.setItem('isLoggedIn',true);
              window.destroy();
              Ext.widget('mainviewport');
              me.showToast('Successfully logged in', 'Done');
          }
          else {
              val = i / 11;

              Ext.MessageBox.updateProgress(val, Math.round(100 * val) + '% completed');
              me.timer = Ext.defer(fn, 500);
          }
      };

      me.timer = Ext.defer(fn, 500);
    },
    loginLogic: function (username, password) {

    },
    onRegisterClick: function () {
      Ext.widget('usersform');
    },
    
    onCancelClick: function () {

      let me = this;
      let view = me.getView();
      let form = view.lookupReference('login-form').getForm();
      form.reset();
    }

});
