theApp.service('courseService', function() {

    let courses = [{
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
        },
        {
            id: 'add-by-10',
            title: 'Add by 10',
            description: 'Add single-digit numbers to 10',
            strategies: {
                createOperand1Strategy: function() { return Math.floor(Math.random() * 10); },
                createOperand2Strategy: function() { return 10; },
                createOperatorStrategy: function() { return '+'; }
            }
        },
        {
            id: 'subtract-10-from-teens',
            title: 'Subtract by 10',
            description: 'Subtract 10 from teen numbers',
            strategies: {
                createOperand1Strategy: function() { return Math.floor(Math.random() * 10) + 10; },
                createOperand2Strategy: function() { return 10; },
                createOperatorStrategy: function() { return '-'; }
            }
        },
        {
            id: 'add-one-digit-twins',
            title: 'Add one-digit twins',
            description: 'Add one-digit number to itself',
            strategies: {
                createOperand1Strategy: function() { this.operand = Math.floor(Math.random() * 10); return this.operand; },
                createOperand2Strategy: function() { return this.operand; },
                createOperatorStrategy: function() { return '+'; }
            }
        },
    ];

    return {
        getById: function(courseId) {
            return courses.find(function(c) { return c.id == courseId; });
        },

        getList: function() {
            return courses;
        }
    };
});