import { Order } from "../models/Order";
import { Payment } from "../models/Payment";

export interface IPaymentProcessor {
    processPayment(order: Order, payment: Payment): void;
}