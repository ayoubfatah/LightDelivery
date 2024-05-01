import { useDispatch, useSelector } from "react-redux";
import { deleteItem , incItem ,decItem , } from "../cart/cartSlice";
import EmptyCart from './EmptyCart'

function CartItem({item ,i}) {

  const dispatch = useDispatch()
  const {name , quantity , totalPrice , id} = item[i]
  console.log(id);
  function handleQuantityInc(){
    dispatch(incItem(id))
  }
  console.log(quantity ,"lkjdls");
  function handleQuantityDec(){
    if(quantity) {
      dispatch(decItem(id))

    }
  }
  function handleDelete(){
   dispatch( deleteItem(id))
  }
 
  return (
  <>
   

    <li 
    className='border-b border-dashed py-5 flex justify-between'>
        <span>{quantity}x {name} </span>
        {/* <span className=''> €{totalPrice} </span> */}
        <div className="flex gap-4  items-center">
            <span className='font-bold'> €{totalPrice} </span>
            <button   className="flex items-center gap-2">
          <button onClick={handleQuantityDec}  className="bg-yellow-400 w-9  h-9 rounded-full flex items-center justify-center">-</button>
           <span className="quantity "> {quantity} </span>
           <button  onClick={handleQuantityInc}  className="bg-yellow-400 w-9  h-9 rounded-full flex items-center justify-center">+</button></button>
           <button  onClick={handleDelete} className="inline-block text-sm px-4 py-3 font-semibold tracking-wide uppercase transition-colors duration-300 bg-yellow-400 rounded-full text-stone-800 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2 md:px-5 md:py-2.5 text-xs"> Delete </button>

        </div>
    </li>  
      </>
  );
}

export default CartItem;
