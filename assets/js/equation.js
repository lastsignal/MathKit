class Equation {

    constructor(strategies) {

        let defaultStrategies = {
            createOperand1Strategy: this.randomGenerator,
            createOperand2Strategy: this.randomGenerator,
            createOperatorStrategy: function() { return Math.random() > 0.5 ? "-" : "+"; }
        };

        this._settings = Object.assign({}, defaultStrategies, strategies);

        this.init();
    }

    init() {
        this.operand1 = this._settings.createOperand1Strategy();
        this.operand2 = this._settings.createOperand2Strategy();
        this.operator = this._settings.createOperatorStrategy();

        if (this.operator == "-" && this.operand1 < this.operand2) {
            // swap operands
            this.operand1 = [this.operand2, this.operand2 = this.operand1][0];
        }
    }

    randomGenerator() {
        return Math.floor(Math.random() * 120);
    }

    get answer() {
        return this._answer;
    }

    set answer(value) {
        this._answer = Number(value);
    }

    get computedAnswer() {
        switch (this.operator) {
            case "+":
                return this.operand1 + this.operand2;

            case "-":
                return this.operand1 - this.operand2;

            case "*":
                return this.operand1 * this.operand2;

            case "/":
                return this.operand1 / this.operand2;
        }
    }

    get isCorrect() {
        return this._answer === this.computedAnswer;
    }

    get fullEnteredEquation() {
        return `${this.operand1} ${this.operator} ${this.operand2} = ${this._answer}`
    }

    get fullCorrectEquation() {
        return `${this.operand1} ${this.operator} ${this.operand2} = ${this.computedAnswer}`
    }
}
