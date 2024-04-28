import { useState } from "react";
import { formatCurrency } from "../../utilties /helpers";
import { useDispatch } from "react-redux";
import { addItem , deleteItem , incItem ,decItem} from "../cart/cartSlice";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const [addToCart , setAddToCart] = useState(false)
  const [quantity , setQuantity ] = useState(1)
   const dispatch = useDispatch()
  function handleQuantityInc(){
    setQuantity(q =>  q + 1 )
    dispatch(incItem(id))

  }
  function handleQuantityDec(){
    if(quantity === 1) return
    dispatch(decItem(id))
    setQuantity(q =>  q  - 1 )
  }
  
  function handleAddItem(){
    setAddToCart(true)
    const item ={
      id,
      name,
      quantity :  quantity  ,
      ingredients,
      unitPrice : unitPrice ,

    }
    
    dispatch(addItem(item))
  }
  function handleDelete(){
    setAddToCart(false)
    dispatch(deleteItem(id))
  }
  
  return (

      <li className={`flex border-b border-dashed  items-center my-2  ${soldOut ? "soldOut" : ""} `}>
      <img  className="mr-5 w-[90px] h-[90px]" src={imageUrl} alt={name} />
      <div className="w-full">
        <p>{name}</p>
        <p className="mb-3">{ingredients.join(', ')}</p>
        <div className="flex items-center pr-2 pb-3">
          {!soldOut ? <p className="mr-auto">{formatCurrency(unitPrice)}</p> : <p className="mr-auto">Sold out</p>}
          {!soldOut && 
          <div className="flex items-center gap-5"> 
           {addToCart && <div className="flex items-center gap-4">
           <button onClick={handleQuantityDec}  className="bg-yellow-400 w-9  h-9 rounded-full flex items-center justify-center">-</button>
           <span className="quantity"> {quantity} </span>
           <button  onClick={handleQuantityInc} className="bg-yellow-400 w-9  h-9 rounded-full flex items-center justify-center">+</button>
           </div> }
           { !addToCart && <button onClick={ handleAddItem} className="inline-block text-sm px-4 py-3 font-semibold tracking-wide uppercase transition-colors duration-300 bg-yellow-400 rounded-full text-stone-800 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2 md:px-5 md:py-2.5 text-xs"> Add to cart </button>}
           { addToCart && <button  onClick={handleDelete} className="inline-block text-sm px-4 py-3 font-semibold tracking-wide uppercase transition-colors duration-300 bg-yellow-400 rounded-full text-stone-800 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2 md:px-5 md:py-2.5 text-xs"> Delete </button>}
          </div>
          }
        </div>
      </div>
    </li>
   
  );
}

export default MenuItem;
