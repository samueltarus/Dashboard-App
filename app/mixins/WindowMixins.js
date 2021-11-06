Ext.define('DashboardApp.mixins.WindowMixins',{

  showProgressBar: function (btn) {

    Ext.MessageBox.show({
        title: 'Please wait',
        msg: 'Loading your Details...',
        progressText: 'Logging in...',
        width: 300,
        progress: true,
        closable: false,
        animateTarget: btn,
    });
  },

  progressFun: function() {
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
  }
});
