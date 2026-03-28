export class Customer{

    private name: string;
    private email: string;
    private phone: string;

    constructor(name:string,email:string,phone:string){
        this.name = name
        this.email = email
        this.phone=phone;
    }

    public getName():string{
        return this.name;
    }
    public getEmail():string{
        return this.email;
    }
    public getPhone():string{
        return this.phone
    }

}