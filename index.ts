import { DeliveryOrder } from "./LSP/models/DeliveryOrder";
import { PickupOrder } from "./LSP/models/PickupOrder";

const delivery = new DeliveryOrder("Labtop" , 5000);
const pickup = new PickupOrder("Phone" , 3000);

console.log("=== Delivery Order ===");
console.log("Name: " , delivery.getName());
console.log("Order Price:" , delivery.getOrderPrice());
console.log("Total Price:" , delivery.getTotalPrice());