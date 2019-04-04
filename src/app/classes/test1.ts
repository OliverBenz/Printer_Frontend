export class Print1{
    private filename: string;
    private name: string;
    private time: number;
    private timeReal: number;
    private length: number;
    private weight: number;
    private price: number;

    constructor(filename, name, time, timeReal, length, weight, price){
        this.filename = filename;
        this.name = name;
        this.time = time;
        this.timeReal = timeReal;
        this.length = length;
        this.weight = weight;
        this.price = price;
    }

}