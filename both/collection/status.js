export const Status = new Mongo.Collection('status');
let schema = new SimpleSchema({
    Date: {
        type: Date,
        label: 'End Date',
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
    status: {
        type: String,
        // label:register,

    },

});
Status.attachSchema(schema);