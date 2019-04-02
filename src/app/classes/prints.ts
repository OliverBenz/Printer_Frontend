export class Print{
    private sessionId: string;
    private amount: number;
    private date: string;
    private date_until: string;
    private filename: string;
    private name: string;
    private time: number;
    private length: number;
    private weight: number;
    private price: number;
    private notes: string;

    constructor(sessionId: string, amount: number, date: string, date_until: string, filename: string, name: string, time: number, length: number, weight: number, price: number, notes: string){
        this.sessionId = sessionId;
        this.amount = amount;
        this.date = date;
        this.date_until = date_until;
        this.filename = filename;
        this.name = name;
        this.time = time;
        this.length = length;
        this.weight = weight;
        this.price = price;
        this.notes = notes;
    }

    public getSessionId(){
        return this.sessionId;
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
    public getNotes(){
        return this.notes;
    }
    
}