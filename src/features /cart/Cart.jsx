import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from "../../ui/Navbar"
import useFadeInOnScroll from '../../utilties /useObserve';
import CartItem from './CartItem';
import { clearCart} from "../cart/cartSlice";
import EmptyCart from './EmptyCart';


function Cart() {
  const pizza = useSelector(state => state.cart.cart)
  // const totalPrice =useSelector(state => state.cart?.cart[0]?.totalPrice)  

  const finallPrice = pizza.reduce((acc, curr) => acc + curr.totalPrice, 0);

  const dispatch = useDispatch()
  function handleClearCart(){
    dispatch(clearCart())
  }
  const [ref , isVisible] = useFadeInOnScroll()
  const item = useSelector(select => select.cart?.cart)
 const userName = useSelector(state => state.user.userName)
  if (pizza.length <= 0) {
    return  <EmptyCart/>
   
  }
  return (
    <>
      <Navbar></Navbar>

    <div ref={ref} className={`${isVisible ? "opacity-1 transition-all duration-500 scale-100 " : " scale-0 opacity-0 "}  h-lvh flex flex-col  max-w-3xl mx-auto my-5 `}>
      <Link className='text-blue-800 mb-5' to="/menu">&larr; Back to menu</Link>
      <h2 className='font-semibold  text-[20px]'>Your cart  ,{userName}</h2>
      <ul className='my-3 '>
       {item.map((pizza , i) =>  <CartItem item={item} key={item[i].id} i={i} /> )}
      </ul>
      <div className=' flex items-center'>
        <span className='font-bold'>Final price :</span>
        <span className='ml-auto font-bold'>€{finallPrice}</span>
      </div>
      <div className='flex  gap-2  mt-10'>
        <Link to="/order/new" className="inline-block text-sm px-4 py-3 font-semibold tracking-wide uppercase transition-colors duration-300 bg-yellow-400 rounded-full text-stone-800 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2 md:px-5 md:py-2.5 text-xs">Order now</Link>
        <button onClick={handleClearCart} className="inline-block text-sm px-4 py-3   font-semibold tracking-wide uppercase transition-colors duration-300 bg-white-400 border rounded-full text-stone-800 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2 md:px-5 md:py-2.5 text-xs"> Clear cart</button>
      </div>
    </div>
    </>
  );
}

export default Cart;
