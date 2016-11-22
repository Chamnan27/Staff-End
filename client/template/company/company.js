import {Company} from '../../../both/collection/company';

Template.company.helpers({
    data(){
        return Company.find();

    },
    company(){
        return Company.findOne();
    }
});

Template.company.events({
    'click .js-insert'(){
        FlowRouter.go('companyInsert');
    }

});

// Insert
Template.companyInsert.helpers({
    companyCollection() {
        return Company;
    }
});

Template.companyInsert.events({
    'click .js-back'(){
        FlowRouter.go('company');
    },
});

AutoForm.hooks({
    companyInsert: {
        onSuccess: function (formType, result) {
            // FlowRouter.go('contract');
            Bert.alert('បានបញ្ចូល ដោយជោគជ័យ', 'success', "growl-bottom-right");
        },
        onError: function (formType, error) {
            Bert.alert(error.message, 'danger', "growl-bottom-right");
        },
    }
});
