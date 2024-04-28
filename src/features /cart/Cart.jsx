import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from "../../ui/Navbar"
import useFadeInOnScroll from '../../utilties /useObserve';
const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const [ref , isVisible] = useFadeInOnScroll()
  const item = useSelector(select => select.cart.cart)

 const userName = useSelector(state => state.user.userName)
  return (
    <>
      <Navbar></Navbar>
    <div ref={ref} className={`${isVisible ? "opacity-1 transition-all duration-500 scale-100 " : " scale-0 opacity-0 "}  h-lvh flex flex-col  max-w-3xl mx-auto my-5 `}>
      <Link className='text-blue-800 mb-5' to="/menu">&larr; Back to menu</Link>
      <h2 className='font-semibold  text-[20px]'>Your cart  ,{userName}</h2>
      <ul className='my-3 '>
        <li className='border-b border-dashed py-5'>dskldlskdl  </li>
      </ul>
      <div className='flex  gap-2  mt-10'>
        <Link to="/order/new" className="inline-block text-sm px-4 py-3 font-semibold tracking-wide uppercase transition-colors duration-300 bg-yellow-400 rounded-full text-stone-800 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2 md:px-5 md:py-2.5 text-xs">Order now</Link>
        <button className="inline-block text-sm px-4 py-3   font-semibold tracking-wide uppercase transition-colors duration-300 bg-white-400 border rounded-full text-stone-800 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2 md:px-5 md:py-2.5 text-xs"> Clear cart</button>
      </div>
    </div>
    </>
  );
}

export default Cart;
