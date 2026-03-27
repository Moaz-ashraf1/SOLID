
import { Order } from "./models/Order";
import { Payment } from "./models/Payment";
import { Customer } from "./models/Customer";
import { IPaymentProcessor } from "./interfaces/Ipaymentprocessor";
import { INotificationService } from "./interfaces/Inotificationservice";
import { OrderProcessor } from "./classes/OrderProcessor";
import { PaymentProcessor } from "./classes/Paymentprocessor";
import { NotificationService } from "./classes/Notificationservice";
import { IOrderProcessor } from './interfaces/IOrderProcessor';

 export class OrderManager{
   private orderProcessor: IOrderProcessor = new OrderProcessor();
    private paymentProcessor: IPaymentProcessor = new PaymentProcessor();
    private notificationService: INotificationService = new NotificationService();

    
  public handleOrder(order: Order, payment: Payment, customer: Customer): void {
        this.orderProcessor.processOrder(order);
        this.paymentProcessor.processPayment(order, payment);
        this.notificationService.sendEmailNotification(customer, "Order processed!");
    }
}
