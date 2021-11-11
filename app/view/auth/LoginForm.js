Ext.define('DashboardApp.view.auth.LoginForm',{
    extend: 'Ext.window.Window',
    controller: 'loginformcontroller',
    xtype: 'loginform',
    requires: [
      'DashboardApp.view.auth.LoginFormController',
      'Ext.form.Panel'
  ],

    title: 'Login',
    frame: true,
    width: 520,
    closable:false,
    autoShow: true,
    iconCls: 'fa fa-key fa-lg',
    bodyPadding: 30,
    layout: {
      type: 'fit'
    },
    store: {
      type: 'users'
    },
    items: [
      {
        xtype: 'form',
        layout: 'form',
        bodyPadding: 10,
        defaultType: 'textfield',
        reference: 'login-form',

        items: [{
           fieldLabel: 'Username',
           name: 'username',
           vtype: 'alphanum',
           emptyText: 'username',
           msgTarget: 'under',
           maxLength: 25,
           allowBlank: false,
           minLength:5,
    }, {
           allowBlank: false,
           fieldLabel: 'Password',
           name: 'password',
           vtype: 'alphanum',
           maxLength: 15,
           minLength: 5,
           emptyText: 'password',
           inputType: 'password'
    }
    ]
      }
    ],

buttons: [
    // {
    //   xtype: 'translation',
    //   iconCls:'fas fa-flag-usa',
    //   text: 'language'
    // },
    // {
    //   xtype: 'tbfill'
    // },
    {
      text: 'Reset',
      handler: 'onCancelClick',
      iconCls: 'fas fa-times',
    },
    {
      text: 'Register',
      handler: 'onRegisterClick',
      iconCls: 'fas fa-user-plus'
     },
    {
      text: 'Login',
      formBind: true,
      iconCls: 'fas fa-sign-in-alt',
      listeners: {
        click: 'onLoginClick'
    },
      iconCls: 'fas fa-sign-in-alt',
    },
],

defaults: {
    anchor: '100%',
    labelWidth: 120
}
});
