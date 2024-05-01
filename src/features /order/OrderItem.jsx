import { useSelector } from "react-redux";

function OrderItem({item ,i}) {
 console.log(item);
  const {name , quantity , totalPrice , ingredients} = item[i]
 
  return (
    <li 
    className='border-b border-dashed py-5 flex justify-between'>
       <div> <span>{quantity}x {name} </span>
        <p className="text-gray-500">{ingredients.join(",")}</p>
       </div>
        <span className='font-bold'> €{totalPrice} </span>
    </li>  
  );
}

export default OrderItem;
