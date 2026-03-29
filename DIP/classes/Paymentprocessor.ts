import { Order } from "../models/Order";
import { Payment } from "../models/Payment";
import { PaymentStrategy } from "../interfaces/PaymentStrategy";
import { VisaPaymentStrategy } from "../../OCP/classes/VisaPaymentStrategy";

export class PaymentProcessor  {
    paymentStrategy:PaymentStrategy ;

    constructor( paymentStrategy:PaymentStrategy){
      this.paymentStrategy = new VisaPaymentStrategy();
    }

     processPayment (order:Order):void{
       console.log(`Processing Payment Of Order: ` + order.getName());
       console.log(`Issuing Payment for amount: ` + order.getOrderPrice());
       this.paymentStrategy.processPayment(order.getOrderPrice());
     }

}