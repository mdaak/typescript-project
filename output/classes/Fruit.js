export class Fruits {
    constructor(name, color, count) {
        this.fName = name;
        this.fColor = color;
        this.fCount = count;
    }
    fruit() {
        return (`ther ${this.fCount} ${this.fName} is ${this.fColor} color`);
    }
}
