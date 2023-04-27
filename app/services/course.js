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
        {
            id: 'subtract-teen-by-9',
            title: 'Subtract Teen Numbers by 9',
            description: 'Subtract numbers 10-20 to 9',
            strategies: {
                createOperand1Strategy: function() { return Math.floor(Math.random() * 10) + 10; },
                createOperand2Strategy: function() { return 9; },
                createOperatorStrategy: function() { return '-'; }
            }
        },
        {
            id: 'ten-subtract-by-1d',
            title: '10 Subtract 1 digit number',
            description: 'Subtract single digit numbers from 10',
            strategies: {
                createOperand1Strategy: function() { return 10; },
                createOperand2Strategy: function() { return Math.floor(Math.random() * 10); },
                createOperatorStrategy: function() { return '-'; }
            }
        },
        {
            id: 'multiplication-by-1',
            title: '1 digit multiplication by 1',
            description: 'Multiply one digit numbers by one',
            strategies: {
                createOperand1Strategy: function() { return 1; },
                createOperand2Strategy: function() { return Math.floor(Math.random() * 10); },
                createOperatorStrategy: function() { return '*'; }
            }
        },
        {
            id: 'multiplication-by-2',
            title: '1 digit multiplication by 2',
            description: 'Multiply one digit numbers by two',
            strategies: {
                createOperand1Strategy: function() { return 2; },
                createOperand2Strategy: function() { return Math.floor(Math.random() * 10); },
                createOperatorStrategy: function() { return '*'; }
            }
        },
        {
            id: 'multiplication-by-3',
            title: '1 digit multiplication by 3',
            description: 'Multiply one digit numbers by three',
            strategies: {
                createOperand1Strategy: function() { return 3; },
                createOperand2Strategy: function() { return Math.floor(Math.random() * 10); },
                createOperatorStrategy: function() { return '*'; }
            }
        },
        {
            id: 'multiplication-by-4',
            title: '1 digit multiplication by 4',
            description: 'Multiply one digit numbers by four',
            strategies: {
                createOperand1Strategy: function() { return 4; },
                createOperand2Strategy: function() { return Math.floor(Math.random() * 10); },
                createOperatorStrategy: function() { return '*'; }
            }
        },
        {
            id: 'multiplication-by-5',
            title: '1 digit multiplication by 5',
            description: 'Multiply one digit numbers by five',
            strategies: {
                createOperand1Strategy: function() { return 5; },
                createOperand2Strategy: function() { return Math.floor(Math.random() * 10); },
                createOperatorStrategy: function() { return '*'; }
            }
        },
        {
            id: 'multiplication-by-6',
            title: '1 digit multiplication by 6',
            description: 'Multiply one digit numbers by six',
            strategies: {
                createOperand1Strategy: function() { return 6; },
                createOperand2Strategy: function() { return Math.floor(Math.random() * 10); },
                createOperatorStrategy: function() { return '*'; }
            }
        },
        {
            id: 'multiplication-by-7',
            title: '1 digit multiplication by 7',
            description: 'Multiply one digit numbers by seven',
            strategies: {
                createOperand1Strategy: function() { return 7; },
                createOperand2Strategy: function() { return Math.floor(Math.random() * 10); },
                createOperatorStrategy: function() { return '*'; }
            }
        },
        {
            id: 'multiplication-by-8',
            title: '1 digit multiplication by 8',
            description: 'Multiply one digit numbers by eight',
            strategies: {
                createOperand1Strategy: function() { return 8; },
                createOperand2Strategy: function() { return Math.floor(Math.random() * 10); },
                createOperatorStrategy: function() { return '*'; }
            }
        },
        {
            id: 'multiplication-by-9',
            title: '1 digit multiplication by 9',
            description: 'Multiply one digit numbers by nine',
            strategies: {
                createOperand1Strategy: function() { return 9; },
                createOperand2Strategy: function() { return Math.floor(Math.random() * 10); },
                createOperatorStrategy: function() { return '*'; }
            }
        },
        {
            id: 'division-by-2',
            title: 'simple division by 2',
            description: 'Divide multipies of 2 by 2',
            strategies: {
                createOperand1Strategy: function() { return Math.round(Math.random() * 12 ) * 2; },
                createOperand2Strategy: function() { return 2; },
                createOperatorStrategy: function() { return '/'; }
            }
        },
        {
            id: 'division-by-3',
            title: 'simple division by 3',
            description: 'Divide multipies of 3 by 3 ',
            strategies: {
                createOperand1Strategy: function() { return Math.round(Math.random() * 12 ) * 3; },
                createOperand2Strategy: function() { return 3; },
                createOperatorStrategy: function() { return '/'; }
            }
        },
        {
            id: 'division-by-4',
            title: 'simple division by 4',
            description: 'Divide multipies of 4 by 4 ',
            strategies: {
                createOperand1Strategy: function() { return Math.round(Math.random() * 12 ) * 4; },
                createOperand2Strategy: function() { return 4; },
                createOperatorStrategy: function() { return '/'; }
            }
        },
        {
            id: 'division-by-5',
            title: 'simple division by 5',
            description: 'Divide multipies of 5 by 5',
            strategies: {
                createOperand1Strategy: function() { return Math.round(Math.random() * 12 ) * 5; },
                createOperand2Strategy: function() { return 5; },
                createOperatorStrategy: function() { return '/'; }
            }
        },
        {
            id: 'division-by-6',
            title: 'simple division by 6',
            description: 'Divide multipies of 6 by 6',
            strategies: {
                createOperand1Strategy: function() { return Math.round(Math.random() * 12 ) * 6; },
                createOperand2Strategy: function() { return 6; },
                createOperatorStrategy: function() { return '/'; }
            }
        },
        {
            id: 'division-by-7',
            title: 'simple division by 7',
            description: 'Divide multipies of 7 by 7',
            strategies: {
                createOperand1Strategy: function() { return Math.round(Math.random() * 12 ) * 7; },
                createOperand2Strategy: function() { return 7; },
                createOperatorStrategy: function() { return '/'; }
            }
        },
        {
            id: 'division-by-8',
            title: 'simple division by 8',
            description: 'Divide multipies of 8 by 8',
            strategies: {
                createOperand1Strategy: function() { return Math.round(Math.random() * 12 ) * 8; },
                createOperand2Strategy: function() { return 8; },
                createOperatorStrategy: function() { return '/'; }
            }
        },
        {
            id: 'division-by-9',
            title: 'simple division by 9',
            description: 'Divide multipies of 9 by 9',
            strategies: {
                createOperand1Strategy: function() { return Math.round(Math.random() * 12 ) * 9; },
                createOperand2Strategy: function() { return 9; },
                createOperatorStrategy: function() { return '/'; }
            }
        },
        {
            id: 'division-by-10',
            title: 'simple division by 10',
            description: 'Divide multipies of 10 by 10',
            strategies: {
                createOperand1Strategy: function() { return Math.round(Math.random() * 12 ) * 10; },
                createOperand2Strategy: function() { return 10; },
                createOperatorStrategy: function() { return '/'; }
            }
        },
        {
            id: 'division-by-11',
            title: 'simple division by 11',
            description: 'Divide multipies of 11 by 11',
            strategies: {
                createOperand1Strategy: function() { return Math.round(Math.random() * 12 ) * 11; },
                createOperand2Strategy: function() { return 11; },
                createOperatorStrategy: function() { return '/'; }
            }
        },
        {
            id: 'division-by-12',
            title: 'simple division by 12',
            description: 'Divide multipies of 12 by 12',
            strategies: {
                createOperand1Strategy: function() { return Math.round(Math.random() * 12 ) * 12; },
                createOperand2Strategy: function() { return 12; },
                createOperatorStrategy: function() { return '/'; }
            }
        },
        {
            id: 'division-random',
            title: 'simple division - random',
            description: 'Divide random numbers by their divisors',
            strategies: {
                createOperand1Strategy: function() { 
                    this.operand = Math.round(Math.random() * 12);
                    return Math.round(Math.random() * 12 ) * this.operand; 
                },
                createOperand2Strategy: function() { 
                    if(this.operand == 0)
                        return Math.round(Math.random() * 11) + 1;
                    return this.operand; 
                },
                createOperatorStrategy: function() { return '/'; }
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
