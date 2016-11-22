import {Company} from '../../both/collection/company';

Meteor.publish('company',function () {
    let data =company.find();

    return data;
});
