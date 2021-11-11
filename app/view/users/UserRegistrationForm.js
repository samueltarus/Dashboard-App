Ext.define('DashboardApp.view.users.UserRegistrationForm', {
    extend: 'Ext.window.Window',
    xtype: 'usersform',
    controller: 'userregistrationformcontroller',

    title: 'USER REGISTRATION FORM',
    bodyPadding: "5 5 0",
    width: 600,
    autoShow: true,

    fieldDefaults: {
        labelAlign: 'top',
        msgTarget: 'side'
    },

    defaults: {
        border: false,
        xtype: 'panel',
        flex: 1,
        layout: 'anchor'
    },
    jsonSubmit: true,

    layout: 'hbox',

    items: [{
      reference: 'add-form',
        items: [{
            xtype: 'textfield',
            fieldLabel: 'First Name',
            anchor: '-5',
            minLength: 5,
            name: 'first'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Username',
            anchor: '-5',
            minLength: 5,
            name: 'username',
            vtype: 'alphanum',
            maxLength: 8,
        },
        {
          xtype: 'textfield',
          fieldLabel: 'password',
          anchor: '-5',
          name: 'password',
          vtype: 'customPass'
        }
      ]
    }, {
        items: [{
            xtype: 'textfield',
            fieldLabel: 'Last Name',
            anchor: '100%',
            minLength: 5,
            name: 'last'
        }, {
            xtype: 'textfield',
            fieldLabel: 'Email',
            anchor: '100%',
            name: 'email',
            vtype: 'email'
        },
        {
          xtype: 'textfield',
          fieldLabel: 're-type password',
          anchor: '-5',
          vtype: 'password',
          name: 'repassword',
        }
      ]
    }],

    buttons: ['->', {
        text: 'Save',
        handler: 'onSaveClicked'
    }, {
        text: 'Cancel',
        handler: 'onCancelClick'
    }]
});
