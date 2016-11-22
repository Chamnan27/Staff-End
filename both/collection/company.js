export const Company = new Mongo.Collection('company');

let schema = new SimpleSchema({
    name: {
        type: String,
        label: 'Name'
    },
    register: {
        type: Date,
        label: 'Register Date',
        autoform: {
            type: 'bootstrap-datetimepicker',
            afFieldInput: {
                dateTimePickerOptions: {
                    format: 'MMM/DD/YYYY',
                    pickTime: false
                }
            }
        }
    },
    address: {
        type: String,
        label: 'Address'
    },
    telephone: {
        type: String,
        label: 'Telephone',
        optional: true
    },
    email: {
        type: String,
        label: 'Email'
    },
    website: {
        type: String,
        label: 'Website'
    }

});

Company.attachSchema(schema);
