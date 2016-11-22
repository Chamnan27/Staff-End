import {Company} from '../collection/company';

TabularTables = {};

TabularTables.Company = new Tabular.Table({
    name: Company,
    collection:Company,
    columns: [

        {data: "name", title: "ឈ្មោះ"},
        {data: "register", title: "Register Date"},
        {data: "address", title: "Address"},
        {data: "telephone", title: "Telephone"},
        {data: "email", title: "Email"},
        {data: "website", title: "Website"},
        {
            title: "Action",
            tmpl: Meteor.isClient && Template.companyAction
        }
    ]

});