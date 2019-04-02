export class History{
    private id: number;
    private filename: string;
    private name: string;
    private length: number;
    private weight: number;
    private price: number;
    private spoolId: number;
    private time: number;
    private time_real: number;
    private amount: number;
    private date: string;
    private date_until: string;
    private date_done: string;
    private notes: string;
    
    constructor(obj){
        this.id = obj["id"];
        this.filename = obj["filename"];
        this.name = obj["name"];
        this.length = obj["length"];
        this.weight = obj["weight"];
        this.price = obj["price"];
        this.spoolId = obj["spoolId"]
        this.time = obj["time"];
        this.time_real = obj["time_real"];
        this.amount = obj["amount"];
        this.date = obj["date"];
        this.date_until = obj["date_until"];
        this.date_done = obj["date_done"];
        this.notes = obj["notes"];
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
    public getSpoolId(){
        return this.spoolId;
    }
    public getTime(){
        return this.time;
    }
    public getTimeReal(){
        return this.time_real;
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
    public getDateDone(){
        return this.date_done;
    }
    public getNotes(){
        return this.notes;
    }

}