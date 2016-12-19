import {Status} from '../../../both/collection/status';
import {Contract} from '../../../both/collection/contract';

Template.contract.events({
    'click .js-remove'(){
        let lub = this;
        alertify.confirm("Do you want to remove it?",
            function () {
                // alertify.success('Ok');
                Contract.remove({_id: lub._id}, function (error) {
                    if (!error) {
                        Bert.alert('Deleted', 'success', 'growl-top-right')
                    } else {
                        Bert.alert(error.message, 'danger', 'growl-top-right')
                    }
                });
            },
            function () {
                // alertify.error('Cancel');
            });
        // console.log(this);
        // console.log(this._id);


    },

    'click .js-insert'(){
        FlowRouter.go('contractInsert');

    },
    'click .js-update'(){
        console.log(this._id);
        // let id = this._id;
        FlowRouter.go('contractUpdate', {id: this._id});
    },
 /*   'click .js-status'(){
        // let id = this._id;
        FlowRouter.go('/statusUpdate/' + this._id);
    }*/

});


// Insert
Template.contractInsert.helpers({
    contractCollection() {
        return Contract;
    }
});

Template.contractInsert.events({
    'click .js-back'(){
        FlowRouter.go('contract');
    },
});
Template.statusUpdate.events({
    'click .js-back'(){
        FlowRouter.go('contract');
    },
});
Template.contractUpdate.helpers({

    contractCollection() {
        return Contract;
    },
});


Template.statusUpdate.helpers({
    data(){
        let id=FlowRouter.getParam("contractId");
        return Contract.findOne(id);
    },
    contractCollection() {
        return Contract;
    },
});
/*Template.statusAction.events({
    'click .js-status'(){

        console.log(this._id);
        // let id = this._id;
        FlowRouter.go('/statusUpdate/' + this._id);
    },
});*/

//contractInsert
AutoForm.hooks({
    contractInsert: {
        onSuccess: function (formType, result) {
            // FlowRouter.go('contract');
            Bert.alert('បានបញ្ចូល ដោយជោគជ័យ', 'success', "growl-bottom-right");
        },
        onError: function (formType, error) {
            Bert.alert(error.message, 'danger', "growl-bottom-right");
        },
    }
});
//statusAction
AutoForm.hooks({
    statusUpdate: {
        onSuccess: function (formType, result) {
            // FlowRouter.go('contract');
            Bert.alert('បានបញ្ចូល ដោយជោគជ័យ', 'success', "growl-bottom-right");
        },
        onError: function (formType, error) {
            Bert.alert(error.message, 'danger', "growl-bottom-right");
        },
    }
});