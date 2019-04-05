export class User{
    private id: number;
    private name: string;
    private email: string;
    private group: string;

    constructor(id, name, email, group){
        this.id = id;
        this.name = name;
        this.email = email;
        this.group = group;
    }

    public getId(){
        return this.id;
    }
    public setId(id: number){
        this.id = id;
    }
    public getName(){
        return this.name;
    }
    public setName(name: string){
        this.name = name;
    }
    public getEmail(){
        return this.email;
    }
    public setEmail(email: string){
        this.email = email;
    }
    public getGroup(){
        return this.group;
    }
    public setGroup(group){
        this.group = group;
    }
}