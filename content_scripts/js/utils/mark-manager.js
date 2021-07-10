class MarkManager {
    constructor() {
        this.sum = 0;
        this.count = 0;
    }

    addMark(number, multiplier) {
        this.sum += number;
        this.count += multiplier;
    }

    getAvg() {
        return this.sum / this.count;
    }
}
