theApp.service('programService', function() {

    let programs = [{
            id: 'add-by-9',
            title: 'Add Simple Numbers to 9',
            description: 'Add numbers 1-10 to 9',
            strategies: {
                createOperand1Strategy: function() { return Math.floor(Math.random() * 10); },
                createOperand2Strategy: function() { return 9; },
                createOperatorStrategy: function() { return '+'; }
            }
        },
        {
            id: 'add-by-8',
            title: 'Add Simple Numbers to 8',
            description: 'Add numbers 1-10 to 8',
            strategies: {
                createOperand1Strategy: function() { return Math.floor(Math.random() * 10); },
                createOperand2Strategy: function() { return 8; },
                createOperatorStrategy: function() { return '+'; }
            }
        }
    ];

    return {
        getById: function(programId) {
            return programs.find(function(p) { return p.id == programId; });
        },

        getList: function() {
            return programs;
        }
    };
});