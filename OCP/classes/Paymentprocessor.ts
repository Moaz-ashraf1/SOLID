import { Order } from "../models/Order";
import { Payment } from "../models/Payment";
import { PaymentStartegy } from "../interfaces/PaymentStrategy";


export class PaymentProcessor  {
    paymentStarteg:PaymentStartegy ;

    constructor( paymentStarteg:PaymentStartegy){
      this.paymentStarteg = paymentStarteg;
    }

     processPayment (order:Order):void{
       console.log(`Processing Payment Of Order: ` + order.getName());
       console.log(`Issuing Payment for amount: ` + order.getOrderPrice());
       this.paymentStarteg.processPayment(order.getOrderPrice());
     }

}