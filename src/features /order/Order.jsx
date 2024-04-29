// Test ID: IIDSAT

import { getOrder } from "../../services/apiRestaurant";

import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utilties /helpers";
import { Link, useLoaderData } from "react-router-dom";
import SearchOrder from "./SearchOrder";
import Navbar from "../../ui/Navbar";
import OrderItem from "./OrderItem";
import CartItem from "../cart/CartItem";
import { useSelector } from "react-redux";


// const order = {
//   id: "ABCDEF",
//   customer: "Jonas",
//   phone: "123456789"≥,
//   address: "Arroios, Lisbon , Portugal",
//   priority: true,
//   estimatedDelivery: "2027-04-25T10:00:00",
//   cart: [
//     {
//       pizzaId: 7,
//       name: "Napoli",
//       quantity: 3,   
//       unitPrice: 16,
//       totalPrice: 48,
//     },
//     {
//       pizzaId: 5,
//       name: "Diavola",
//       quantity: 2,
//       unitPrice: 16,
//       totalPrice: 32,
//     },
//     {
//       pizzaId: 3,
//       name: "Romana",
//       quantity: 1,
//       unitPrice: 15,
//       totalPrice: 15,
//     },
//   ],
//   position: "-9.000,38.000",
//   orderPrice: 95,
//   priorityPrice: 19,
// };

function Order() {
  // const order =  useLoade rData()
  const order =  useLoaderData()
  const item = useSelector(select => select.cart?.cart)
   
  // const totalPrice =useSelector(state => state.cart?.cart[0]?.totalPrice)
  


  
  const pizzaQuantity = item.reduce((acc, curr) => acc + curr.quantity, 0);
  const finallPrice = item.reduce((acc, curr) => acc + curr.totalPrice, 0);


 console.log(finallPrice , "order");
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
  
  } = order;
  console.log(order , "lkdsl");
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <>
    <Navbar/>
    <div className="h-lvh  max-w-3xl mx-auto">
      <div className="flex justify-between items-center my-5">
        <h2 className=" font-bold">Order #{id} Status</h2>
        <div>
          {priority && <span className="bg-red-500 text-white py-1 px-3 rounded-full uppercase text-sm font-light">Priority</span>}
          <span className="bg-green-500 text-white py-1 px-3 rounded-full uppercase text-sm font-light ml-3">{status} order</span>
        </div>
      </div>

      <div className="bg-[#e7e5e4] px-5 flex justify-between items-center py-5 my-8 font-bold">
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="font-light text-sm">(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      {/* item */}

      <ul>
      {item.map((pizza , i) =>  <OrderItem item={item} key={item.id} i={i} /> )}
      </ul>

      <div className="px-5 py-5 bg-[#e7e5e4] flex flex-col gap-2">
        <p>Price pizza: {formatCurrency(finallPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="font-bold">To pay on delivery: {formatCurrency(finallPrice + priorityPrice)}</p>
      </div>
    </div>

    </>
  );
}


export async function loader({params}){
  const order = await getOrder(params.orderId)
  return order
}


export default Order;


