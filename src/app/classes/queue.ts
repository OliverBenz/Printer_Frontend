export class Queue{
    private id: number;
    private filename: string;
    private name: string;
    private length: number;
    private weight: number;
    private price: number;
    private time: Date;
    private time_real: Date;

    constructor(obj){
        this.id = obj["id"];
        this.filename = obj["filename"];
        this.name = obj["name"];
        this.length = obj["length"];
        this.weight = obj["weight"];
        this.price = obj["price"];
        this.time = obj["time"];
    }

    public getId(){
        return this.id;
    }
    public getFilename(){
        return this.filename;
    }
    public getName(){
        return this.name;
    }
    public getLength(){
        return this.length;
    }
    public getWeight(){
        return this.weight;
    }
    public getPrice(){
        return this.price;
    }
    public getTime(){  
        return this.time;
    }
    public getTimeReal(){
        return this.time_real;
    }
    public setTimereal(time: Date){
        this.time_real = time;
    }
}