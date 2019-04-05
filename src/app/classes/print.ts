export class Print{
    private pId: number;
    private filename: string;
    private name: string;
    private time: number;
    private timeReal: number;
    private length: number;
    private weight: number;
    private price: number;

    constructor(id, filename, name, time, length, weight, price){
        this.pId = id;
        this.filename = filename;
        this.name = name;
        this.time = time;
        this.length = length;
        this.weight = weight;
        this.price = price;
    }
    public getId(): number{
        return this.pId;
    }
    public setId(id: number): void{
        this.pId = id;
    }

    public getFilename(): string{
        return this.filename;
    }

    public setFilename(filename: string): void{
        this.filename = filename;
    }

    public getName(): string{
        return this.name;
    }

    public setName(name: string): void{
        this.name = name;
    }

    public getTime(): number{
        return this.time;
    }

    public setTime(time: number): void{
        this.time = time;
    }

    public getTimeReal(): number{
        return this.timeReal;
    }

    public setTimeReal(timeReal: number): void{
        this.timeReal = timeReal;
    }

    public getLength(): number{
        return this.length;
    }

    public setLength(length: number): void{
        this.length = length;
    }

    public getWeight(): number{
        return this.weight;
    }

    public setWeight(weight: number): void{
        this.weight = weight;
    }

    public getPrice(): number{
        return this.price;
    }

    public setPrice(price: number): void{
        this.price = price;
    }
}