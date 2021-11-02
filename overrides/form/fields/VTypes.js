Ext.define('DashboardApp.form.fields.VTypes',{
  override: 'Ext.form.field.VTypes',
  password: function(val, field) {
    var pwd;

    if (field.initialPassField) {
        pwd = field.up('form').down('#' + field.initialPassField);

        return (val === pwd.getValue());
    }

    return true;
},

passwordText: 'Passwords do not match',
customPass: function(val, field) {
    return /^((?=.*\d)(?=.*[a-z])(?=.*[AZ])(?=.*[@#$%]).{4,8})/.test(val);
},
customPassText: `Password must be at least 4 characters long and maximum of 8 alphanumeric with atleast one special character.`
});
