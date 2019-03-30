export class Print{
    private usrid: number;
    private amount: number;
    private date: string;
    private date_until: string;
    private filename: string;
    private name: string;
    private time: number;
    private length: number;
    private weight: number;
    private price: number;

    constructor(usrid: number, amount: number, date: string, date_until: string, filename: string, name: string, time: number, length: number, weight: number, price: number){
        this.usrid = usrid;
        this.amount = amount;
        this.date = date;
        this.date_until = date_until;
        this.filename = filename;
        this.name = name;
        this.time = time;
        this.length = length;
        this.weight = weight;
        this.price = price;
    }

    public getUsrid(){
        return this.usrid;
    }
    public getAmount(){
        return this.amount;
    }
    public getDate(){
        return this.date;
    }
    public getDateUntil(){
        return this.date_until;
    }
    public getFilename(){
        return this.filename;
    }
    public getName(){
        return this.name;
    }
    public getTime(){
        return this.time;
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
    
}