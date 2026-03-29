import { Customer } from "../models/Customer";

export interface UserManagement {


updateUserProfile( customer:Customer):void;

changePassword(customer:Customer, newPassword:string ):void;

subscribeToNewProductsAvailability():void;

 subscribeToSMSNotifications():void;

 changePassword(customer:Customer,  newPassword:string):void;

}