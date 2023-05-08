theApp.service('courseService', function () {

    let courses = [{
        id: 'add-by-9',
        title: 'Add Simple Numbers to 9',
        description: 'Add numbers 1-10 to 9',
        tags: ["Addition"],
        strategies: {
            createOperand1Strategy: function () { return Math.floor(Math.random() * 10); },
            createOperand2Strategy: function () { return 9; },
            createOperatorStrategy: function () { return '+'; }
        }
    },
    {
        id: 'add-by-8',
        title: 'Add Simple Numbers to 8',
        description: 'Add numbers 1-10 to 8',
        tags: ["Addition"],
        strategies: {
            createOperand1Strategy: function () { return Math.floor(Math.random() * 10); },
            createOperand2Strategy: function () { return 8; },
            createOperatorStrategy: function () { return '+'; }
        }
    },
    {
        id: 'add-by-10',
        title: 'Add by 10',
        tags: ["Addition"],
        description: 'Add single-digit numbers to 10',
        strategies: {
            createOperand1Strategy: function () { return Math.floor(Math.random() * 10); },
            createOperand2Strategy: function () { return 10; },
            createOperatorStrategy: function () { return '+'; }
        }
    },
    {
        id: 'subtract-10-from-teens',
        title: 'Subtract by 10',
        description: 'Subtract 10 from teen numbers',
        tags: ["Subtraction"],
        strategies: {
            createOperand1Strategy: function () { return Math.floor(Math.random() * 10) + 10; },
            createOperand2Strategy: function () { return 10; },
            createOperatorStrategy: function () { return '-'; }
        }
    },
    {
        id: 'add-one-digit-twins',
        title: 'Add one-digit twins',
        description: 'Add one-digit number to itself',
        tags: ["Addition"],
        strategies: {
            createOperand1Strategy: function () { this.operand = Math.floor(Math.random() * 10); return this.operand; },
            createOperand2Strategy: function () { return this.operand; },
            createOperatorStrategy: function () { return '+'; }
        }
    },
    {
        id: 'subtract-teen-by-9',
        title: 'Subtract Teen Numbers by 9',
        description: 'Subtract numbers 10-20 to 9',
        tags: ["Subtraction"],
        strategies: {
            createOperand1Strategy: function () { return Math.floor(Math.random() * 10) + 10; },
            createOperand2Strategy: function () { return 9; },
            createOperatorStrategy: function () { return '-'; }
        }
    },
    {
        id: 'ten-subtract-by-1d',
        title: '10 Subtract 1 digit number',
        description: 'Subtract single digit numbers from 10',
        tags: ["Subtraction"],
        strategies: {
            createOperand1Strategy: function () { return 10; },
            createOperand2Strategy: function () { return Math.floor(Math.random() * 10); },
            createOperatorStrategy: function () { return '-'; }
        }
    },
    {
        id: 'multiplication-by-1',
        title: '0-12 multiplication by 1',
        description: 'Multiply numbers one to twelve by one',
        tags: ["Multiplication"],
        strategies: {
            createOperand1Strategy: function () { return 1; },
            createOperand2Strategy: function () { return Math.floor(Math.random() * 13); },
            createOperatorStrategy: function () { return '*'; }
        }
    },
    {
        id: 'multiplication-by-2',
        title: '0-12 multiplication by 2',
        description: 'Multiply numbers one to twelve by two',
        tags: ["Multiplication"],
        strategies: {
            createOperand1Strategy: function () { return 2; },
            createOperand2Strategy: function () { return Math.floor(Math.random() * 13); },
            createOperatorStrategy: function () { return '*'; }
        }
    },
    {
        id: 'multiplication-by-3',
        title: '0-12 multiplication by 3',
        description: 'Multiply numbers one to twelve by three',
        tags: ["Multiplication"],
        strategies: {
            createOperand1Strategy: function () { return 3; },
            createOperand2Strategy: function () { return Math.floor(Math.random() * 13); },
            createOperatorStrategy: function () { return '*'; }
        }
    },
    {
        id: 'multiplication-by-4',
        title: '0-12 multiplication by 4',
        description: 'Multiply numbers one to twelve by four',
        tags: ["Multiplication"],
        strategies: {
            createOperand1Strategy: function () { return 4; },
            createOperand2Strategy: function () { return Math.floor(Math.random() * 13); },
            createOperatorStrategy: function () { return '*'; }
        }
    },
    {
        id: 'multiplication-by-5',
        title: '0-12 multiplication by 5',
        description: 'Multiply numbers one to twelve by five',
        tags: ["Multiplication"],
        strategies: {
            createOperand1Strategy: function () { return 5; },
            createOperand2Strategy: function () { return Math.floor(Math.random() * 13); },
            createOperatorStrategy: function () { return '*'; }
        }
    },
    {
        id: 'multiplication-by-6',
        title: '0-12 multiplication by 6',
        description: 'Multiply numbers one to twelve by six',
        tags: ["Multiplication"],
        strategies: {
            createOperand1Strategy: function () { return 6; },
            createOperand2Strategy: function () { return Math.floor(Math.random() * 13); },
            createOperatorStrategy: function () { return '*'; }
        }
    },
    {
        id: 'multiplication-by-7',
        title: '0-12 multiplication by 7',
        description: 'Multiply numbers one to twelve by seven',
        tags: ["Multiplication"],
        strategies: {
            createOperand1Strategy: function () { return 7; },
            createOperand2Strategy: function () { return Math.floor(Math.random() * 13); },
            createOperatorStrategy: function () { return '*'; }
        }
    },
    {
        id: 'multiplication-by-8',
        title: '0-12 multiplication by 8',
        description: 'Multiply numbers one to twelve by eight',
        tags: ["Multiplication"],
        strategies: {
            createOperand1Strategy: function () { return 8; },
            createOperand2Strategy: function () { return Math.floor(Math.random() * 13); },
            createOperatorStrategy: function () { return '*'; }
        }
    },
    {
        id: 'multiplication-by-9',
        title: '0-12 multiplication by 9',
        description: 'Multiply numbers one to twelve by nine',
        tags: ["Multiplication"],
        strategies: {
            createOperand1Strategy: function () { return 9; },
            createOperand2Strategy: function () { return Math.floor(Math.random() * 13); },
            createOperatorStrategy: function () { return '*'; }
        }
    },
    {
        id: 'multiplication-by-10',
        title: '0-12 multiplication by 10',
        description: 'Multiply numbers one to twelve by ten',
        tags: ["Multiplication"],
        strategies: {
            createOperand1Strategy: function () { return 10; },
            createOperand2Strategy: function () { return Math.floor(Math.random() * 13); },
            createOperatorStrategy: function () { return '*'; }
        }
    },
    {
        id: 'multiplication-by-11',
        title: '0-12 multiplication by 11',
        description: 'Multiply numbers one to twelve by eleven',
        tags: ["Multiplication"],
        strategies: {
            createOperand1Strategy: function () { return 11; },
            createOperand2Strategy: function () { return Math.floor(Math.random() * 13); },
            createOperatorStrategy: function () { return '*'; }
        }
    },
    {
        id: 'multiplication-by-12',
        title: '0-12 multiplication by 12',
        description: 'Multiply numbers one to twelve by twelve',
        tags: ["Multiplication"],
        strategies: {
            createOperand1Strategy: function () { return 12; },
            createOperand2Strategy: function () { return Math.floor(Math.random() * 13); },
            createOperatorStrategy: function () { return '*'; }
        }
    },
    {
        id: 'multiplication-random',
        title: '0-12 by 0-12 random multiplication',
        description: 'Multiply zero to twelve numbers by zero to twelve',
        tags: ["Multiplication"],
        strategies: {
            createOperand1Strategy: function () { return Math.floor(Math.random() * 13);; },
            createOperand2Strategy: function () { return Math.floor(Math.random() * 13); },
            createOperatorStrategy: function () { return '*'; }
        }
    },
    {
        id: 'square-zero-to-twelve',
        title: 'Square of 0-12 numbers',
        description: 'Square of numbers between 0 and twelve',
        tags: ["Multiplication"],
        strategies: {
            createOperand1Strategy: function () { this.operand = Math.floor(Math.random() * 13); return this.operand; },
            createOperand2Strategy: function () { return this.operand; },
            createOperatorStrategy: function () { return '*'; }
        }
    },
    {
        id: 'division-by-2',
        title: 'simple division by 2',
        tags: ["Division"],
        description: 'Divide multiplies of 2 by 2',
        strategies: {
            createOperand1Strategy: function () { return Math.round(Math.random() * 13) * 2; },
            createOperand2Strategy: function () { return 2; },
            createOperatorStrategy: function () { return '/'; }
        }
    },
    {
        id: 'division-by-3',
        title: 'simple division by 3',
        description: 'Divide multiplies of 3 by 3 ',
        tags: ["Division"],
        strategies: {
            createOperand1Strategy: function () { return Math.round(Math.random() * 13) * 3; },
            createOperand2Strategy: function () { return 3; },
            createOperatorStrategy: function () { return '/'; }
        }
    },
    {
        id: 'division-by-4',
        title: 'simple division by 4',
        description: 'Divide multiplies of 4 by 4 ',
        tags: ["Division"],
        strategies: {
            createOperand1Strategy: function () { return Math.round(Math.random() * 13) * 4; },
            createOperand2Strategy: function () { return 4; },
            createOperatorStrategy: function () { return '/'; }
        }
    },
    {
        id: 'division-by-5',
        title: 'simple division by 5',
        description: 'Divide multiplies of 5 by 5',
        tags: ["Division"],
        strategies: {
            createOperand1Strategy: function () { return Math.round(Math.random() * 13) * 5; },
            createOperand2Strategy: function () { return 5; },
            createOperatorStrategy: function () { return '/'; }
        }
    },
    {
        id: 'division-by-6',
        title: 'simple division by 6',
        description: 'Divide multiplies of 6 by 6',
        tags: ["Division"],
        strategies: {
            createOperand1Strategy: function () { return Math.round(Math.random() * 13) * 6; },
            createOperand2Strategy: function () { return 6; },
            createOperatorStrategy: function () { return '/'; }
        }
    },
    {
        id: 'division-by-7',
        title: 'simple division by 7',
        description: 'Divide multiplies of 7 by 7',
        tags: ["Division"],
        strategies: {
            createOperand1Strategy: function () { return Math.round(Math.random() * 13) * 7; },
            createOperand2Strategy: function () { return 7; },
            createOperatorStrategy: function () { return '/'; }
        }
    },
    {
        id: 'division-by-8',
        title: 'simple division by 8',
        description: 'Divide multiplies of 8 by 8',
        tags: ["Division"],
        strategies: {
            createOperand1Strategy: function () { return Math.round(Math.random() * 13) * 8; },
            createOperand2Strategy: function () { return 8; },
            createOperatorStrategy: function () { return '/'; }
        }
    },
    {
        id: 'division-by-9',
        title: 'simple division by 9',
        description: 'Divide multiplies of 9 by 9',
        tags: ["Division"],
        strategies: {
            createOperand1Strategy: function () { return Math.round(Math.random() * 13) * 9; },
            createOperand2Strategy: function () { return 9; },
            createOperatorStrategy: function () { return '/'; }
        }
    },
    {
        id: 'division-by-10',
        title: 'simple division by 10',
        description: 'Divide multiplies of 10 by 10',
        tags: ["Division"],
        strategies: {
            createOperand1Strategy: function () { return Math.round(Math.random() * 13) * 10; },
            createOperand2Strategy: function () { return 10; },
            createOperatorStrategy: function () { return '/'; }
        }
    },
    {
        id: 'division-by-11',
        title: 'simple division by 11',
        description: 'Divide multiplies of 11 by 11',
        tags: ["Division"],
        strategies: {
            createOperand1Strategy: function () { return Math.round(Math.random() * 13) * 11; },
            createOperand2Strategy: function () { return 11; },
            createOperatorStrategy: function () { return '/'; }
        }
    },
    {
        id: 'division-by-12',
        title: 'simple division by 12',
        description: 'Divide multiplies of 12 by 12',
        tags: ["Division"],
        strategies: {
            createOperand1Strategy: function () { return Math.round(Math.random() * 13) * 12; },
            createOperand2Strategy: function () { return 12; },
            createOperatorStrategy: function () { return '/'; }
        }
    },
    {
        id: 'division-random',
        title: 'simple division - random',
        description: 'Divide random numbers by their divisors',
        tags: ["Division"],
        strategies: {
            createOperand1Strategy: function () {
                this.operand = Math.round(Math.random() * 12);
                return Math.round(Math.random() * 12) * this.operand;
            },
            createOperand2Strategy: function () {
                if (this.operand == 0)
                    return Math.round(Math.random() * 11) + 1;
                return this.operand;
            },
            createOperatorStrategy: function () { return '/'; }
        }
    },
    {
        id: 'one-digit-multiplication-by-two-digit',
        title: 'one digit by 0-99 numbers',
        description: 'Multiply one digit numbers by two digit numbers',
        tags: ['Multiplication'],
        strategies: {
            createOperand1Strategy: function () { return Math.floor(Math.random() * 100); },
            createOperand2Strategy: function () { return Math.floor(Math.random() * 11); },
            createOperatorStrategy: function () { return '*'; }
        }
    },
    {
        id: 'random-operation-twins',
        title: 'random operaion on the same number',
        description: 'Random operation on a number between 0 and 12 by itself',
        tags: ['Random'],
        strategies: {
            createOperand1Strategy: function () { this.operand = Math.floor(Math.random() * 13); return this.operand; },
            createOperand2Strategy: function () { return this.operand; },
            createOperatorStrategy: function () { return ['+', '-', '*', '/'][Math.floor(Math.random() * 4)]; }
        }
    },
    {
        id: 'random-operation-random-number',
        title: 'random operaion on random number',
        description: 'Random operation (except division) on two numbers between 0 and 12',
        tags: ['Random'],
        strategies: {
            createOperand1Strategy: function () { this.operand = Math.floor(Math.random() * 13); return this.operand; },
            createOperand2Strategy: function () { return this.operand; },
            createOperatorStrategy: function () { return ['+', '-', '*', '/'][Math.floor(Math.random() * 4)]; }
        }
    },
    ];

    return {
        getById: function (courseId) {
            return courses.find(function (c) { return c.id == courseId; });
        },

        getList: function () {
            return courses;
        }
    };
});
