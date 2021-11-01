Ext.define('DashboardApp.view.locale.Translation', {
    extend: 'Ext.button.Split',
    xtype: 'translation',
    menu: {
      xtype: 'menu',
      items: [
        {
          xtype: 'menuitem',
          text: 'English'
        },
        {
          xtype: 'menuitem',
          text: 'Kiswahili'
        }
      ]
    }
});
