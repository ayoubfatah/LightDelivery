import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className='h-lvh max-w-3xl flex flex-col py-11 gap-8  mx-auto'>
      <Link to="/menu" className='text-blue-400'>&larr; Back to menu</Link>

      <p>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
