Ext.define('DashboardApp.view.auth.LoginFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.loginformcontroller',
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


      Ext.MessageBox.show({
          title: 'Please wait',
          msg: 'Loading your Details...',
          progressText: 'Logging in...',
          width: 300,
          progress: true,
          closable: false,
          animateTarget: btn,
          // maskClickAction: me.getMaskClickAction()
      });

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
      // var store = Ext.getStore('users');
      // var matched = store.queryBy(function(userstore){
      //   return (record.get('username') == username && record.get('password') == password);
      // });

    },
    onRegisterClick: function () {
      console.log("register clicked");
    },

    getMaskClickAction: function() {
    return this.lookupReference('hideOnMaskClick').getValue() ? 'hide' : 'focus';
},

});
