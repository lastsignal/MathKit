class Counters {
    constructor() {
        this.passed = 0;
        this.failed = 0;
    }

    get total() {
        return this.passed + this.failed;
    }

    count(value) {
        value ? this.passed++ : this.failed++;
    }
}
