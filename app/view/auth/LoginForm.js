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
           allowBlank: false,
           fieldLabel: 'Username',
           name: 'username',
           vtype: 'alphanum',
           emptyText: 'username',
           msgTarget: 'under',
           maxLength: 25,
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
    {
      xtype: 'translation',
      iconCls:'fas fa-flag-usa',
      text: 'language'
    },
    // {
    //   xtype: 'tbfill'
    // },
    {
      text: 'Cancel',
      handler: 'onCancelClick',
      iconCls: 'fas fa-times'
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
      handler: 'onLoginClick',
      iconCls: 'fas fa-sign-in-alt',
    },
],

defaults: {
    anchor: '100%',
    labelWidth: 120
}
});
