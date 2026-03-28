import { Order } from "./models/Order";
import { Payment } from "./models/Payment";
import { Customer } from "./models/Customer";
import { OrderManager } from "./OrderManager";

const order = new Order("Labtop" , 15000);
const payment = new Payment("VISA");
const customer = new Customer("Moaz" , "moaz@gmail.com" , "01000000")

const manager = new OrderManager();
manager.handleOrder(order,payment,customer);

