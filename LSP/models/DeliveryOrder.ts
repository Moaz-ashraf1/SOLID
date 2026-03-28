import { Order } from "./Order";
import { IShippable } from "../interfaces/IShippable";

export class DeliveryOrder extends Order implements IShippable{
  static readonly SHIPPING_COST = 100.0;

  getShippingCost(): number {
      return DeliveryOrder.SHIPPING_COST;
  }
}