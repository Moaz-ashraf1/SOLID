import { Order } from "../models/Order";
 
export interface IOrderProcessor {
    processOrder(order: Order): void;
}

