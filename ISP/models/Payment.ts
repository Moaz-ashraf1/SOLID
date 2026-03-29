
export type PaymentType = "VISA"  | "MASTER_CARD" | "AMERICAN_EXPRESS";
export class Payment {
    private type: PaymentType;
 
    constructor(type: PaymentType) {
        this.type = type;
    }
 
    public getType(): PaymentType {
        return this.type;
    }
}