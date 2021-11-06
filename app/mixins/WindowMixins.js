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
  authentication:function(){

  }
});
