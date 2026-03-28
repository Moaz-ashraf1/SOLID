import { Order } from "../models/Order";
import { Payment } from "../models/Payment";
import { PaymentStrategy } from "../interfaces/PaymentStrategy";

export class PaymentProcessor  {
    paymentStarteg:PaymentStrategy ;

    constructor( paymentStarteg:PaymentStrategy){
      this.paymentStarteg = paymentStarteg;
    }

     processPayment (order:Order):void{
       console.log(`Processing Payment Of Order: ` + order.getName());
       console.log(`Issuing Payment for amount: ` + order.getOrderPrice());
       this.paymentStarteg.processPayment(order.getOrderPrice());
     }

}