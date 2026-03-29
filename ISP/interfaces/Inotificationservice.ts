import { Customer } from "../models/Customer";

export interface INotificationService {
    sendEmailNotification(customer: Customer, message: string): void;
}