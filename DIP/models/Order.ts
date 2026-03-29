import { IShippable } from "../interfaces/IShippable";

export class Order {
    private name:string;
    private price: number;

    constructor(name :string , price:number){
        this.name = name;
        this.price = price;
    }

    public getName():string{
        return this.name;
    }

    public getOrderPrice ():number{
        return this.price
    }

    public getTotalPrice(): number {
    if ('getShippingCost' in this) {
        return this.price + (this as unknown as IShippable).getShippingCost();
    }
    return this.price;
    }
}