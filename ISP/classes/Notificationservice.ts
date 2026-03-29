import { Customer } from "../models/Customer";

import {INotificationService} from "../interfaces/Inotificationservice";

export class NotificationService implements INotificationService {
    public sendEmailNotification(customer: Customer, message: string): void {
        console.log("Sending email notification to: " + customer.getEmail() + " with message: " + message);
    }
}