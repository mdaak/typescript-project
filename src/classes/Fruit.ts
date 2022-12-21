export class Fruits{
    readonly fName:string;
    readonly fColor:string;
    private fCount:number
    constructor(
        name:string,
        color:string,
        count:number
    ){
        this.fName=name;
        this.fColor=color;
        this.fCount=count;
    }
    fruit(){
        return(`ther ${this.fCount} ${this.fName} is ${this.fColor} color`)
    }
}