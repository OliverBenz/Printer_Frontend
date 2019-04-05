import { Print } from './print';

export class Job extends Print{
    private id: number;
    private user: string;
    private spoolid: number;
    private amount: number;
    private status: string;
    private date: string;
    private dateUntil: string;
    private dateDone: string;
    private notes: string;

    constructor(pId, amount, date, notes, filename, name, time, length, weight, price){
        super(pId, filename, name, time, length, weight, price);
        this.amount = amount;
        this.date = date;
        this.notes = notes;
    }
    public getId(): number{
        return this.id;
    }
    public setId(id: number): void{
        this.id = id;
    }

    public getUser(): string{
        return this.user;
    }

    public setUser(user: string): void{
        this.user = user;
    }

    public getSpoolid(): number{
        return this.spoolid;
    }

    public setSpoolid(spoolid: number): void{
        this.spoolid = spoolid;
    }

    public getAmount(): number{
        return this.amount;
    }

    public setAmount(amount: number): void{
        this.amount = amount;
    }

    public getStatus(): string{
        return this.status;
    }

    public setStatus(status: string): void{
        this.status = status;
    }

    public getDate(): string{
        return this.date;
    }

    public setDate(date: string): void{
        this.date = date;
    }

    public getDateUntil(): string{
        return this.dateUntil;
    }

    public setDateUntil(dateUntil: string): void{
        this.dateUntil = dateUntil;
    }

    public getDateDone(): string{
        return this.dateDone;
    }

    public setDateDone(dateDone: string): void{
        this.dateDone = dateDone;
    }

    public getNotes(): string{
        return this.notes;
    }

    public setNotes(notes: string): void{
        this.notes = notes;
    }

}