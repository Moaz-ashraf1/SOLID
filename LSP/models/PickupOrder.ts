import { Order } from "./Order";
import { IShippable } from "../interfaces/IShippable";

export class PickupOrder  extends Order implements IShippable{


  getShippingCost(): number {
      return 0;
  }
}