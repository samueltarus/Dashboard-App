
Ext.define('DashboardApp.view.auth.Login', {
    extend: 'Ext.window.Window',
    xtype: 'changePassword',
    requires: [
        // 'DashboardApp.view.login.LoginController',
        'Ext.form.Panel'
    ],
    controller: 'login',
    bodyPadding: 10,
    closable: false,
    autoShow: true,
	titleAlign: 'center',
	height: 400,
    width: 400,
    layout: 'center',
    title: 'New Password',

    items: {
        xtype: 'form',
        reference: 'form',
        title:"New Password",
        titleAlign: 'center',
        iconCls: 'fa fa-key fa-lg',
        bodyPadding: 15,
        defaults: {
            xtype: 'textfield',
            anchor: '100%',
            labelWidth: 60
        },

        items: [
            {
                xtype: 'textfield',
                name: 'password',
                vtype: 'alphanum',
                minLength: 8,
                inputType: 'password',
                fieldLabel: 'New Password',
                allowBlank: false
              } ,
            {
            xtype: 'textfield',
            name: 'password',
            vtype: 'alphanum',
            minLength: 8,
            inputType: 'password',
            fieldLabel: 'Confirm Password',
            allowBlank: false
          }
        ],
        buttons: [{
            text: 'Update',
            formBind: true,
            iconCls: 'fas fa-sign-in-alt',
            listeners: {
                click: 'onChangePasswordClick'

                }
        },{
            text: 'Reset',
            formBind: true,
            listeners: {
                click: 'onRestClick'

                }
        }]

    }
});
