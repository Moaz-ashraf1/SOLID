import { SubscriptionNotificationService } from "../interfaces/SubscriptionNotificationService";
import { Customer } from "./Customer";

export class Subscriber implements SubscriptionNotificationService {
    private email: string;

    constructor(email: string) {
        this.email = email;
    }




    subscribeToNewProductAvaliability(): void {
        console.log("Subscribing to new products availability...");
    }
    subscribeToSMSNotification(): void {
        console.log("Subscribing to new products availability...");
    }
}