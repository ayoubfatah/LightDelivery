import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

function CartOverview() {
  const pizza = useSelector(state => state.cart)
  console.log(pizza, "lkdlslsdl");

  const pizzaQuantity = pizza.cart.reduce((acc, curr) => acc + curr.quantity, 0);
  const finallPrice = pizza.cart.reduce((acc, curr) => acc + curr.unitPrice, 0);
  return (
    <li className={`${pizzaQuantity === 0 ? "hidden" : " "}  bg-black text-white px-5 py-3 fixed bottom-0 left-0 w-full list-none`	}>
      <div className=" items-center flex  justify-between">
       <div className="flex gap-4">
        <span> {pizzaQuantity} PIZZAS</span>
        <span>{finallPrice} $</span>
       </div>
       <div>
        <Link to="/cart">OPEN CART</Link>
       </div>
      </div>
    </li>
  );
}

export default CartOverview;