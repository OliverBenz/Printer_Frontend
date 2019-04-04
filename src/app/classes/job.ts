export class Job{
    private user: string;
    private spoolid: number;
    private amount: number;
    private status: string;
    private date: string;
    private date_until: string;
    private date_done: string;
    private notes: string;

    constructor(amount, date, notes){
        this.amount = amount;
        this.date = date;
        this.notes = notes;
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

    public getDate_until(): string{
        return this.date_until;
    }

    public setDate_until(date_until: string): void{
        this.date_until = date_until;
    }

    public getDate_done(): string{
        return this.date_done;
    }

    public setDate_done(date_done: string): void{
        this.date_done = date_done;
    }

    public getNotes(): string{
        return this.notes;
    }

    public setNotes(notes: string): void{
        this.notes = notes;
    }

}