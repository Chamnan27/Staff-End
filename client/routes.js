FlowRouter.route('/', {
    name: 'home',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'home'});
    }
    });
FlowRouter.route('/about', {
    name: 'about',
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'about'});
    }
});
FlowRouter.route('/contract', {
    name: 'contract',
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'contract'});
    }
});
FlowRouter.route('/contractInsert', {
    name: 'contractInsert',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'contractInsert'});
    }
});

FlowRouter.route('/staff', {
    name: 'staff',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'staff'});
    }
});

FlowRouter.route('/staffInsert', {
    name: 'staffInsert',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'staffInsert'});
    }
});

FlowRouter.route('/staffUpdate/:id', {
    name: 'staffUpdate',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'staffUpdate'});
    },
});
// Item
FlowRouter.route('/item', {
    name: 'item',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'item'});
    }
});
//Insert
FlowRouter.route('/itemInsert', {
    name: 'itemInsert',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'itemInsert'});
    }
});
//Update
FlowRouter.route('/itemUpdate/:id', {
    name: 'itemUpdate',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'itemUpdate'});
    }
});

// Manager
FlowRouter.route('/manager', {
    name: 'manager',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'manager'});
    }
});
//Insert
FlowRouter.route('/managerInsert', {
    name: 'managerInsert',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'managerInsert'});
    }
});
//Update
FlowRouter.route('/managerUpdate/:id', {
    name: 'managerUpdate',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'managerUpdate'});
    }
});

// Staff list
FlowRouter.route('/staffList', {
    name: 'staffList',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'staffList'});
    }
});
FlowRouter.route('/staffListReport', {
    name: 'staffListReport',
    action: function(params, queryParams) {
        BlazeLayout.render('staffListReport', {content: 'staffListReport'});
    }
});

// Contract list
FlowRouter.route('/contractList', {
    name: 'contractList',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'contractList'});
    }
});
FlowRouter.route('/contractUpdate/:id', {
    name: 'contractUpdate',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'contractUpdate'});
    },
});
FlowRouter.route('/contractListReport', {
    name: 'contractListReport',
    action: function(params, queryParams) {
        BlazeLayout.render('contractLayout', {content: 'contractListReport'});
    }
});
FlowRouter.route('/company', {
    name: 'company',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'company'});
    }
});
FlowRouter.route('/companyInsert', {
    name: 'companyInsert',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'companyInsert'});
    }
});
//Update
FlowRouter.route('/companyUpdate/:id', {
    name:  'companyUpdate',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'companyUpdate'});
    }
});
// FlowRouter.route('/company', {
//     name:  'company',
//     action: function(params, queryParams) {
//         BlazeLayout.render('mainOut', {content: 'company'});
//     }
// });
FlowRouter.route('/statusUpdate/:contractId', {
    name: 'statusUpdate',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'statusUpdate'});
    },
});