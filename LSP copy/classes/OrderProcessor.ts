import { Order } from "../models/Order";
import { IOrderProcessor } from "../interfaces/IOrderProcessor";

export class OrderProcessor implements IOrderProcessor{

    public processOrder(order: Order): void {
      console.log("Processing Order: " + order.getName() + " now...");

    }
}