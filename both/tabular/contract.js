import {Contract} from '../collection/contract';
import moment from 'moment';

TabularTables = {};

TabularTables.Contract = new Tabular.Table({
    name: "Contract",
    collection: Contract,
    columns: [
        {data: "staffId", title: "ID"},
        // {data: "startDate", title: "From Date"},
        {
            data: "startDate",
            title: "Start Date",
            render: function (val, type, doc) {
                return moment(val).format('DD' / 'MM' / 'YYYY');

            }
        },
        // {data: "endDate", title: "To Date"},
        {
            data: "endDate",
            title: "End Date",
            render: function (val, type, doc) {
                return moment(val).format('DD' / 'MM' / 'YYYY');

            }
        },
        {data: "type", title: "Type"},
        {data: "position", title: "Position"},
        {data: "salary", title: "Salary"},

        {
            data: "status",
            title: "Status",
            render: function (val, type, doc) {
                console.log(val);
                console.log(doc._id);

                return '<a class="btn btn-default js-status" href="/statusUpdate/'+doc._id+'">'+val+'</a>';

            }
           /* title: "Status",
            tmpl: Meteor.isClient && Template.statusAction*/
        },
        {
            title: "Action",
            tmpl: Meteor.isClient && Template.contractAction
        }
    ]

});