import {UserManagement} from "../interfaces/UserManagement"
import { Customer } from "./Customer";

export class Subscriber implements UserManagement {
    private email: string;

    constructor(email: string) {
        this.email = email;
    }

    updateUserProfile(customer: Customer): void {
        throw new Error("Method not implemented.");
    }

    changePassword(customer: unknown, newPassword: unknown): void {
        throw new Error("Method not implemented.");
    }


    subscribeToNewProductAvaliability(): void {
        console.log("Subscribing to new products availability...");
    }
    subscribeToSMSNotification(): void {
        console.log("Subscribing to new products availability...");
    }
}