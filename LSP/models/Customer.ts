import {UserManagement} from "../interfaces/UserManagement"

export class Customer implements UserManagement{
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

    public  subscribeToNewProductAvaliability():void{
        console.log("Subscrubing to new product availability ...")
    }

    public  subscribeToSMSNotification():void{
        console.log("Subscrubing to SMS Notification ...")
    }

    public  updateUserProfile(customer:Customer):void{
        console.log("Updating user profile + " + customer.getName() + "...")
    }

    public changePassword(customer:Customer,  newPassword:string) {
    console.log("Updating user: " + customer.getName() + ".....");

  }

}