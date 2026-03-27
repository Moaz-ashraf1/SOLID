import { Order } from "../models/Order";
import { Payment } from "../models/Payment";
import { IPaymentProcessor } from "../interfaces/Ipaymentprocessor";


export class PaymentProcessor implements IPaymentProcessor {
    public processPayment(order: Order, payment: Payment): void {
        console.log("Processing payment of order: " + order.getName());
        console.log("Issuing payment for amount: " + order.getOrderPrice());

        switch (payment.getType()) {
            case "VISA":
                console.log("Processing visa card payments ...");
                break;
            case "MASTER_CARD":
                console.log("Processing master card payments ...");
                break;
            case "AMERICAN_EXPRESS":
                console.log("Processing american express card payments ...");
                break;
            default:
                throw new Error("Unsupported payment type.");
        }
    }
}